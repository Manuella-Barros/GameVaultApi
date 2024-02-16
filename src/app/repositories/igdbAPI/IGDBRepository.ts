import {Injectable} from "@nestjs/common";
import {IGamesRepository} from "../../../domain/repositories/IGames.repository";
import axios, {AxiosInstance} from "axios";
import {GameDto} from "../../../domain/dto/games/game.dto";
import {RatingEntity} from "../../../domain/entities/rating.entity";

@Injectable()
export class IGDBRepository implements IGamesRepository {
    private igdb; // guarda a url base e as autorizações
    private platformsFilter = "platforms = (8, 6, 130, 11, 41, 9, 48, 167, 169, 12)";
    private fields = "id, name, genres.name, cover.url, summary, first_release_date, platforms.name"
    private requiredFields = `genres.name != null & cover.url != null & summary != null & first_release_date != null & platforms.name != null`

    constructor() {
        this.auth()
    }

    async getRandomGame(): Promise<GameDto> {
        let offset: number, game: GameDto[];

        const query = `fields ${this.fields}; where ${this.requiredFields} & ${this.platformsFilter}`
        const { count } = await this.getCount(this.igdb, 'where rating > 80;') // qnt de jogos com o raing > 80

        do { // verifica se a query retornou algo
            offset = this.getRandomInt(1, count)
            game = await this.getIGDBGame(this.igdb, `${query}; limit 1; offset ${offset};`)
        } while (this.isEmptyVector(game))

        return game[0];
    }

    async getAllGenres(){
        const {data} = await this.igdb.post('genres', "fields id, name; limit 70;")

        return data
    }

    async getRatings(ratings: RatingEntity[]): Promise<GameDto[]> {
        let gamesID: string = "(", game: GameDto[];
        ratings.map((rating, i) => gamesID += rating.gameID + (i != (ratings.length - 1) ? "," : ")"))

        const query = `fields ${this.fields}; where id = ${gamesID}; sort id asc;`

        game = await this.getIGDBGame(this.igdb, query)

        return game;
    }
    private async auth() {
        const response = await fetch(
            "https://id.twitch.tv/oauth2/token?client_id=slh1wjzsta1qkzrhdklf8szk6m8yiz&client_secret=y7e1prvgzi045xa3gv5smhfun65kt2&grant_type=client_credentials",
            {
                method: "POST",
            },
        );
        const authObject: { access_token: string } = await response.json();

        this.igdb = axios.create({
            baseURL: `https://api.igdb.com/v4`,
            headers: {
                'Content-Type': 'text/plain',
                Authorization: `Bearer ${authObject.access_token}`,
                'Client-ID': `slh1wjzsta1qkzrhdklf8szk6m8yiz`,
            },
        })
    }

    // pega um número aleatório
    private getRandomInt(min: number, max: number) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // verifica se o objeto é vazio
    private isEmptyVector(vector: any[]) {
        vector.map(item => {
            if(!Object.keys(item).length){
                return true
            }
        })

        return false;
    }

    // retorna a quantidades de jogos de acordo com a query
    private async getCount(api: AxiosInstance, query: string) {
        try {
            const response = await api.post('/games/count', query)

            return response.data
        } catch (err) {
            console.error(err)
        }
    }

    private async getIGDBGame(api: AxiosInstance, query: string): Promise<GameDto[]> {
        const {data} = await api.post('games', query)

        return data;
    }
}