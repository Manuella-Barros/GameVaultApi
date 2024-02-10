import {z} from "zod";
import {createZodDto} from "nestjs-zod";
import {UserDto} from "./user.dto";
import {UserEntity} from "../../entities/user.entity";

const loginSchema = z.object({
    email:
        z.string({required_error: "Campo obrigatório"})
            .email({message: "Email inválido"}),
    password:
        z.string({required_error: "Campo obrigatório"})
})

type TLoginSchema = z.infer<typeof loginSchema>;

export class LoginDto extends createZodDto(loginSchema){};

export type TLoginReturn = UserDto & Pick<UserEntity, "id" | "createdAt" | "updatedAt">