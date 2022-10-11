import { Typography } from 'Components/Atoms/Typography';
import React from 'react';
import theme from 'Setup/theme';
import * as Styled from './styles';
import { AddValueContainerProps } from './types';

export const AddValueContainer: React.FC<AddValueContainerProps> = ({
  text,
}) => {
  return (
    <Styled.Container>
      <Styled.PlusIcon name="plus" size={25} color={theme.colors.PRIMARY} />
      <Typography size="small"> {text}</Typography>
    </Styled.Container>
  );
};
