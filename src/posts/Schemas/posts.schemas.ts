import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = post & Document;

@Schema()
export class post {
    @Prop()
    name: string
    @Prop()
    phone: string
    @Prop()
    date: string
    @Prop()
    group: string
    @Prop()
    description: string
}

export const PostSchema = SchemaFactory.createForClass(post)