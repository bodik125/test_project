import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { group, GroupSchema } from './Schemas/groups.schema';

@Module({
    providers:[GroupsService],
    controllers:[GroupsController],
    imports:[
        MongooseModule.forFeature([{
            name: group.name,
            schema: GroupSchema
        }])
    ]
})
export class GroupsModule {}
