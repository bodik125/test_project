import { Body, Controller, Get,Request, Post, UseGuards, Req, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/local-auth.guard';
import { editFileName, imageFileFilter } from 'src/utils/file-upload.utils';
import { PostsService } from './posts.service';
import { diskStorage } from 'multer'

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
    @UseInterceptors(FileInterceptor('image',{
        storage: diskStorage({
            destination: './src/upload',
            filename: editFileName
        }),
        fileFilter: imageFileFilter
    }))
    addone(@UploadedFile() file , @Body() body ,@Request() req){
        return this.PostService.addpost(file , body,  req.user.id)
    }

    @UseGuards(JwtAuthGuard)
    @Post('/edit/:id')
    editone(@Body() body ,@Param() Param){
        return this.PostService.editpost(body, Param)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/remove/:id')
    removeone(@Param() Param){
        return this.PostService.remove( Param)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/sortbygroup/:group')
    sortbygroup(@Param() param){
        return this.PostService.sortbygroup(param)
    }
}
