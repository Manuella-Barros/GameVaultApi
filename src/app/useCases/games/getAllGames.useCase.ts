import {IGamesRepository} from "../../../domain/repositories/IGames.repository";
import {Inject, Injectable} from "@nestjs/common";

@Injectable()
export class GetAllGamesUseCase implements IGamesRepository{
    constructor(@Inject("IGamesRepository") private gamesRepository: IGamesRepository) {}

    getAllGames() {
        return this.gamesRepository.getAllGames();
    }
}