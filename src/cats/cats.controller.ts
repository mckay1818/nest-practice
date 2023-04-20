import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('breed')
  findByBreed(): string {
    return 'This action returns one cat by breed';
  }
}
