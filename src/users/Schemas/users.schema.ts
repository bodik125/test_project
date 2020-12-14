import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = user & Document;

@Schema()
export class user {
    @Prop({required:true})
    login: string
    @Prop({required: true})
    password: string
    @Prop()
    name: string
    @Prop()
    age: number
    @Prop()
    location: string
    @Prop()
    wife: true
}

export const UserSchema = SchemaFactory.createForClass(user)