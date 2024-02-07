import {Module} from "@nestjs/common";
import {CreateUserController} from "../../controllers/users/createUser.controller";
import {LoginController} from "../../controllers/users/login.controller";
import {CreateUserUseCase} from "../../../app/useCases/users/createUser.useCase";
import {PrismaUsersRepository} from "../../../app/repositories/prisma/PrismaUsersRepository";
import {LoginUseCase} from "../../../app/useCases/users/login.useCase";
import {AuthModule} from "../auth/auth.module";

@Module({
    imports: [AuthModule],
    controllers: [CreateUserController, LoginController],
    providers: [
        {
            provide: "IUsersRepository",
            useClass: PrismaUsersRepository,
        },
        CreateUserUseCase,
        LoginUseCase,
    ],
})
export class UsersModule {}
