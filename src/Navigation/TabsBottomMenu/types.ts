import { HOMEPAGE_SCREEN } from '../../Components/Pages/Homepage/consts';
import { MATCHES_SCREEN } from '../../Components/Pages/Matches/consts';
import { TABLES_SCREEN } from '../../Components/Pages/Tables/consts';
import { Tab } from './consts';

export type TabBottomMenuParamList = {
  [HOMEPAGE_SCREEN]: undefined;
  [MATCHES_SCREEN]: undefined;
  [TABLES_SCREEN]: undefined;
};
type TabBottomMenuProp = typeof Tab;
export type TabBottomMenuType = (Tab: TabBottomMenuProp) => JSX.Element;
