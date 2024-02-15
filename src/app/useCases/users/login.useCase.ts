import {BadRequestException, HttpException, HttpStatus, Inject, Injectable} from "@nestjs/common";
import {IUsersRepository} from "../../../domain/repositories/IUsers.repository";
import {LoginDto} from "../../../domain/dto/users/login.dto";
import {UserEntity} from "../../../domain/entities/user.entity";
import * as bcrypt from "bcrypt";
import {HttpStatusCode} from "axios";

@Injectable()
export class LoginUseCase {
    constructor(@Inject("IUsersRepository" )private usersRepository: IUsersRepository) {}

    async execute(data: LoginDto){
        const user = await this.usersRepository.login(data);

        if(!user){
            throw new HttpException('Email e/ou Senha incorretos', HttpStatus.BAD_REQUEST);
        }

        return user;
    }
}