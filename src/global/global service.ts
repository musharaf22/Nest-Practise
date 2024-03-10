import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class GlobalService {
  public logger = new Logger();
  constructor() {}

  logs = (value: string) => {
    this.logger.log(value);
  };
}
