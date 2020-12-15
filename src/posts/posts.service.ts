import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { post, PostDocument } from './Schemas/posts.schemas';


@Injectable()
export class PostsService {
    constructor(@InjectModel(post.name) private postModel: Model<PostDocument>) { }

    async getAll(userid) {
        const posts = await this.postModel.find({ user: userid })
        return posts
    }

    async addpost(file, params, userid) {
        console.log(file)

        const base64img = require('base64-img')
        const fs = require('fs')
        const filepath = `./src/upload/${file.filename}`
        var image = base64img.base64Sync(filepath)
        
        // await fs.readdirSync(`./src/upload/`).forEach((file) => {
        //     if (file === "empty") {

        //     } else {
        //         console.log(file)
        //       fs.unlinkSync(`./${file}`);
        //     }
        //   })
        const post = await new this.postModel(
            {
                name: params.name,
                phone: params.phone,
                date: params.date,
                group: params.group,
                img: image,
                description: params.description,
                user: userid
            }
        ).save()
        return post
    }

    async getOne(params){
        const post = await this.postModel.findOne({_id: params})
        return post
    }

    async editpost(body, params) {
        const post = await this.postModel.findOneAndUpdate({_id: params.id},
            {
                name: body.name,
                phone: body.phone,
                date: body.date,
                group: body.group,
                description: body.description,
            }
        )
        return post
    }
    
    async remove(params){
        const remove = await this.postModel.findOneAndDelete({_id: params.id})

        return "Succesfuly"
    }
}
