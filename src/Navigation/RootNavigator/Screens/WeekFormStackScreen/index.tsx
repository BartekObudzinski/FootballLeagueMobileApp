import theme from 'Setup/theme';
import { RootStackScreenGenerator } from '../../types';
import { WEEK_FORM_SCREEN } from 'Components/Pages/WeekFormScreen/consts';
import { WeekFormScreen } from 'Components/Pages/WeekFormScreen';

export const WeekFormStackScreen: RootStackScreenGenerator = (Stack) => {
  return (
    <Stack.Screen
      options={{
        contentStyle: { backgroundColor: theme.colors.WHITE },
        headerTitle: 'Dodaj Kolejkę',
        headerShadowVisible: false,
      }}
      name={WEEK_FORM_SCREEN}
      component={WeekFormScreen}
    />
  );
};
