import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [], // Le queremos dar a este modulo alguna funcionalidad externa
  providers: [BooksService], // Proveedores, para nosotros principalmente los servicios
  controllers: [BooksController], // Los controladores
  exports: [], // Si quiero que este modulo exporte alguna funcionalidad propia
})
export class BooksModule {}
