import { IsString } from 'class-validator';

export class LoginRegistroDto {

    @IsString()
    correo: string;

    @IsString()
    contrasenia: string;
}