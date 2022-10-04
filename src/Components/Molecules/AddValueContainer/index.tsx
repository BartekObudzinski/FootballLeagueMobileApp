import * as Styled from './styles';
import React from 'react';
import { AddValueContainerProps } from './types';
import { Typography } from 'Components/Atoms/Typography';

export const AddValueContainer: React.FC<AddValueContainerProps> = ({
  text,
}) => {
  return (
    <Styled.Container>
      <Styled.PlusIcon name="plus" size={40} />
      <Typography size="large"> {text}</Typography>
    </Styled.Container>
  );
};
