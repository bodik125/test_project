import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { GroupsController } from './groups/groups.controller';
import { GroupsService } from './groups/groups.service';
import { GroupsModule } from './groups/groups.module';

const password = "1YOWcCA1zMLaNzfF"

@Module({
  imports: [UsersModule , MongooseModule.forRoot(`mongodb+srv://bodik125:${password}@cluster0.epjpk.mongodb.net/TestProject?retryWrites=true&w=majority`), AuthModule, PostsModule, GroupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
