import {Inject, Injectable} from "@nestjs/common";
import {IUsersRepository} from "../../../domain/repositories/IUsers.repository";
import {CommentDto} from "../../../domain/dto/users/comment.dto";
import {ICommentsRepository} from "../../../domain/repositories/IComments.repository";

@Injectable()
export class CreateCommentUseCase {
    constructor(@Inject("ICommentsRepository") private commentsRepository:ICommentsRepository) {}

    execute(data: CommentDto){
        return this.commentsRepository.createComment(data);
    }
}