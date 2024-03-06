import {Controller, Get, Param} from "@nestjs/common";
import {GetGameCommentsUseCase} from "../../../app/useCases/comments/getGameComments.useCase";

@Controller("/comments")
export class GetGameCommentsController {
    constructor(private getGameCommentsUseCase: GetGameCommentsUseCase) {}

    @Get("/getGameComments/:id")
    handle(@Param("id") id: string){
        return this.getGameCommentsUseCase.execute(id);
    }
}