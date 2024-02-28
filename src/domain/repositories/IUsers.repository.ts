import {UserDto} from "../dto/users/user.dto";
import {LoginDto} from "../dto/users/login.dto";
import {UserEntity} from "../entities/user.entity";
import {RatingDto} from "../dto/users/rating.dto";
import {RatingEntity} from "../entities/rating.entity";
import {CommentDto} from "../dto/users/comment.dto";
import {CommentEntity} from "../entities/comment.entity";

export interface IUsersRepository{
    createUser(data: UserDto): Promise<UserEntity>
    login(data: LoginDto): Promise<false | Pick<UserEntity, "id" | "password">>
    getUserByID(id: string): Promise<null | UserEntity>
}
