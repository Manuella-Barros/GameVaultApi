import {Body, Controller, Post, UsePipes} from "@nestjs/common";
import {CreateCommentUseCase} from "../../../app/useCases/users/createComment.useCase";
import {ZodValidationPipe} from "nestjs-zod";
import {CommentDto} from "../../../domain/dto/users/comment.dto";

@Controller("/users")
export class CreateCommentController {
    constructor(private createCommentUseCase: CreateCommentUseCase) {}
    @Post("/createComment")
    @UsePipes(ZodValidationPipe)
    handle(@Body() body: CommentDto){
        return this.createCommentUseCase.execute(body);
    }
}