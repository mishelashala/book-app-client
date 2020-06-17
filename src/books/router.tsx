import React from "react";
import { Route } from "react-router-dom";
import { RegisterBookViewFactory } from "./views/RegisterBookView";
import { BookMemoryService } from "./domain/services/BookMemoryService";
import { ListBookViewFactory } from "./views/ListBookView";

const bookService = BookMemoryService();
const RegisterBookView = RegisterBookViewFactory(bookService);
const ListBookView = ListBookViewFactory(bookService);

const BooksRouter = () => {
  return (
    <React.Fragment>
      <Route path="/add">
        <RegisterBookView />
      </Route>
      <Route path="/">
        <ListBookView />
      </Route>
    </React.Fragment>
  );
};

export { BooksRouter };
