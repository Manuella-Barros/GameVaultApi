import {Controller, Post} from '@nestjs/common';
import {CreateUserUseCase} from "../../../app/useCases/users/createUserUseCase";

@Controller('users')
export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    @Post("create")
    handle(){
        return this.createUserUseCase.execute();
    }
}
