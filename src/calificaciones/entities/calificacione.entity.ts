import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";

@Schema()
export class Calificacion extends Document{

    @Prop({
        index: true,
    })
    materia: string;
    @Prop({
        index: true,
    })
    nota: number;
    @Prop({
        index: true,
    })
    notaExamen: number;
    @Prop({
        index: true,
    })
    notaFinal:number;
    @Prop({
        index: true,
    })
    estado: string;

}

export const calificacionSchema = SchemaFactory.createForClass(Calificacion);

