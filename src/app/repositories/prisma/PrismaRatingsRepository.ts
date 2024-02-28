import {Injectable, OnModuleDestroy, OnModuleInit} from "@nestjs/common";
import {PrismaClient} from "@prisma/client";
import {IUsersRepository} from "../../../domain/repositories/IUsers.repository";
import {IRatingsRepository} from "../../../domain/repositories/IRatings.repository";
import { RatingDto } from "src/domain/dto/users/rating.dto";
import { RatingEntity } from "src/domain/entities/rating.entity";

@Injectable()
export class PrismaRatingsRepository extends PrismaClient implements IRatingsRepository, OnModuleInit, OnModuleDestroy {
    createRating(data: RatingDto): Promise<RatingEntity>{
        return this.rating.create({data})
    }

    getRatings(userID: string, take: number, skip: number): Promise<RatingEntity[]>{
        return this.rating.findMany({
            take,
            skip,
            where: { userID },
            orderBy: { gameID: "asc"}
        })
    }

    onModuleDestroy() { this.$disconnect() }
    onModuleInit() { this.$disconnect() }
}
