import * as React from "react";
import { Route } from "react-router-dom";
import { RegisterBookViewFactory } from "./views/RegisterBookView";
import { BookMemoryService } from "./services/BookMemoryService";

const RegisterBookView = RegisterBookViewFactory(BookMemoryService());

const BooksRouter = () => {
  return (
    <React.Fragment>
      <Route path="/">
        <RegisterBookView />
      </Route>
    </React.Fragment>
  );
};

export { BooksRouter };
