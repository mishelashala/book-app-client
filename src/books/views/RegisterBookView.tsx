import * as React from "react";
import { BackNavBar } from "../molecules/BackNavBar";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Container } from "../atoms/Container";
import { Label } from "../atoms/Label";
import styled from "styled-components";

const Title = styled.h2`
  font-family: arial;
  margin: 0 0 2rem 0;
`;

const Field = styled.div`
  margin-bottom: 1rem;
`;

const RegisterBookView = () => {
  const handleSubmitForm = (event: any) => {
    event.preventDefault();
    const { target } = event;
    const { bookName, bookAuthor } = target;
    // @todo: fetch api
    console.log(bookAuthor.value, bookName.value);
  };

  return (
    <main>
      <BackNavBar backTo="/" />
      <Container>
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
      </Container>
    </main>
  );
};

export { RegisterBookView };
