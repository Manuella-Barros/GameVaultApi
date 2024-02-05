import {Module} from "@nestjs/common";
import {GetAllGamesUseCase} from "../../../app/useCases/games/getAllGames.useCase";
import {GetAllGamesController} from "../../controllers/games/getAllGames.controller";
import {PrismaGamesRepository} from "../../../app/repositories/prisma/PrismaGamesRepository";

@Module({
    controllers: [GetAllGamesController],
    providers: [
        {
            provide: "IGamesRepository",
            useClass: PrismaGamesRepository
        },
        GetAllGamesUseCase,
    ]
})

export class GamesModule{}