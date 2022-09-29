import * as Styled from './styles';
import { TypographyProps } from './types';

export const Typography: React.FC<TypographyProps> = ({
  variant = 'medium',
  children,
  ...rest
}) => {
  return (
    <Styled.Typography {...{ variant, ...rest }}>{children}</Styled.Typography>
  );
};
