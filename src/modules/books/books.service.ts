import { Injectable } from '@nestjs/common';
import { BookEntity } from '../entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  stock: BookEntity[];
  constructor() {
    this.stock = [
      {
        id: 1,
        title: 'Harry Potter',
        autor: 'J K Rowling',
      },
      {
        id: 2,
        title: 'El Señor de los Anillos',
        autor: 'JRR Tolkien',
      },
      {
        id: 3,
        title: '1984',
        autor: 'George Orwell',
      },
    ];
  }

  async findAllBooks(): Promise<BookEntity[]> {
    return this.stock;
  }

  async createBook(createBookDto: CreateBookDto): Promise<BookEntity> {
    const newBook: BookEntity = {
      id: this.stock.length + 1,
      title: createBookDto.title,
      autor: createBookDto.autor,
    };

    this.stock.push(newBook);
    return newBook;
  }
}
