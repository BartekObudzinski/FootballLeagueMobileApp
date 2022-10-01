import styled, { css } from 'styled-components/native';
import theme from '../../../Setup/theme';
import { TypographyStyledProps } from './types';

const { small, medium, large } = theme.fontSize;
const { light, regular, bold } = theme.fontFamily;

export const Typography = styled.Text<TypographyStyledProps>`
  font-family: ${regular}
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
            font-size: ${medium};
          `;
      }
    }};

  ${({ bold }) =>
    bold &&
    css`
      font-family: ${theme.fontFamily.bold};
    `}
`;
