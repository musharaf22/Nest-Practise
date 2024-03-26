"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const global_service_1 = require("./global/global service");
async function bootstrap() {
    const logger = new global_service_1.GlobalService();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    await app.listen(3000);
    logger.logs('Server is running on port 3000');
}
bootstrap();
//# sourceMappingURL=main.js.map