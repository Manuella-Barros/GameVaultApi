import {Inject, Injectable} from "@nestjs/common";
import {IUsersRepository} from "../../../domain/repositories/IUsers.repository";
import {UserDto} from "../../../domain/dto/users/user.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserUseCase {
    constructor(@Inject("IUsersRepository") private usersRepository: IUsersRepository) {}
    async execute(data: UserDto){
        const { password, ...userInfo} = data;
        const encryptedPassword = await bcrypt.hash(password, 6)

        return await this.usersRepository.createUser({...userInfo, password: encryptedPassword})
    }
}