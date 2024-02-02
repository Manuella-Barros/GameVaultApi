import {PrismaUsersRepository} from "../../repositories/prisma/PrismaUsersRepository";
import {Inject, Injectable} from "@nestjs/common";

@Injectable()
export class CreateUserUseCase {
    constructor(private prismaUsersRepository: PrismaUsersRepository) {}
    execute(){
        return this.prismaUsersRepository.createUser()
    }
}