import {UserDto} from "../dto/users/user.dto";
import {LoginDto, TLoginReturn} from "../dto/users/login.dto";

export interface IUsersRepository{
    createUser(data: UserDto)
    login(data: LoginDto): Promise<false | TLoginReturn>
    getUserByEmail(email: string)
    getUserByID()
}
