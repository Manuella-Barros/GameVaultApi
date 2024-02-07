import {Inject, Injectable} from "@nestjs/common";
import {IAuthRepository} from "../../../domain/repositories/IAuth.repository";
import {LoginDto} from "../../../domain/dto/users/login.dto";

@Injectable()
export class GenerateTokenUseCase {
    constructor(@Inject("IAuthRepository") private authRepository: IAuthRepository) {}
    execute(data: string) {
        return this.authRepository.generateToken(data);
    }

}