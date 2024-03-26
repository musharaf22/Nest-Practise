import { JwtService } from "@nestjs/jwt";
import { GlobalService } from "src/global/global service";
export declare class UserService {
    private logger;
    private jwtService;
    constructor(logger: GlobalService, jwtService: JwtService);
    loginUser(): Promise<{
        message: string;
        data: {
            token: string;
        };
        success: boolean;
    }>;
    getAllUser: () => {
        success: boolean;
        message: string;
        data: any[];
    };
}
