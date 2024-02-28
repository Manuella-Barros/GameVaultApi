import { Module } from '@nestjs/common';
import {UsersModule} from "./users/users.module";
import {GamesModule} from "./games/games.module";
import {ConfigModule} from "@nestjs/config";
import {AuthModule} from "./auth/auth.module";
import {RatingsModule} from "./ratings/ratings.module";
import {CommentsModule} from "./comments/comments.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true,}),
    UsersModule,
    GamesModule,
    AuthModule,
    RatingsModule,
    CommentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}