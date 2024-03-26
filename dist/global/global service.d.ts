import { Logger } from '@nestjs/common';
export declare class GlobalService {
    logger: Logger;
    constructor();
    logs: (value: string) => void;
}
