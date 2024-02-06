import {IGamesRepository} from "../../../domain/repositories/IGames.repository";
import {Injectable} from "@nestjs/common";

@Injectable()
export class PrismaGamesRepository implements IGamesRepository{
    getRandomGame() {
        return "getRandomGame FOIIII"
    }
}