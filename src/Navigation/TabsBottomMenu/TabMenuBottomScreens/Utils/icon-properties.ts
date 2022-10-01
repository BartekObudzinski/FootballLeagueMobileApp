import { HOMEPAGE_SCREEN } from '../../../../Components/Pages/Homepage/consts';
import { MATCHES_SCREEN } from '../../../../Components/Pages/Matches/consts';
import { TABLES_SCREEN } from '../../../../Components/Pages/Tables/consts';

export const iconProperties = (
  routeName: string,
): {
  name: 'home' | 'calendar' | 'trophy' | 'emoji-happy';
  label: string;
} => {
  switch (routeName) {
    case HOMEPAGE_SCREEN:
      return {
        name: 'home',
        label: 'Główna',
      };
    case MATCHES_SCREEN:
      return {
        name: 'calendar',
        label: 'Terminarz',
      };
    case TABLES_SCREEN:
      return {
        name: 'trophy',
        label: 'Tabele',
      };
    default:
      return {
        name: 'emoji-happy',
        label: 'Błąd',
      };
  }
};
