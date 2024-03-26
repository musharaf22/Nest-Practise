import { JwtService } from "@nestjs/jwt";
import { GlobalService } from "src/global/global service";
export declare class UserService {
    private logger;
    private jwtService;
    constructor(logger: GlobalService, jwtService: JwtService);
    loginUser(): Promise<{
        token: string;
    }>;
    getAllUser: () => {
        success: boolean;
        message: string;
        data: any[];
    };
}
