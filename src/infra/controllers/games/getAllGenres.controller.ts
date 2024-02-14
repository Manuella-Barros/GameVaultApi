import {Controller, Get} from "@nestjs/common";
import {GetAllGenresUseCase} from "../../../app/useCases/games/getAllGenres.useCase";

@Controller("/games")
export class GetAllGenresController {
    constructor(private getAllGenresUseCase: GetAllGenresUseCase) {}

    @Get("/getAllGenres")
    handle(){
        return this.getAllGenresUseCase.execute();
    }
}