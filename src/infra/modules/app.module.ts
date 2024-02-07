import { Module } from '@nestjs/common';
import {UsersModule} from "./users/users.module";
import {GamesModule} from "./games/games.module";
import {ConfigModule} from "@nestjs/config";
import {AuthModule} from "./auth/auth.module";
import {GenerateTokenUseCase} from "../../app/useCases/auth/generateToken.useCase";

@Module({
  imports: [UsersModule, GamesModule, AuthModule, ConfigModule.forRoot({ isGlobal: true,})],
  controllers: [],
  providers: [],
})
export class AppModule {}