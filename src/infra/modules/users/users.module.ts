import {Module} from "@nestjs/common";
import {CreateUserController} from "../../controllers/users/createUser.controller";
import {LoginController} from "../../controllers/users/login.controller";
import {CreateUserUseCase} from "../../../app/useCases/users/createUserUseCase";
import {PrismaUsersRepository} from "../../../app/repositories/prisma/PrismaUsersRepository";


@Module({
    imports: [],
    controllers: [CreateUserController, LoginController],
    providers: [CreateUserUseCase, PrismaUsersRepository],
})
export class UsersModule {}
