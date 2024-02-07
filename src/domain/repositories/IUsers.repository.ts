import {UserDto} from "../dto/users/user.dto";

export interface IUsersRepository{
    createUser(data: UserDto)
    getUserByID()
    loginUser()
}
