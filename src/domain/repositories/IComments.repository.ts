import {CommentDto} from "../dto/users/comment.dto";
import {CommentEntity} from "../entities/comment.entity";

export interface ICommentsRepository {
    createComment(data: CommentDto): Promise<CommentEntity>
    getGameComments(id: number): Promise<CommentEntity[]>
}