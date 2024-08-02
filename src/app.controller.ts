import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/test')
  getTest() {
    return 'test!';
  }
  @Post('/test')
  postTest(@Body() body: any) {
    console.log('body: ', body);
  }
}
