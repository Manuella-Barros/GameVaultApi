import {Inject, Injectable} from "@nestjs/common";
import {IUsersRepository} from "../../../domain/repositories/IUsers.repository";
import {UserDto} from "../../../domain/dto/users/user.dto";
import * as bcrypt from 'bcrypt';
import {UserEntity} from "../../../domain/entities/user.entity";

@Injectable()
export class CreateUserUseCase {
    constructor(@Inject("IUsersRepository") private usersRepository: IUsersRepository) {}
    async execute(data: UserDto): Promise<UserEntity>{
        const { password, ...userInfo} = data;
        const encryptedPassword = await bcrypt.hash(password, 6)

        return this.usersRepository.createUser({...userInfo, password: encryptedPassword})
    }
}