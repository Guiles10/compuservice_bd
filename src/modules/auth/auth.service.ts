import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService){}

    async validateUser(userEmail: string, userPassword: string){
        const user = await this.userService.findByEmail(userEmail)

        if(user && user.password && userPassword){
            const passMatch = await compare(userPassword, user.password)
            if(passMatch){
                return {email: user.email}
            }
        }
        return null
    }

    async login(email: string){
        const user = await this.userService.findByEmail(email)
        const { password, ...userWithoutPassword } = user;
        return {
            user: userWithoutPassword,
            token: this.jwtService.sign({email}, {subject: user.id}),
        }
    }
}