import {RatingDto} from "../dto/users/rating.dto";
import {RatingEntity} from "../entities/rating.entity";

export interface IRatingsRepository {
    createRating(data: RatingDto): Promise<RatingEntity>
    getRatings(userID: string, take: number, skip: number): Promise<RatingEntity[]>
}