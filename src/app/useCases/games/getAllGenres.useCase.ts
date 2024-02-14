import {Inject, Injectable} from "@nestjs/common";
import {IGamesRepository} from "../../../domain/repositories/IGames.repository";

@Injectable()
export class GetAllGenresUseCase {
    constructor(@Inject("IGamesRepository") private gamesRepository: IGamesRepository) {}
    execute(){
        return this.gamesRepository.getAllGenres()
    }
}