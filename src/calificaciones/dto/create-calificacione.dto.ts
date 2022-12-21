import { IsString, IsNumber } from "class-validator";

export class CreateCalificacioneDto {
    
    @IsString()
    materia: string;

    @IsNumber()
    nota: number;

    @IsNumber()
    notaExamen: number;

    @IsNumber()
    notaFinal:number;

    @IsString()
    estado: string;
}
