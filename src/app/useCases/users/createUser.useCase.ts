import {PrismaUsersRepository} from "../../repositories/prisma/PrismaUsersRepository";
import {Inject, Injectable} from "@nestjs/common";
import {IUsersRepository} from "../../../domain/repositories/IUsers.repository";

@Injectable()
export class CreateUserUseCase {
    constructor(@Inject("IUsersRepository") private usersRepository: IUsersRepository) {}
    execute(){
        return this.usersRepository.createUser()
    }
}