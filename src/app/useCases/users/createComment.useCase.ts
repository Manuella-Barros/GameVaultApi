import {Inject, Injectable} from "@nestjs/common";
import {IUsersRepository} from "../../../domain/repositories/IUsers.repository";
import {CommentDto} from "../../../domain/dto/users/comment.dto";

@Injectable()
export class CreateCommentUseCase {
    constructor(@Inject("IUsersRepository") private usersRepository:IUsersRepository) {}

    execute(data: CommentDto){
        return this.usersRepository.createComment(data);
    }
}