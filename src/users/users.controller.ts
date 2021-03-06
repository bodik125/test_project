import { Body, Controller, Get,Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/local-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly UserService: UsersService){

    }
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll(){
        return this.UserService.getall()
    }
    @UseGuards(JwtAuthGuard)
    @Get('/users')
    getOne(id){
        return this.UserService.getOne(id)
    }
    @Post('/add')
    create(@Body() body){
        return this.UserService.create(body)
    }
    @UseGuards(JwtAuthGuard)
    @Get('/profile')
     getProfile(@Request() req) {
         console.log(req.user.id)
        const userid = req.user.id
        return  this.UserService.getProfiles(userid)
    }
}
