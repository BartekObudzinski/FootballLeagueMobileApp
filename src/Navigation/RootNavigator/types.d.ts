import { MATCH_DETAILS_SCREEN } from 'Navigation/MatchDetailsScreen/consts';
import { MatchDetailsScreenParams } from 'Navigation/MatchDetailsScreen/types';
import { SubNavigator } from 'Navigation/types';
import { TabBottomMenuParamList } from 'Navigation/TabsBottomMenu/types';
import { TABS_BOTTOM_MENU } from 'Navigation/TabsBottomMenu/consts';
import { TEAM_DETAILS_SCREEN } from 'Navigation/TeamDetailsScreen/consts';
import { SETTINGS_SCREEN } from 'Components/Pages/SettingsScreen/consts';
import { LOGIN_SCREEN } from 'Components/Pages/LoginScreen/consts';

export type RootStackParamList = {
  [TABS_BOTTOM_MENU]: SubNavigator<TabBottomMenuParamList>;
  [MATCH_DETAILS_SCREEN]: MatchDetailsScreenParams;
  [TEAM_DETAILS_SCREEN]: TeamDetailsScreenParams;
  [SETTINGS_SCREEN]: undefined;
  [LOGIN_SCREEN]: undefined;
};
3;
