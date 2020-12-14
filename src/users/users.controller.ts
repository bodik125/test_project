import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
