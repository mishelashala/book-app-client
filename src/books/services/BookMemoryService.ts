import cuid from "cuid";
import assoc from "lodash/fp/assoc";
import { IBook } from "../models/Book";
import { IBookService } from "./BookService.interface";

function BookMemoryService(): IBookService {
  function registerBook(book: IBook): Promise<IBook> {
    const id = cuid();
    return Promise.resolve(assoc("id", id, book));
  }

  return {
    registerBook,
  };
}

export { BookMemoryService };
