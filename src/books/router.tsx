import * as React from "react";
import { Route } from "react-router-dom";
import { RegisterBookView } from "./views/RegisterBookView";

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
