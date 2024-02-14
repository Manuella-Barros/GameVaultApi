import {Module} from "@nestjs/common";
import {GetRandomGameUseCase} from "../../../app/useCases/games/getRandomGame.useCase";
import {GetRandomGameController} from "../../controllers/games/getRandomGame.controller";
import {IGDBRepository} from "../../../app/repositories/igdbAPI/IGDBRepository";
import {GetAllGenresController} from "../../controllers/games/getAllGenres.controller";
import {GetAllGenresUseCase} from "../../../app/useCases/games/getAllGenres.useCase";

@Module({
    controllers: [GetRandomGameController, GetAllGenresController],
    providers: [
        {
            provide: "IGamesRepository",
            useClass: IGDBRepository
        },
        GetRandomGameUseCase,
        GetAllGenresUseCase,
    ]
})

export class GamesModule{}