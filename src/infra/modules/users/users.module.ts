import {Module} from "@nestjs/common";
import {CreateUserController} from "../../controllers/users/createUser.controller";
import {LoginController} from "../../controllers/users/login.controller";
import {CreateUserUseCase} from "../../../app/useCases/users/createUser.useCase";
import {PrismaUsersRepository} from "../../../app/repositories/prisma/PrismaUsersRepository";
import {LoginUseCase} from "../../../app/useCases/users/login.useCase";
import {AuthModule} from "../auth/auth.module";
import {GetUserByIDController} from "../../controllers/users/getUserByID.controller";
import {GetUserByIDUseCase} from "../../../app/useCases/users/getUserByID.useCase";
import {CreateRatingController} from "../../controllers/users/createRating.controller";
import {CreateRatingUseCase} from "../../../app/useCases/users/createRating.useCase";
import {CreateCommentController} from "../../controllers/users/createComment.controller";
import {CreateCommentUseCase} from "../../../app/useCases/users/createComment.useCase";

@Module({
    imports: [AuthModule],
    controllers: [CreateUserController, LoginController, GetUserByIDController, CreateRatingController, CreateCommentController],
    providers: [
        {
            provide: "IUsersRepository",
            useClass: PrismaUsersRepository,
        },
        CreateUserUseCase,
        LoginUseCase,
        GetUserByIDUseCase,
        CreateRatingUseCase,
        CreateCommentUseCase
    ],
})
export class UsersModule {}
