import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";

@Schema()
export class Asignatura extends Document{

    @Prop({
        index: true,
    })
    materia:string;

    @Prop({
        index: true,
    })
    maestro: string;
    
    @Prop({
        index: true,
    })
    aula: string;

    @Prop({
        index: true,
    })
    nivel: string;
    
    @Prop({
        index: true,
    })
    carrera: string;

}

export const asignaturaSchema = SchemaFactory.createForClass(Asignatura);
