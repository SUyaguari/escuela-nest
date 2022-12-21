import { IsString } from "class-validator";

export class CreateMatriculaDto {

    @IsString()
    carrera: string;

    @IsString()
    modalidad: string;

    @IsString()
    periodo: string;

    @IsString()
    correo: string;

    @IsString()
    identificacion: string;

    @IsString()
    nombre: string;

    @IsString()
    metodoPago: string;

}
