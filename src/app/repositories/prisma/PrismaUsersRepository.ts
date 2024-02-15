import {IUsersRepository} from "../../../domain/repositories/IUsers.repository";
import {Injectable, OnModuleDestroy, OnModuleInit} from "@nestjs/common";
import {PrismaClient} from "@prisma/client";
import {UserDto} from "../../../domain/dto/users/user.dto";
import {LoginDto} from "../../../domain/dto/users/login.dto";
import {UserEntity} from "../../../domain/entities/user.entity";
import * as bcrypt from "bcrypt";
import {RatingDto} from "../../../domain/dto/users/rating.dto";
import {RatingEntity} from "../../../domain/entities/rating.entity";
import {CommentDto} from "../../../domain/dto/users/comment.dto";
import {CommentEntity} from "../../../domain/entities/comment.entity";

@Injectable()
export class PrismaUsersRepository extends PrismaClient implements IUsersRepository, OnModuleInit, OnModuleDestroy{
    createUser(data: UserDto): Promise<UserEntity> {
        return this.user.create({ data })
    }

    async login({email, password}: LoginDto): Promise<false | Pick<UserEntity, "id" | "password">> {
        const user = await this.user.findUnique({
            where: {
                email: email,
            },
            select: {
                id: true,
                password: true
            }
        })

        if(user &&  !await bcrypt.compare(password, user.password) || !user){
            return false;
        }

        return user;
    }

    async getUserByID(id: string): Promise<null | UserEntity> {
        const user = await this.user.findUnique({
            where: {id},
        })

        return user
    }

    createRating(data: RatingDto): Promise<RatingEntity>{
        return this.rating.create({data})
    }

    createComment(data: CommentDto): Promise<CommentEntity>{
        return this.comment.create({data})
    }

    onModuleInit() { this.$connect() }
    onModuleDestroy() { this.$disconnect() }

}