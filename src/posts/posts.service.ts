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
    async addpost(params, userid) {
        const post = await new this.postModel(
            {
                name: params.name,
                phone: params.phone,
                date: params.date,
                group: params.group,
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

    async editpost(params) {
        const post = await new this.postModel(
            {
                name: params.name,
                phone: params.phone,
                date: params.date,
                group: params.group,
                description: params.description,
            }
        ).save()
        return post
    }
}
