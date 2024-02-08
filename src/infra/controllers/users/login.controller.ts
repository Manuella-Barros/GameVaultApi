import {BadRequestException, Body, ConflictException, Controller, Get, Post, UsePipes} from '@nestjs/common';
import {LoginUseCase} from "../../../app/useCases/users/login.useCase";
import {LoginDto} from "../../../domain/dto/users/login.dto";
import {ZodValidationPipe} from "nestjs-zod";
import {GenerateTokenUseCase} from "../../../app/useCases/auth/generateToken.useCase";
import * as bcrypt from "bcrypt";

@Controller('users')
export class LoginController {
    constructor(private loginUseCase: LoginUseCase, private generateTokenUseCase: GenerateTokenUseCase){}

    @Post("/login")
    @UsePipes(ZodValidationPipe)
    async handle(@Body() {email, password}: LoginDto){
        const user = await this.loginUseCase.execute({email, password});

        if(!user){
            // throw new BadRequestException({
            //     message: "Email e/ou Senha incorretos",
            //     status: 400,
            // })
            throw new ConflictException("Opa foi errado")
        }

        return await this.generateTokenUseCase.execute(user.id);

    }
}
