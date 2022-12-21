import { IsString } from "class-validator";

export class CreateRegistroDto {

    @IsString()
    nombres: string;

    @IsString()
    fechaNacimiento: string;

    @IsString()
    direccion: string;

    @IsString()
    correo: string;

    @IsString()
    contrasenia: string;
}
