import {Module} from "@nestjs/common";
import { JwtModule } from '@nestjs/jwt';
import {jwtConstants} from "../../validations/auth/constants";
import {GenerateTokenUseCase} from "../../../app/useCases/auth/generateToken.useCase";
import {AuthRepository} from "../../../app/repositories/auth/AuthRepository";

@Module({
    imports: [JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
    })],
    providers: [
        {
            provide: "IAuthRepository",
            useClass: AuthRepository
        },
        GenerateTokenUseCase
    ],
    exports: [
        {
            provide: "IAuthRepository",
            useClass: AuthRepository
        },
        GenerateTokenUseCase
    ],
})
export class AuthModule {}