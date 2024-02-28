import {Inject, Injectable} from "@nestjs/common";
import {RatingDto} from "../../../domain/dto/users/rating.dto";
import {IRatingsRepository} from "../../../domain/repositories/IRatings.repository";

@Injectable()
export class CreateRatingUseCase {
    constructor(@Inject("IRatingsRepository") private usersRepository: IRatingsRepository) {}

    execute(data: RatingDto){
        return this.usersRepository.createRating(data)
    }
}