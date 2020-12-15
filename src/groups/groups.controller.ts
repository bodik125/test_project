import { Body, Controller,Request, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/local-auth.guard';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
    constructor(private readonly GroupService: GroupsService){}
    
    @UseGuards(JwtAuthGuard)
    @Post('/add')
    addgroup(@Body() body , @Request() req){
        return this.GroupService.addgroup(body, req.user.id)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/all')
    allgroups(@Request() req){
        return this.GroupService.allgroups(req.user)
    }
}
