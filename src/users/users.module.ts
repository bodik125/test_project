import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { models } from "mongoose";
import { user, UserSchema } from "./Schemas/users.schema";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
    providers:[UsersService],
    controllers:[UsersController],
    imports:[
        MongooseModule.forFeature([{
            name: user.name, 
            schema: UserSchema
        }])
    ]
})

export class UsersModule{
    
}