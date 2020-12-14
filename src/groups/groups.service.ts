import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { group, GroupDocument } from './Schemas/groups.schema';

@Injectable()
export class GroupsService {
    constructor(@InjectModel(group.name) private GroupsSchema: Model<GroupDocument>){}

    async allgroups(){
        return this.GroupsSchema.find().exec()
    }
    async addgroup(name){
        const group = await new this.GroupsSchema(name).save()
        return group
    }
}
