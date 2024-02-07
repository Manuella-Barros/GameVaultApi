import {Injectable} from "@nestjs/common";
import {IGamesRepository} from "../../../domain/repositories/IGames.repository";
import axios, {AxiosInstance} from "axios";

@Injectable()
export class IGDBRepository implements IGamesRepository{
    private igdb; // guarda a url base e as autorizações

    constructor() {
        this.auth()
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

    async getRandomGame() {
        try {
            let offset: number, game;
            const { count } = await this.getCount(this.igdb, 'where rating > 80;') // qnt de jogos com o raing > 80

            do { // verifica se a query retornou algo
                offset = this.getRandomInt(1, count)
                game = await this.getIGDBGame(offset, this.igdb)

            } while (this.isEmptyObject(game))

            return game;
        } catch (err) {
            console.error(err)
        }
    }



    // pega um número aleatório
    private getRandomInt(min: number, max: number) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // verifica se o objeto é vazio
    private isEmptyObject(obj) {
        return !Object.keys(obj).length
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

    private async getIGDBGame(offset, api: AxiosInstance) {
        try {
            const query = `
                                    fields id, name, genres.name, cover.url, summary, storyline, first_release_date, involved_companies.company.name, platforms.name, total_rating; 
                                    where cover != null, name != null;
                                    limit 1; 
                                    offset ${offset};
                                  `
            const response = await api.post('games', query)
            return response.data[0]
        } catch (err) {
            console.error(err)
        }
    }
}