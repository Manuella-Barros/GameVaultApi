import {Body, Controller, InternalServerErrorException, Post, UsePipes} from '@nestjs/common';
import {CreateUserUseCase} from "../../../app/useCases/users/createUser.useCase";
import {UserDto} from "../../../domain/dto/users/user.dto";
import {ZodValidationPipe} from "nestjs-zod";

@Controller('users')
export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    @Post("create")
    @UsePipes(ZodValidationPipe)
    handle(@Body() data: UserDto){
        try{
            return this.createUserUseCase.execute(data);
        }catch (e){
            console.log(e)
            throw new InternalServerErrorException('Erro ao cadastrar o usuãrio')
        }

    }
}
