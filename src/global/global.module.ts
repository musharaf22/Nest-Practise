import { Global, Module } from "@nestjs/common";
import { GlobalService } from "./global service";
import { JwtService } from "@nestjs/jwt";

@Global()
@Module({
  imports: [],
  providers: [GlobalService, JwtService],
  controllers: [],
  exports: [GlobalService, JwtService],
})
export class GlobalModule {}
