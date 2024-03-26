import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "src/features/user/user.module";
import { GlobalModule } from "src/global/global.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
@Module({
  imports: [
    GlobalModule,
    UserModule,
    JwtModule.register({
      secret: "secretkey",
      signOptions: { expiresIn: "365d", audience: "user" },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
