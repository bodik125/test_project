import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { post, PostDocument } from './Schemas/posts.schemas';

@Injectable()
export class PostsService {
    constructor(@InjectModel(post.name) private postModel: Model<PostDocument>){}

    async getAll(userid){
        return this.postModel.find({_id: userid}).select('date name phone group description')
    }
    async addpost(params){
        const post = await new this.postModel(params).save()
        return post
    }

}
