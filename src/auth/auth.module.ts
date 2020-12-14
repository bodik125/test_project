import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtSecretRequestType, JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { request } from 'http';
import { ExtractJwt } from 'passport-jwt';
import { keys } from 'src/config/keys';
import { user, UserSchema } from 'src/users/Schemas/users.schema';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import {LocalStrategy} from './local.strategy'

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.jwtConstants.secret
}
@Module({
  imports: [UsersModule,
    MongooseModule.forFeature([{
      name: user.name,
      schema: UserSchema
    }]),
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      imports:[ConfigModule],
      useFactory:(configService: ConfigService)=>({
        secretOrPrivateKey: keys.jwtConstants.secret,
        signOptions: {expiresIn: '60s'}
      }),
      inject:[ConfigService]
    })
  ],
  providers: [AuthService, UsersService, JwtStrategy, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {

}

