import React from 'react';
import { Typography } from '../../Atoms/Typography';
import { Container, PlusIcon } from './styles';
import { AddValueContainerProps } from './types';

export const AddValueContainer: React.FC<AddValueContainerProps> = ({
  text,
}) => {
  return (
    <Container>
      <PlusIcon name="plus" size={40} />
      <Typography size="large"> {text}</Typography>
    </Container>
  );
};
