import {IGamesRepository} from "../../../domain/repositories/IGames.repository";
import {Inject, Injectable} from "@nestjs/common";

@Injectable()
export class GetRandomGameUseCase{
    constructor(@Inject("IGamesRepository") private gamesRepository: IGamesRepository) {}

    async execute() {
        const game = await this.gamesRepository.getRandomGame();

        game.cover.url = "https:" + game.cover.url.replace("t_thumb", "t_720p"); //pegando imagem de qualidade melhor
        game.first_release_date = new Date(game.first_release_date).toLocaleDateString("pt-BR")

        return game
    }
}