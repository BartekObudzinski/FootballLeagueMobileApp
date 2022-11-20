import { Pressable } from 'react-native';
import theme from 'Setup/theme';
import styled from 'styled-components';
import { css } from 'styled-components/native';
import { Typography } from '../Typography';
import { StyledButtonProps } from './types';

export const PressableContainer = styled(Pressable)<StyledButtonProps>`
  align-items: center;
  justify-content: center;
  border-radius: 10;
  padding: 10px;

  ${({ type }) => {
    switch (type) {
      case 'fullfiled':
        return css`
          background-color: ${theme.colors.SECONDARY};
        `;
      case 'outline':
        return css`
          border: 2px ${theme.colors.SECONDARY} solid;
        `;
      default:
        return css`
          background-color: ${theme.colors.SECONDARY};
        `;
    }
  }}
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #e2e2e2;
    `}
`;

export const ButtonTypography = styled(Typography)<StyledButtonProps>`
  ${({ type }) => {
    switch (type) {
      case 'fullfiled':
        return css`
          color: ${theme.colors.WHITE};
        `;
      case 'outline':
        return css`
          color: ${theme.colors.SECONDARY};
        `;
      default:
        return css`
          color: ${theme.colors.WHITE};
        `;
    }
  }}
`;
