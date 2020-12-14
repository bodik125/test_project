import { Body, Controller, Get,Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/local-auth.guard';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly PostService: PostsService){}
    
    @UseGuards(JwtAuthGuard)
    @Get('/all')
    getAll(@Request() req){
        return this.PostService.getAll(req.user.id)
    }

    @UseGuards(JwtAuthGuard)
    @Post('/add')
    addone(@Body() body @Request() req){
        return this.PostService.addpost(body,  req.user.id)
    }

}
