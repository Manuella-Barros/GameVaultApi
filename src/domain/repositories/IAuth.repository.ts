import {TokenDto} from "../dto/auth/token.dto";

export interface IAuthRepository {
    generateToken(id: string): Promise<TokenDto>,
}