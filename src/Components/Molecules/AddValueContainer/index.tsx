import { Typography } from 'Components/Atoms/Typography';
import React from 'react';
import theme from 'Setup/theme';
import { CONTAINER_ICON_SIZE } from './consts';
import * as Styled from './styles';
import { AddValueContainerProps } from './types';

export const AddValueContainer: React.FC<AddValueContainerProps> = ({
  text,
  ...props
}) => {
  return (
    <Styled.Container {...props}>
      <Styled.PlusIcon
        name="plus"
        size={CONTAINER_ICON_SIZE}
        color={theme.colors.PRIMARY}
      />
      <Typography> {text}</Typography>
    </Styled.Container>
  );
};
