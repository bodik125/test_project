import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user, UserDocument } from './Schemas/users.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(user.name) private userModel: Model<UserDocument>){

    }   
    async getall(){
        return this.userModel.find().exec()
    }

    async getOne(userid){
        return "asdf"
    }

    async create(params){
        const newuser = new this.userModel(params)
        console.log(" SADASDASDD ",newuser)
        return newuser.save()
    }
}
