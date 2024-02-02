import {IUsersRepository} from "../../../domain/repositories/IUsersRepository";
import {Injectable} from "@nestjs/common";

@Injectable()
export class PrismaUsersRepository implements IUsersRepository{
    createUser() {
        return "foooiii"
    }
    getUserByID() {}
    loginUser() {}

}