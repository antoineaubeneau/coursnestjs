import { Controller, Get, Post, Body } from '@nestjs/common';
import { generateDocumentation } from '../core/index';

@Controller('server')
export class ApiController {
  @Get()
  getAll(): string {
    return 'Hello World';
  }

  @Post('/generate')
  generate(@Body() body: any) {
    return generateDocumentation(body);
  }
}
