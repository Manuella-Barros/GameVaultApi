import {UserDto} from "../dto/users/user.dto";
import {LoginDto} from "../dto/users/login.dto";
import {UserEntity} from "../entities/user.entity";

export interface IUsersRepository{
    createUser(data: UserDto)
    login(data: LoginDto): Promise<false | Pick<UserEntity, "id" | "password">>
    getUserByEmail(email: string)
    getUserByID(id: string): Promise<null | UserEntity>
}
