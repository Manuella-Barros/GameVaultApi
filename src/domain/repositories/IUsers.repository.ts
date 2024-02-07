import {UserDto} from "../dto/users/user.dto";
import {LoginDto} from "../dto/users/login.dto";

export interface IUsersRepository{
    createUser(data: UserDto)
    login(data: LoginDto)
    getUserByEmail(email: string)
    getUserByID()
}
