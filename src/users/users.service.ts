import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user, UserAuth, UserDocument } from './Schemas/users.schema';

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
        const bcrypt = require('bcryptjs')
        const saltRounds = 10
        console.log(params.password)
        const password = params.password
        const hash = await bcrypt.hash(password, 10)
        const newuser = new this.userModel({
            login: params.login,
            password: hash,
            about: params.about,
            date: params.date,
            name: params.name
        })
        console.log(newuser.password)
        console.log(" SADASDASDD ",newuser)
        return await newuser.save()
    }

    async findOne(login: string): Promise<UserAuth | undefined> {
        return this.userModel.find({login: login});
      }
    async getProfiles(userid: string) {
        const qwe = await this.userModel.findOne({_id: userid}).select('name date about')
        console.log(qwe)
        return qwe
    }  
}
