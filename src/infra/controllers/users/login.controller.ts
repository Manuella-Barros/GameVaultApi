import {BadRequestException, Body, Controller, Get, UsePipes} from '@nestjs/common';
import {LoginUseCase} from "../../../app/useCases/users/login.useCase";
import {LoginDto} from "../../../domain/dto/users/login.dto";
import {ZodValidationPipe} from "nestjs-zod";
import {GenerateTokenUseCase} from "../../../app/useCases/auth/generateToken.useCase";
import * as bcrypt from "bcrypt";

@Controller('users')
export class LoginController {
    constructor(private loginUseCase: LoginUseCase, private generateTokenUseCase: GenerateTokenUseCase){}

    @Get("/login")
    @UsePipes(ZodValidationPipe)
    async handle(@Body() {email, password}: LoginDto){
        const user = await this.loginUseCase.execute({email, password});

        if(!user){
            throw new BadRequestException({
                message: "User not found",
                statusCode: 400.
            })
        }

        const { access_token } = await this.generateTokenUseCase.execute(user.id);

        return {
            access_token, ...user
        }
    }
}
