import theme from 'Setup/theme';
import { RESULT_FORM_SCREEN } from 'Components/Pages/ResultFormScreen/consts';
import { ResultFormScreen } from 'Components/Pages/ResultFormScreen';
import { RootStackScreenGenerator } from '../../types';

export const ResultFormStackScreen: RootStackScreenGenerator = (Stack) => {
  return (
    <Stack.Screen
      options={{
        contentStyle: { backgroundColor: theme.colors.WHITE },
        headerTitle: 'Dodaj Wynik',
        headerShadowVisible: false,
      }}
      name={RESULT_FORM_SCREEN}
      component={ResultFormScreen}
    />
  );
};
