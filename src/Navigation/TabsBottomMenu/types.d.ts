import { ADMIN_SCREEN } from 'Components/Pages/Admin/consts';
import { HOMEPAGE_SCREEN } from 'Components/Pages/Homepage/consts';
import { MATCHES_SCREEN } from 'Components/Pages/Matches/consts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Tab } from './consts';
import { TABLES_SCREEN } from 'Components/Pages/Tables/consts';

export type TabBottomMenuParamList = {
  [HOMEPAGE_SCREEN]: undefined;
  [MATCHES_SCREEN]: undefined;
  [TABLES_SCREEN]: undefined;
  [ADMIN_SCREEN]: undefined;
};
