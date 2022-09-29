import styled, { css } from 'styled-components/native';
import theme from '../../Setup/theme';
import { TypographyStyledProps } from './types';

const { small, medium, large } = theme.fontSize;

export const Typography = styled.Text<TypographyStyledProps>`
  ${(props) => {
    switch (props.variant) {
      case 'small':
        return css`
          font-size: ${small};
        `;
      case 'medium':
        return css`
          font-size: ${medium};
        `;
      case 'large':
        return css`
          font-size: ${large};
        `;
      default:
        return css`
          font-size: ${medium};
        `;
    }
  }};
`;
