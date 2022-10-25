import theme from 'Setup/theme';
import { LOGIN_SCREEN } from 'Components/Pages/LoginScreen/consts';
import { LoginScreen } from 'Components/Pages/LoginScreen';
import { RootStackScreenGenerator } from '../../types';

export const LoginStackScreen: RootStackScreenGenerator = (Stack) => {
  return (
    <Stack.Screen
      options={{
        contentStyle: { backgroundColor: theme.colors.WHITE },
        headerTitle: 'Login',
        headerShadowVisible: false,
      }}
      name={LOGIN_SCREEN}
      component={LoginScreen}
    />
  );
};
