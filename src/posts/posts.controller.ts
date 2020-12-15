import { Body, Controller, Get,Request, Post, UseGuards, Req, Param } from '@nestjs/common';
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

    @Get('/:id')
    getOne(@Param('id') Param){
        return this.PostService.getOne(Param)
    }

    @UseGuards(JwtAuthGuard)
    @Post('/add')
    addone(@Body() body ,@Request() req){
        return this.PostService.addpost(body,  req.user.id)
    }

    @UseGuards(JwtAuthGuard)
    @Post('/edit/:id')
    editone(@Body() body){
        return this.PostService.editpost(body)
    }
}
