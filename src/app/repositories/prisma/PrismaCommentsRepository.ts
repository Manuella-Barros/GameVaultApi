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

    async getGameComments(gameID: number): Promise<CommentEntity[]>{
        return this.comment.findMany({
            where:{gameID},
            orderBy:{updatedAt: "desc"},
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        favGenre1: true,
                        favGenre2: true
                    }
                }
            }
        })
    }

    onModuleDestroy() { this.$disconnect() }
    onModuleInit() { this.$disconnect() }
}
