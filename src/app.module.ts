import { Module } from '@nestjs/common';
import { CreateUserController } from './infra/controllers/users/create-user.controller';
import { LoginController } from './infra/controllers/users/login.controller';
import { RegisterController } from './infra/controllers/users/register/register.controller';

@Module({
  imports: [],
  controllers: [CreateUserController, LoginController, RegisterController],
  providers: [],
})
export class AppModule {}
