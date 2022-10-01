import * as Styled from './styles';
import { TypographyProps } from './types';
/**
 * Default text component with medium variant as default, otherwise you can use small or large variant.
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = 'medium',
  children,
  ...rest
}) => {
  return (
    <Styled.Typography {...{ variant, ...rest }}>{children}</Styled.Typography>
  );
};
