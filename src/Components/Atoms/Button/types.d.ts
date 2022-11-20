import { ComponentProps } from 'react';
import { PressableProps } from 'react-native';

export type StyledButtonProps = {
  type?: 'fullfiled' | 'outline';
  disabled?: boolean;
};

export type ButtonProps = PressableProps &
  StyledButtonProps & { children?: React.ReactNode };
