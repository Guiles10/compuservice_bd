import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: LoginDto): Promise<{
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
