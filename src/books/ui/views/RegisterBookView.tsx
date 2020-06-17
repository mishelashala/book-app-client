import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import assoc from "lodash/fp/assoc";
import replace from "lodash/fp/replace";
import split from "lodash/fp/split";
import { BackNavBar } from "../molecules/BackNavBar";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Container } from "../atoms/Container";
import { Label } from "../atoms/Label";
import styled from "styled-components";
import { When } from "../components/When";
import { Text } from "../atoms/Text";
import { Align, AlignAxis } from "../atoms/Align";
import { IBookService } from "../../domain/services/BookService.interface";

const Title = styled.h2`
  font-family: arial;
  margin: 0 0 2rem 0;
`;

const Field = styled.div`
  margin-bottom: 1rem;
`;

function parseQueryString(query: string): any {
  const [, value] = split("=", replace("?", "", query));
  return assoc("success", Boolean(value), {});
}

const RegisterBookViewFactory = (bookService: IBookService) => {
  return function RegisterBookView() {
    const history = useHistory();
    const location = useLocation();
    const query = parseQueryString(location.search);

    const handleSubmitForm = async (event: any) => {
      event.preventDefault();
      const { target } = event;
      const { bookName, bookAuthor } = target;

      await bookService.registerBook({
        name: bookName.value,
        authorName: bookAuthor.value,
      });

      history.replace("/books?success=true");
    };

    const handleClickOk = () => {
      history.replace("/");
    };

    return (
      <main>
        <BackNavBar backTo="/" />
        <Container>
          <When predicate={!query.success}>
            <Title>Register Book</Title>
            <form onSubmit={handleSubmitForm}>
              <Field>
                <Label htmlFor="bookName">Name</Label>
                <Input id="bookName" name="bookName" type="text" required />
              </Field>

              <Field>
                <Label htmlFor="bookAuthor">Author</Label>
                <Input id="bookAuthor" name="bookAuthor" type="text" required />
              </Field>

              <Button>Register</Button>
            </form>
          </When>

          <When predicate={query.success}>
            <Align justify={AlignAxis.Center}>
              <Text>Book Registered Succesfully!</Text>
            </Align>
            <Align justify={AlignAxis.Center}>
              <Button onClick={handleClickOk}>Ok boomer!</Button>
            </Align>
          </When>
        </Container>
      </main>
    );
  };
};

export { RegisterBookViewFactory };
