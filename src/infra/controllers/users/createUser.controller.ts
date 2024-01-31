import {Controller, Post} from '@nestjs/common';

@Controller('users')
export class CreateUserController {
    @Post("create")
    handle(){

    }
}
