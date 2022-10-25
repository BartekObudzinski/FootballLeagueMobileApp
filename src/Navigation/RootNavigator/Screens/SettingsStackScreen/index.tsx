import { SettingsScreen } from 'Components/Pages/SettingsScreen';
import { SETTINGS_SCREEN } from 'Components/Pages/SettingsScreen/consts';
import theme from 'Setup/theme';
import { RootStackScreenGenerator } from '../../types';

export const SettingsStackScreen: RootStackScreenGenerator = (Stack) => {
  return (
    <Stack.Screen
      options={{
        contentStyle: { backgroundColor: theme.colors.WHITE },
        headerTitle: 'Ustawienia',
        headerShadowVisible: false,
      }}
      name={SETTINGS_SCREEN}
      component={SettingsScreen}
    />
  );
};
