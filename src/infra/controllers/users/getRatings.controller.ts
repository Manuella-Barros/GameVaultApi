import {Controller, Get, Param, UsePipes} from "@nestjs/common";
import {GetRatingsUseCase} from "../../../app/useCases/users/getRatings.useCase";
import {ZodValidationPipe} from "nestjs-zod";

@Controller("/users")
export class GetRatingsController {
    constructor(private getRatingsUseCase: GetRatingsUseCase) {}
    @Get("/getRatings/:id")
    @UsePipes(ZodValidationPipe)
    handle(@Param("id") id: string){
        return this.getRatingsUseCase.execute(id)
    }
}