import {Body, Controller, Get, Param} from "@nestjs/common";
import {GetUserByIDUseCase} from "../../../app/useCases/users/getUserByID.useCase";

@Controller("/users")
export class GetUserByIDController {
    constructor(private getUserByIdUseCase: GetUserByIDUseCase) {}

    @Get("/getUserByID/:id")
    handle(@Param("id") id: string) {
        return this.getUserByIdUseCase.execute(id);
    }
}