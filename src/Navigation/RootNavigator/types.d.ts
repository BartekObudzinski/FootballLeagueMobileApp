import { MATCH_DETAILS_SCREEN } from 'Navigation/MatchDetailsScreen/consts';
import { MatchDetailsScreenParams } from 'Navigation/MatchDetailsScreen/types';
import { TABS_BOTTOM_MENU } from 'Navigation/TabsBottomMenu/consts';
import { TEAM_DETAILS_SCREEN } from 'Navigation/TeamDetailsScreen/consts';
export type RootStackParamList = {
  [TABS_BOTTOM_MENU]: undefined;
  [MATCH_DETAILS_SCREEN]: MatchDetailsScreenParams;
  [TEAM_DETAILS_SCREEN]: TeamDetailsScreenParams;
};
3;
