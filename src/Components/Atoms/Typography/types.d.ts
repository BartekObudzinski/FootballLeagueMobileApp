import { ComponentProps } from 'react';
import { Text } from 'react-native';

export type TypographyStyledProps = {
  size?: 'small' | 'medium' | 'large';
  bold?: boolean;
};

export type TypographyProps = ComponentProps<typeof Text> &
  TypographyStyledProps;
