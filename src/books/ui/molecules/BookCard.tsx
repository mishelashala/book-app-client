import React from "react";
import styled from "styled-components";
import { IBook } from "../../domain/models/Book";
import { Align, JustifyValue } from "../atoms/Align";

const BookCover = styled.img`
  background-color: gray;
  height: 100px;
  width: 100px;
`;

export interface IBookCardProps {
  book: IBook;
}

const BookContent = styled.div`
  box-sizing: border-box;
  padding: 0.5rem;
  width: calc(100% - 100px);
`;

const BookName = styled.h3`
  font-family: arial;
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
`;

const BookAuthor = styled.p`
  font-family: arial;
  margin: 0;
`;

const BookCardContainer = styled.div`
  margin: 1rem 0;
`;

const BookCard: React.FC<IBookCardProps> = ({ book }) => {
  return (
    <BookCardContainer>
      <Align justify={JustifyValue.Start}>
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
