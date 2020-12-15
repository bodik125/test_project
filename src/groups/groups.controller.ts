import { Body, Controller,Request, Get, Post } from '@nestjs/common';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
    constructor(private readonly GroupService: GroupsService){}
    
    @Post('/add')
    addgroup(@Body() body , @Request() req){
        return this.GroupService.addgroup(body, req.user.id)
    }

    @Get('/all')
    allgroups(@Request() req){
        return this.GroupService.allgroups(req.user.id)
    }
}
