import {Inject, Injectable} from "@nestjs/common";
import {ICommentsRepository} from "../../../domain/repositories/IComments.repository";
import {IUsersRepository} from "../../../domain/repositories/IUsers.repository";

@Injectable()
export class GetGameCommentsUseCase {
    constructor(
        @Inject("ICommentsRepository") private commentsRepository: ICommentsRepository,
    ) {}
    async execute(id: string){
        return await this.commentsRepository.getGameComments(Number(id));
    }
}