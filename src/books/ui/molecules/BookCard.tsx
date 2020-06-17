import React from "react";
import { IBook } from "../../domain/models/Book";
import { Align, AlignAxis } from "../atoms/Align";
import { BookAuthor } from "../atoms/BookAuthor";
import { BookCardContainer } from "../atoms/BookCardContainer";
import { BookContent } from "../atoms/BookContent";
import { BookCover } from "../atoms/BookCover";
import { BookName } from "../atoms/BookName";

export interface IBookCardProps {
  book: IBook;
}

const BookCard: React.FC<IBookCardProps> = ({ book }) => {
  return (
    <BookCardContainer>
      <Align justify={AlignAxis.Start}>
        <BookCover />
        <BookContent>
          <BookName>{book.name}</BookName>
          <BookAuthor>{book.authorName}</BookAuthor>
        </BookContent>
      </Align>
    </BookCardContainer>
  );
};

export { BookCard };
