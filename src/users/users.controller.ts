import { Body, Controller, Get,Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/local-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly UserService: UsersService){

    }
    @Get()
    getAll(){
        return this.UserService.getall()
    }
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
        return  this.getProfile(req.user)
    }
}
