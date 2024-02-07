import {IUsersRepository} from "../../../domain/repositories/IUsers.repository";
import {Injectable, OnModuleDestroy, OnModuleInit} from "@nestjs/common";
import {PrismaClient} from "@prisma/client";
import {UserDto} from "../../../domain/dto/users/user.dto";

@Injectable()
export class PrismaUsersRepository extends PrismaClient implements IUsersRepository, OnModuleInit, OnModuleDestroy{
    async createUser(data: UserDto) {
        return this.user.create({ data })
    }
    getUserByID() {}
    loginUser() {}
    onModuleInit() { this.$connect() }
    onModuleDestroy() { this.$disconnect() }

}