import {BadRequestException, HttpException, Inject, Injectable} from "@nestjs/common";
import {IUsersRepository} from "../../../domain/repositories/IUsers.repository";
import {UserEntity} from "../../../domain/entities/user.entity";

@Injectable()
export class GetUserByIDUseCase{
    constructor(@Inject("IUsersRepository") private usersRepository: IUsersRepository) {
    }
    async execute(id: string): Promise<Omit<UserEntity, "password">>{
        const user = await this.usersRepository.getUserByID(id);

        if(!user){
            throw new BadRequestException("Usuário não encontrado")
        }

        const {password, ...userInfo} = user;

        return userInfo;
    }
}