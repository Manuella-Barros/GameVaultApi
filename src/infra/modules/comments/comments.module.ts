import {Module} from "@nestjs/common";
import {CreateCommentController} from "../../controllers/comments/createComment.controller";
import {PrismaCommentsRepository} from "../../../app/repositories/prisma/PrismaCommentsRepository";
import {CreateCommentUseCase} from "../../../app/useCases/comments/createComment.useCase";

@Module({
    controllers: [
        CreateCommentController
    ],
    providers: [
        {
            provide: "ICommentsRepository",
            useClass: PrismaCommentsRepository
        },
        CreateCommentUseCase
    ]
})
export class CommentsModule{}