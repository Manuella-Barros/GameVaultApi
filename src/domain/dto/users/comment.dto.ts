import {z} from "zod"
import {createZodDto} from "nestjs-zod"

const commentSchema = z.object({
    text: z.string({required_error: "Campo obrigatório"}),
    likes: z.coerce.number({required_error: "Campo obrigatório"}),
    dislikes: z.coerce.number({required_error: "Campo obrigatório"}),
    gameID: z.coerce.number({required_error: "Campo obrigatório"}),
    userID: z.string({required_error: "Campo obrigatório"}),
});

export class CommentDto extends createZodDto(commentSchema){};