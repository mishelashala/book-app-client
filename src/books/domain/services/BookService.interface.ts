import { IBook } from "../models/Book";

export interface IBookService {
  getList: () => Promise<IBook[]>;
  registerBook: (book: IBook) => Promise<IBook>;
}
