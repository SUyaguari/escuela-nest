import { IsString } from "class-validator";

export class CreateEstudianteDto {

    @IsString()
    nombre: string;

    @IsString()
    documento: string;

    @IsString()
    correo: string;

    @IsString()
    fecha: string;

    @IsString()
    semestre: string;

}
