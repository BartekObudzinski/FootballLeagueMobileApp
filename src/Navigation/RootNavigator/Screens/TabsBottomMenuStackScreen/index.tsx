import { TabsBottomMenuStack } from 'Navigation/TabsBottomMenu';
import { TABS_BOTTOM_MENU } from 'Navigation/TabsBottomMenu/consts';
import { RootStackScreenGenerator } from '../../types';

export const TabsBottomMenuStackScreen: RootStackScreenGenerator = (Stack) => {
  return (
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name={TABS_BOTTOM_MENU}
      component={TabsBottomMenuStack}
    />
  );
};
