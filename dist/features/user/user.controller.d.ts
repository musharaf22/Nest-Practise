import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    get(): Promise<{
        success: boolean;
        message: string;
        data: any[];
    }>;
    login(): Promise<{
        message: string;
        data: {
            token: string;
        };
        success: boolean;
    }>;
}
