import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";

@Schema()

export class Registro extends Document {

    @Prop({
        index: true,
    })
    nombres: string;

    @Prop({
        index: true,
    })
    fechaNacimiento: string;

    @Prop({
        index: true,
    })
    direccion: string;

    @Prop({
        index: true,
    })
    correo: string;

    @Prop({
        index: true,
    })
    contrasenia: string;
}

export const registroSchema = SchemaFactory.createForClass(Registro);
