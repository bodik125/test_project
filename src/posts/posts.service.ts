import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { post, PostDocument } from './Schemas/posts.schemas';

@Injectable()
export class PostsService {
    constructor(@InjectModel(post.name) private postModel: Model<PostDocument>){}

    async getAll(){
        return this.postModel.find().exec()
    }
    async addpost(params){
        const post = await new this.postModel(params).save()
        return post
    }

}
