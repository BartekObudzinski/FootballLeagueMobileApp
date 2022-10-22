import React from 'react';
import { StyledTextInput } from './styles';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return <StyledTextInput {...props} />;
};
