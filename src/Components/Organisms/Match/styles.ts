import styled from 'styled-components/native';
import { TouchableOpacity, View } from 'react-native';

export const PressableContainer = styled(TouchableOpacity)`
  width: 100%;
  background-color: white;
  margin-bottom: 15px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 10;
`;

export const DetailsContainer = styled(View)`
  flex-direction: column;
  align-items: center;
`;
