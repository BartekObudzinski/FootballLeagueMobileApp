import styled, { css } from 'styled-components/native';
import theme from '../../../Setup/theme';
import { TypographyStyledProps } from './types';

const { small, medium, large } = theme.fontSize;
const { light, regular, bold } = theme.fontFamily;

export const Typography = styled.Text<TypographyStyledProps>`
  ${(props) => {
    switch (props.variant) {
      case 'small':
        return css`
          font-size: ${small};
          font-family: ${light};
        `;
      case 'medium':
        return css`
          font-size: ${medium};
          font-family: ${regular};
        `;
      case 'large':
        return css`
          font-size: ${large};
          font-family: ${bold};
        `;
      default:
        return css`
          font-size: ${medium};
          font-family: ${regular};
        `;
    }
  }};
`;
