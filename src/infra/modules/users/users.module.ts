import {Module} from "@nestjs/common";
import {CreateUserController} from "../../controllers/users/createUser.controller";
import {LoginController} from "../../controllers/users/login.controller";
import {CreateUserUseCase} from "../../../app/useCases/users/createUser.useCase";
import {PrismaUsersRepository} from "../../../app/repositories/prisma/PrismaUsersRepository";

@Module({
    imports: [],
    controllers: [CreateUserController, LoginController],
    providers: [
        {
            provide: "IUsersRepository",
            useClass: PrismaUsersRepository,
        },
        CreateUserUseCase
    ],
})
export class UsersModule {}
