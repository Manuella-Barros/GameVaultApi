import {IUsersRepository} from "../../../domain/repositories/IUsers.repository";
import {Injectable, OnModuleDestroy, OnModuleInit} from "@nestjs/common";
import {PrismaClient} from "@prisma/client";
import {UserDto} from "../../../domain/dto/users/user.dto";
import {LoginDto, TLoginReturn} from "../../../domain/dto/users/login.dto";
import * as process from "process";
import {UserEntity} from "../../../domain/entities/user.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class PrismaUsersRepository extends PrismaClient implements IUsersRepository, OnModuleInit, OnModuleDestroy{
    async createUser(data: UserDto): Promise<UserEntity> {
        return this.user.create({ data })
    }
    async login({email, password}: LoginDto): Promise<false | TLoginReturn> {
        const user = await this.user.findUnique({
            where: {
                email: email,
            }
        })

        if(user &&  !await bcrypt.compare(password, user.password) || !user){
            return false;
        }

        return user;
    }

    getUserByEmail(email: string){
        return this.user.findUnique({ where: {email} })
    }
    getUserByID() {}
    onModuleInit() { this.$connect() }
    onModuleDestroy() { this.$disconnect() }

}