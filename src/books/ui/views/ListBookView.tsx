import React from "react";
import { BackNavBar } from "../molecules/BackNavBar";
import { Container } from "../atoms/Container";
import { Title } from "../atoms/Title";
import { IBookService } from "../../domain/services/BookService.interface";
import { IBook } from "../../domain/models/Book";
import { BookCard } from "../molecules/BookCard";

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
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </Container>
      </section>
    );
  };
};

export { ListBookViewFactory };
