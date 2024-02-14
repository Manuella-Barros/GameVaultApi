import {z} from "zod";
import {createZodDto} from "nestjs-zod";

export const ratingSchema = z.object({
    stars: z.coerce.number({required_error: "Campo obrigatório"}),
    gameID: z.coerce.number({required_error: "Campo obrigatório"}),
    userID: z.string({required_error: "Campo obrigatório"}),
})

export class RatingDto extends createZodDto(ratingSchema){}