import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = user & Document;
export type UserAuth = any
@Schema()
export class user {
    @Prop({required:true})
    login: string
    @Prop({required: true})
    password: string
    @Prop()
    name: string
    @Prop()
    date: string
    @Prop()
    description: string
    @Prop()
    about: string
}

export const UserSchema = SchemaFactory.createForClass(user)