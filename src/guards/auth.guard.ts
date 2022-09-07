import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    return request.session.userId; //if id exists, return truthyvalue and user has access to route/. 
  }                                //if userid is false, it prevents access to handeler/controller
}
