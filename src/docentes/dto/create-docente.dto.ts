import { IsString } from "class-validator";

export class CreateDocenteDto {

    @IsString()
    nombre: string

    @IsString()
    documento: string

    @IsString()
    correo: string

    @IsString()
    naciemiento: string

    @IsString()
    titulo: string
}
