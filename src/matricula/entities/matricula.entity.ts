import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";

@Schema()
export class Matricula extends Document {

    @Prop({
        index: true,
    })
    carrera: string;

    @Prop({
        index: true,
    })
    modalidad: string;

    @Prop({
        index: true,
    })
    periodo: string;

    @Prop({
        index: true,
    })
    correo: string;

    @Prop({
        index: true,
    })
    identificacion: string;

    @Prop({
        index: true,
    })
    nombre: string;

    @Prop({
        index: true,
    })
    metodoPago: string;
}

export const matriculaSchema = SchemaFactory.createForClass(Matricula);
