import {Inject, Injectable} from "@nestjs/common";
import {IUsersRepository} from "../../../domain/repositories/IUsers.repository";
import {RatingDto} from "../../../domain/dto/users/rating.dto";

@Injectable()
export class CreateRatingUseCase {
    constructor(@Inject("IUsersRepository") private usersRepository: IUsersRepository) {}

    execute(data: RatingDto){
        return this.usersRepository.createRating(data)
    }
}