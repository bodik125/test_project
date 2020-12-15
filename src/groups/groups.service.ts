import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { group, GroupDocument } from './Schemas/groups.schema';

@Injectable()
export class GroupsService {
    constructor(@InjectModel(group.name) private GroupsSchema: Model<GroupDocument>){}

    async allgroups(userid){
        return this.GroupsSchema.find({user:userid}).select('name user')
    }
    async addgroup(name , userid){
        const group = await new this.GroupsSchema({name: name.name, user: userid}).save()
        return group
    }
}
