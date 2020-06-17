import React from "react";
import { BackNavBar } from "../ui/molecules/BackNavBar";
import { Container } from "../ui/atoms/Container";
import { Title } from "../ui/atoms/Title";
import { IBookService } from "../domain/services/BookService.interface";
import { IBook } from "../domain/models/Book";

const ListBookViewFactory = (bookService: IBookService) => {
  return function ListBookView() {
    const [books, setBooks] = React.useState<IBook[]>([]);

    // componentDidMount
    React.useEffect(() => {
      (async () => {
        const data = await bookService.getList();
        setBooks(data);
      })();
    }, []);

    return (
      <section>
        <BackNavBar backTo="/" />
        <Container>
          <Title>Book List</Title>
          {books.map((book) => {
            return <div key={book.id}>{book.name}</div>;
          })}
        </Container>
      </section>
    );
  };
};

export { ListBookViewFactory };
