import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { user, UserSchema } from 'src/users/Schemas/users.schema';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports:[
  MongooseModule.forFeature([{
    name: user.name,
    schema: UserSchema
  }])
  ],
  providers: [UsersService,AuthService],
  controllers: [AuthController]
})
export class AuthModule {
  
}
