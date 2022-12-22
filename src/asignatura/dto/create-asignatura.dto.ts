import { IsString } from "class-validator";

export class CreateAsignaturaDto {

    @IsString()
    materia:string;
    
    @IsString()
    maestro: string;
    
    @IsString()
    aula: string;
    
    @IsString()
    nivel: string;
    
    @IsString()
    carrera: string;
}
