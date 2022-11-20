import { LOGIN_SCREEN } from 'Components/Pages/LoginScreen/consts';
import { MATCH_DETAILS_SCREEN } from 'Navigation/MatchDetailsScreen/consts';
import { MATCH_FROM_SCREEN } from 'Components/Pages/MatchFormScreen/consts';
import { MatchDetailsScreenParams } from 'Navigation/MatchDetailsScreen/types';
import { RESULT_FORM_SCREEN } from 'Components/Pages/ResultFormScreen/consts';
import { RootStackNavigator } from './consts';
import { SEASON_FORM_SCREEN } from 'Components/Pages/SeasonFormScreen/consts';
import { SETTINGS_SCREEN } from 'Components/Pages/SettingsScreen/consts';
import { SubNavigator } from 'Navigation/types';
import { TabBottomMenuParamList } from 'Navigation/TabsBottomMenu/types';
import { TABS_BOTTOM_MENU } from 'Navigation/TabsBottomMenu/consts';
import { TEAM_DETAILS_SCREEN } from 'Navigation/TeamDetailsScreen/consts';
import { TEAM_FORM_SCREEN } from 'Components/Pages/TeamFormScreen/consts';
import { WEEK_FORM_SCREEN } from 'Components/Pages/WeekFormScreen/consts';

export type TabBottomParamList = SubNavigator<TabBottomMenuParamList>;

export type RootStackParamList = {
  [TABS_BOTTOM_MENU]: TabBottomParamList;
  [MATCH_DETAILS_SCREEN]: MatchDetailsScreenParams;
  [TEAM_DETAILS_SCREEN]: TeamDetailsScreenParams;
  [SETTINGS_SCREEN]: undefined;
  [LOGIN_SCREEN]: undefined;
  [TEAM_FORM_SCREEN]: undefined;
  [WEEK_FORM_SCREEN]: undefined;
  [MATCH_FROM_SCREEN]: undefined;
  [RESULT_FORM_SCREEN]: undefined;
  [SEASON_FORM_SCREEN]: undefined;
};

type RootTypedNavigator = typeof RootStackNavigator;

export type RootStackScreenGenerator = (
  Stack: RootTypedNavigator,
) => JSX.Element;
