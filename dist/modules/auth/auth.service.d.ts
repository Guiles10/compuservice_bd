import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(userEmail: string, userPassword: string): Promise<{
        email: string;
    }>;
    login(email: string): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            function: string[];
            isAdmin: boolean;
        };
        token: string;
    }>;
}
