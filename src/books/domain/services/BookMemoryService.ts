import cuid from "cuid";
import assoc from "lodash/fp/assoc";
import { IBook } from "../models/Book";
import { IBookService } from "./BookService.interface";

function BookMemoryService(): IBookService {
  const books: IBook[] = [
    {
      id: cuid(),
      name: "Lo que el viento se llevo",
      authorName: "John Doe",
    },
    {
      id: cuid(),
      name: "Lo que el viento se llevo - Electric Boogaloo",
      authorName: "John Doe",
    },
    {
      id: cuid(),
      name: "Lo que el viento se llevo - Reloaded",
      authorName: "John Doe",
    },
  ];

  function getList(): Promise<IBook[]> {
    return Promise.resolve(books);
  }

  function registerBook(book: IBook): Promise<IBook> {
    const id = cuid();
    const newBook = assoc("id", id, book);
    books.push(newBook);
    return Promise.resolve(newBook);
  }

  return {
    getList,
    registerBook,
  };
}

export { BookMemoryService };
