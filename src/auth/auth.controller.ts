import { Body, Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service'
import { JwtAuthGuard, LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private auth: AuthService) { }
    
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req) {
        console.log(req.user)
        return this.auth.login(req.user)
    }

}
