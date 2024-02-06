import {IGamesRepository} from "../../../domain/repositories/IGames.repository";
import {Inject, Injectable} from "@nestjs/common";

@Injectable()
export class GetRandomGameUseCase{
    constructor(@Inject("IGamesRepository") private gamesRepository: IGamesRepository) {}

    execute() {
        return this.gamesRepository.getRandomGame();
    }
}