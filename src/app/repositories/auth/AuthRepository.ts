import {IAuthRepository} from "../../../domain/repositories/IAuth.repository";
import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {TokenDto} from "../../../domain/dto/auth/token.dto";

@Injectable()
export class AuthRepository implements IAuthRepository {
    constructor(private jwtService: JwtService) {}
    async generateToken(id: string): Promise<TokenDto> {
        const payload = { sub: id }

        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}