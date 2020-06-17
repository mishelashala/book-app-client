import { IBook } from "../models/Book";

export interface IBookService {
  registerBook: (book: IBook) => Promise<IBook>;
}
