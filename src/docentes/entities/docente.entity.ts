import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";

@Schema()
export class Docente extends Document{

    @Prop({
        index: true,
    })
    nombre: string

    @Prop({
        index: true,
    })
    documento: string
    @Prop({
        index: true,
    })
    correo: string
    @Prop({
        index: true,
    })
    naciemiento: string
    @Prop({
        index: true,
    })
    titulo: string

}

export const docenteSchema = SchemaFactory.createForClass(Docente);