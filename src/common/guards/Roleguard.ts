import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

export const Roles = Reflector.createDecorator<string[]>();

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Roles, context.getHandler());
    console.log({ roles });
    if (!roles) {
      return true;
    }
    return true;
    // const request = context.switchToHttp().getRequest();
    // const user = request.user;
    // return matchRoles(roles, user.roles);
  }
}
