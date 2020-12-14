import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { post, PostSchema } from './Schemas/posts.schemas';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports:[
    MongooseModule.forFeature([{
      name: post.name,
      schema: PostSchema
    }])
  ]
})
export class PostsModule {}
