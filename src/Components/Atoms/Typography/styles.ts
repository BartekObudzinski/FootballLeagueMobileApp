import theme from 'Setup/theme';
import styled, { css } from 'styled-components/native';
import { TypographyStyledProps } from './types';

const { small, medium, large } = theme.fontSize;
const { regular } = theme.fontFamily;

export const Typography = styled.Text<TypographyStyledProps>`
  font-family: ${regular};

  ${(props) => {
    switch (props.size) {
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
          font-size: ${small};
        `;
    }
  }};

  ${({ bold }) =>
    bold &&
    css`
      font-family: ${theme.fontFamily.bold};
    `}
`;
