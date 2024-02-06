import {Controller, Get} from "@nestjs/common";
import {GetRandomGameUseCase} from "../../../app/useCases/games/getRandomGame.useCase";

@Controller("/games")
export class GetRandomGameController {
    constructor(private getRandomGameUseCase: GetRandomGameUseCase) {}
    @Get("/getRandomGame")
    handle(){
        return this.getRandomGameUseCase.execute();
    }
}
