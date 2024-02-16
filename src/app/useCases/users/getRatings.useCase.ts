import {Inject, Injectable} from "@nestjs/common";
import {IUsersRepository} from "../../../domain/repositories/IUsers.repository";
import {GameDto} from "../../../domain/dto/games/game.dto";
import {IGamesRepository} from "../../../domain/repositories/IGames.repository";
import {RatingGameDto} from "../../../domain/dto/users/rating.dto";

@Injectable()
export class GetRatingsUseCase {
    constructor(
        @Inject("IUsersRepository") private usersRepository: IUsersRepository,
        @Inject("IGamesRepository") private gamesRepository: IGamesRepository
    ) {}
    async execute(data: string): Promise<RatingGameDto[]>{
        const ratings = await this.usersRepository.getRatings(data, 10, 0);
        const games: GameDto[] = await this.gamesRepository.getRatings(ratings);

        const ratingsGames = ratings.map((rating, i) => {
            return {
                rating: rating,
                game: games[i]
            }
        })
        ratingsGames.sort(function(a, b){
            return Number(b.rating.updatedAt) - Number(a.rating.updatedAt)
        });

        return ratingsGames
    }
}