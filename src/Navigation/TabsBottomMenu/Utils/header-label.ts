import { ADMIN_SCREEN } from 'Components/Pages/Admin/consts';
import { HOMEPAGE_SCREEN } from 'Components/Pages/Homepage/consts';
import { MATCHES_SCREEN } from 'Components/Pages/Matches/consts';
import { TABLES_SCREEN } from 'Components/Pages/Tables/consts';

export const headerLabel = (routeName: string): string => {
  switch (routeName) {
    case HOMEPAGE_SCREEN:
      return 'Liga Piłkarska';
    case MATCHES_SCREEN:
      return 'Terminarz';
    case TABLES_SCREEN:
      return 'Tabela Ligowa';
    case ADMIN_SCREEN:
      return 'Zarządzanie Ligą';
    default:
      return 'Liga Piłkarska';
  }
};
