import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";

@Schema()
export class Horario {

    @Prop({
        index: true,
    })
    dia: string;
    @Prop({
        index: true,
    })
    horainicio: string;
    @Prop({
        index: true,
    })
    horafin: string
}

export const horarioSchema = SchemaFactory.createForClass(Horario);

