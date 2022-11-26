import React from 'react';
// import { nanoid } from 'nanoid';

import { Container, TodoList, Header, SearchForm, Section } from 'components';

export default function App() {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <TodoList />
        </Container>
      </Section>
    </>
  );
}
