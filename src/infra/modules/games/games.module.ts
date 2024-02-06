import {Module} from "@nestjs/common";
import {GetRandomGameUseCase} from "../../../app/useCases/games/getRandomGame.useCase";
import {GetRandomGameController} from "../../controllers/games/getRandomGame.controller";
import {IGDBRepository} from "../../../app/repositories/igdbAPI/IGDBRepository";

@Module({
    controllers: [GetRandomGameController],
    providers: [
        {
            provide: "IGamesRepository",
            useClass: IGDBRepository
        },
        GetRandomGameUseCase,
    ]
})

export class GamesModule{}