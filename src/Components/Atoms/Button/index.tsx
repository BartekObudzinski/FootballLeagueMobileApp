import React, { memo } from 'react';
import { ButtonTypography, PressableContainer } from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = memo(
  ({ type = 'fullfiled', children, ...rest }) => {
    return (
      <PressableContainer type={type} {...rest}>
        <ButtonTypography type={type}>{children}</ButtonTypography>
      </PressableContainer>
    );
  },
);
