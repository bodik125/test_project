import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user, UserAuth, UserDocument } from './Schemas/users.schema';
import { bcrypt } from 'bcrypt'

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
        const saltRounds = 10
        const newuser = new this.userModel({
            login: params.login,
            password: bcrypt.hashSync(params.password, saltRounds)
        })
        console.log(newuser.password)
        console.log(" SADASDASDD ",newuser)
        return newuser.save()
    }

    async findOne(login: string): Promise<UserAuth | undefined> {
        return this.userModel.find({login: login});
      }
}
