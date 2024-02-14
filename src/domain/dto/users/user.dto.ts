import {z} from "zod";
import {createZodDto} from "nestjs-zod";

export const userSchema = z.object({
    name: z.string({required_error: "Campo obrigatório"}),
    email:
        z.string({required_error: "Campo obrigatório"})
            .email({message: "Email inválido"}),
    password:
        z.string({required_error: "Campo obrigatório"}),
    favGenre1:
        z.string({required_error: "Campo obrigatório", invalid_type_error: "Campo obrigatório"}),
    favGenre2:
        z.string({required_error: "Campo obrigatório", invalid_type_error: "Campo obrigatório"}),
    favGame:
        z.string({required_error: "Campo obrigatório"})
})
.refine(fields => fields.favGenre1 != fields.favGenre2, {
    message: "Os gêneros devem ser diferentes",
    path: ["genre2"]
})

export type TUserSchema = z.infer<typeof userSchema>;

export class UserDto extends createZodDto(userSchema) {}

// export interface UserDto extends  z.infer<typeof userSchema>{}
