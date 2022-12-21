import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";

@Schema()
export class Estudiante extends Document{

    @Prop({
        index: true,
    })
    nombre: string;

    @Prop({
        index: true,
    })
    documento: string;
    
    @Prop({
        index: true,
    })
    correo: string;
    
    @Prop({
        index: true,
    })
    fecha: string;
    
    @Prop({
        index: true,
    })
    semestre: string;
}

export const estudianteSchema = SchemaFactory.createForClass(Estudiante);
