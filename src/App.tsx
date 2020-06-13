import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BooksRouter } from "./books/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/books">
            <BooksRouter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
