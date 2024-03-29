import {Inject, Injectable} from "@nestjs/common";
import {GameDto} from "../../../domain/dto/games/game.dto";
import {IGamesRepository} from "../../../domain/repositories/IGames.repository";
import {RatingGameDto} from "../../../domain/dto/users/rating.dto";
import {IRatingsRepository} from "../../../domain/repositories/IRatings.repository";

@Injectable()
export class GetRatingsUseCase {
    constructor(
        @Inject("IRatingsRepository") private ratingRepository: IRatingsRepository,
        @Inject("IGamesRepository") private gamesRepository: IGamesRepository
    ) {}

    async execute(data: string): Promise<RatingGameDto[]>{
        const ratings = await this.ratingRepository.getRatings(data, 10, 0);

        if(ratings.length == 0)
            return []

        const games: GameDto[] = await this.gamesRepository.getRatings(ratings);

        const ratingsGames = ratings.map((rating, i) => {
            games[i].cover.url = `https:${games[i].cover.url}`;
            games[i].cover.url = games[i].cover.url.replace("thumb", "logo_med")

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