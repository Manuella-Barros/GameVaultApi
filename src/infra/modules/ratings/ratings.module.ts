import {Module} from "@nestjs/common";
import {CreateRatingController} from "../../controllers/ratings/createRating.controller";
import {GetRatingsController} from "../../controllers/ratings/getRatings.controller";
import {PrismaRatingsRepository} from "../../../app/repositories/prisma/PrismaRatingsRepository";
import {CreateRatingUseCase} from "../../../app/useCases/ratings/createRating.useCase";
import {GetRatingsUseCase} from "../../../app/useCases/ratings/getRatings.useCase";
import {IGDBRepository} from "../../../app/repositories/igdbAPI/IGDBRepository";

@Module({
    controllers: [CreateRatingController, GetRatingsController],
    providers: [
        {
            provide: "IRatingsRepository",
            useClass: PrismaRatingsRepository
        },
        {
            provide: "IGamesRepository",
            useClass: IGDBRepository,
        },
        CreateRatingUseCase,
        GetRatingsUseCase
    ]
})
export class RatingsModule {

}