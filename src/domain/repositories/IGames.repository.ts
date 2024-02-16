import {GameDto} from "../dto/games/game.dto";
import {RatingEntity} from "../entities/rating.entity";

export interface IGamesRepository {
    getRandomGame(): Promise<GameDto>
    getAllGenres()
    getRatings(ratings: RatingEntity[]): Promise<GameDto[]>
}