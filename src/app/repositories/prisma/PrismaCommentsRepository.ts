import {Injectable, OnModuleDestroy, OnModuleInit} from "@nestjs/common";
import {PrismaClient} from "@prisma/client";
import {ICommentsRepository} from "../../../domain/repositories/IComments.repository";
import {CommentDto} from "../../../domain/dto/users/comment.dto";
import {CommentEntity} from "../../../domain/entities/comment.entity";

@Injectable()
export class PrismaCommentsRepository extends PrismaClient implements ICommentsRepository, OnModuleInit, OnModuleDestroy {
    createComment(data: CommentDto): Promise<CommentEntity>{
        return this.comment.create({data})
    }

    onModuleDestroy() { this.$disconnect() }
    onModuleInit() { this.$disconnect() }
}
