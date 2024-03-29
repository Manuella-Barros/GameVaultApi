import {Body, Controller, Injectable, Post, UsePipes} from "@nestjs/common";
import {CreateRatingUseCase} from "../../../app/useCases/ratings/createRating.useCase";
import {RatingDto} from "../../../domain/dto/users/rating.dto";
import {ZodValidationPipe} from "nestjs-zod";

@Controller("/ratings")
export class CreateRatingController {
    constructor(private createRatingUseCase: CreateRatingUseCase) {}

    @Post("/createRating")
    @UsePipes(ZodValidationPipe)
    handle(@Body() body: RatingDto){
        return this.createRatingUseCase.execute(body);
    }
}