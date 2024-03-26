import { GlobalService } from "src/global/global service";
export declare class UserService {
    private logger;
    constructor(logger: GlobalService);
    getAllUser: () => {
        success: boolean;
        message: string;
        data: any[];
    };
}
