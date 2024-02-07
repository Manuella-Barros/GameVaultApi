import {Inject, Injectable} from "@nestjs/common";
import {IUsersRepository} from "../../../domain/repositories/IUsers.repository";
import {LoginDto} from "../../../domain/dto/users/login.dto";
import {UserEntity} from "../../../domain/entities/user.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class LoginUseCase {
    constructor(@Inject("IUsersRepository" )private usersRepository: IUsersRepository) {}

    async execute(data: LoginDto){
        return await this.usersRepository.login(data);
    }
}