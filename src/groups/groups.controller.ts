import { Body, Controller, Get, Post } from '@nestjs/common';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
    constructor(private readonly GroupService: GroupsService){}
    
    @Post('/add')
    addgroup(@Body() body){
        return this.GroupService.addgroup(body)
    }

    @Get('/all')
    allgroups(){
        return this.GroupService.allgroups()
    }
}
