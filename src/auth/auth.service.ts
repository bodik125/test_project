import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
        ) { }

    async validateUser(login: string, password: string): Promise<any> {
        const bcrypt = require('bcryptjs')
        const user = await this.usersService.findOne(login);
        console.log("q")
        if (user[0]) {
        console.log("w")

        const passs = bcrypt.compareSync(password, user[0].password)
            if(passs){
        console.log("e")

                return user;
            }
        }
        return null;
    }
    async login(user: any){
        const payload = {username: user.login, id: user._id}
        return{
            acces_token: this.jwtService.sign(payload)
        }
    }
}