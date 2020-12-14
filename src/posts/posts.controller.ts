import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly PostService: PostsService){}
    
    @Get('/all')
    getAll(){
        return this.PostService.getAll()
    }

    @Post('/add')
    addone(@Body() body){
        return this.PostService.addpost(body)
    }

}
