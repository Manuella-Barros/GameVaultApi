import {Controller, Get} from "@nestjs/common";
import {GetAllGamesUseCase} from "../../../app/useCases/games/getAllGames.useCase";

@Controller("/games")
export class GetAllGamesController {

    constructor(private getAllGamesUseCase: GetAllGamesUseCase) {}
    @Get("/getAllGames")
    handle(){
        return this.getAllGamesUseCase.getAllGames();
    }
}
