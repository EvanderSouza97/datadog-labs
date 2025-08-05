import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ping')
  ping(): string {
    return 'pong';
  }

@Get('error')
getError(): string {
  throw new Error('Erro simulado!');
}

@Get('bad-request')
getBadRequest(): any {
  throw new HttpException('Requisição inválida', HttpStatus.BAD_REQUEST);
}

  @Post('users')
  createUser(@Body() body: any): string {
    return `User created: ${JSON.stringify(body)}`;
  }
}

