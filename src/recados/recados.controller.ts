import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @Get()
  findAll() {
    return this.recadosService.findAll();
  }

  @Get('/query')
  findAllWithPagination() {
    const pagination = { limit: 10, offset: 10 };
    return pagination;
  }

  // Recado com parâmetro
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recadosService.findOne(id);
  }

  @HttpCode(200)
  @Post()
  create(@Body() body: string) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: string) {
    return {
      id,
      body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      id,
    };
  }
}
