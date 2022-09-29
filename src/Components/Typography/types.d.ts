import { ComponentProps } from 'react';
import { Text } from 'react-native';

export type TypographyStyledProps = {
  variant?: 'small' | 'medium' | 'large';
};

export type TypographyProps = ComponentProps<typeof Text> &
  TypographyStyledProps;
