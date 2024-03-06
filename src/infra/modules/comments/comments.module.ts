import {Module} from "@nestjs/common";
import {CreateCommentController} from "../../controllers/comments/createComment.controller";
import {PrismaCommentsRepository} from "../../../app/repositories/prisma/PrismaCommentsRepository";
import {CreateCommentUseCase} from "../../../app/useCases/comments/createComment.useCase";
import {GetGameCommentsUseCase} from "../../../app/useCases/comments/getGameComments.useCase";
import {GetGameCommentsController} from "../../controllers/comments/getGameComments.controller";
import {PrismaUsersRepository} from "../../../app/repositories/prisma/PrismaUsersRepository";

@Module({
    controllers: [
        CreateCommentController,
        GetGameCommentsController
    ],
    providers: [
        {
            provide: "ICommentsRepository",
            useClass: PrismaCommentsRepository
        },
        CreateCommentUseCase,
        GetGameCommentsUseCase
    ]
})
export class CommentsModule{}