import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { GroupsModule } from './groups/groups.module';
import {keys} from './config/keys'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule, UsersModule ,AuthModule, MongooseModule.forRoot(`mongodb+srv://bodik125:${keys.mongopassword.password}@cluster0.epjpk.mongodb.net/TestProject?retryWrites=true&w=majority`), PostsModule, GroupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
