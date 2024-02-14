import {IGamesRepository} from "../../../domain/repositories/IGames.repository";
import {Injectable} from "@nestjs/common";

@Injectable()
export class PrismaGamesRepository {
    getRandomGame() {
        return "getRandomGame FOIIII"
    }
}