import { AddValueContainer } from 'Components/Molecules/AddValueContainer';
import React from 'react';
import { Container } from './styles';

export const Admin = () => {
  return (
    <Container>
      <AddValueContainer text="Dodaj Drużynę" />
      <AddValueContainer text="Dodaj Kolejkę" />
      <AddValueContainer text="Dodaj Spotkanie" />
    </Container>
  );
};
