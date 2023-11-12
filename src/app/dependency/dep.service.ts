import { Injectable } from '@angular/core';

export class Logger {
  log(value: unknown): void {
    console.log(value);
  }
}

export class MyLoggerSrvice {
  constructor(private logger: Logger) {}

  protected log(value: unknown): void {
    this.logger.log(value);
  }
}

@Injectable()
export class MyStringLoggerSrvice extends MyLoggerSrvice {
  constructor(logger: Logger) {
    super(logger);
  }
}
