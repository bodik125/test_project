import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type GroupDocument = group & Document

@Schema()
export class group {
    @Prop()
    name: string
    @Prop({type: Array})
    posts: string
}

export const GroupSchema = SchemaFactory.createForClass(group)