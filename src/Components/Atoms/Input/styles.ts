import { TextInput } from 'react-native';
import theme from 'Setup/theme';
import styled from 'styled-components';

export const StyledTextInput = styled(TextInput)`
  border: 2px ${theme.colors.SECONDARY} solid;
  color: ${theme.colors.SECONDARY};
  border-radius: 10;
  padding: 10px;
  font-size: ${theme.fontSize.small};
  margin-vertical: 5;
`;
