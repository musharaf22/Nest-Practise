import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(
    _context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    try {
      return next.handle().pipe(
        map((data) => {
          return {
            message: data.message ?? 'Response generated for intereptor',
            data: data.data ?? [],
            success: data.sucess ?? false,
          };
        }),
      );
    } catch (error) {
      console.log({ error });
    }
    // throw new Error('Method not implemented.');
  }
}
