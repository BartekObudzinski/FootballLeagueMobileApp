import { AntDesign } from '@expo/vector-icons';
import { Typography } from 'Components/Atoms/Typography';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from 'Setup/theme';
import styled from 'styled-components';

export const SafeContainer = styled(SafeAreaView)`
  background-color: ${theme.colors.SECONDARY};
`;

export const HeaderContainer = styled(View)`
  height: 150px;
  align-items: center;
  justify-content: center;
`;

export const styles = StyleSheet.create({
  backArrowIcon: {
    position: 'absolute',
    left: 0,
    top: 0,
    padding: 15,
  },
  descriptionPosition: { marginTop: -10 },
  tabBarStyle: {
    backgroundColor: theme.colors.WHITE,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: 5,
  },
  tabBarLabelStyle: {
    color: theme.colors.BLACK,
    fontSize: theme.fontSize.small,
    fontFamily: theme.fontFamily.bold,
  },
  tabBarIndicatorStyle: {
    backgroundColor: theme.colors.PRIMARY,
  },
});

export const StyledTypography = styled(Typography)`
  color: ${theme.colors.WHITE};
`;

export const BodyContainer = styled(View)`
  width: 100%;
  height: 100%;
`;
