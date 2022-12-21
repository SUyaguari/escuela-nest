import { IsString } from "class-validator";

export class CreateHorarioDto {

    @IsString()
    dia: string;

    @IsString()
    horainicio: string;

    @IsString()
    horafin: string
}
