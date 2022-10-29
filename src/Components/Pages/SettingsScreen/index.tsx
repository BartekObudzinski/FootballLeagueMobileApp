import { auth } from 'Setup/config';
import { AuthContext } from '../../../Contexts/auth-context';
import { Button } from 'Components/Atoms/Button';
import { Entypo } from '@expo/vector-icons';
import { HOMEPAGE_SCREEN } from '../Homepage/consts';
import { LOGIN_SCREEN } from '../LoginScreen/consts';
import { SettingsHeader } from 'Components/Molecules/SettingsHeader';
import { SettingsHeaderOption } from 'Components/Molecules/SettingsHeaderOption';
import { Switch, View } from 'react-native';
import { Typography } from 'Components/Atoms/Typography';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  const { navigate } = useNavigation<any>();
  const navigateToLoginScreen = () => {
    navigate(LOGIN_SCREEN);
  };
  const { isUserAuth } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, paddingVertical: 10 }}>
      <SettingsHeader title="Użytkownik" />
      <SettingsHeaderOption
        title={isUserAuth ? auth.currentUser?.email! : 'Niezalogowany'}
        iconComponent={<Entypo name="user" size={24} />}
        actionComponent={
          isUserAuth ? (
            <Button
              onPress={() => {
                auth
                  .signOut()
                  .then(() => {
                    navigate(HOMEPAGE_SCREEN);
                  })
                  .catch(() => {
                    new Error('Error during logging out');
                  });
              }}
            >
              WYLOGUJ SIĘ
            </Button>
          ) : (
            <Button onPress={navigateToLoginScreen}>ZALOGUJ SIĘ</Button>
          )
        }
      />
      <SettingsHeader title="Motyw" />
      <SettingsHeaderOption
        title={'Tryb ciemny'}
        iconComponent={<Entypo name="moon" size={24} />}
        actionComponent={<Switch />}
      />
      <SettingsHeader title="Inne" />
      <SettingsHeaderOption
        title={'Zmień język'}
        iconComponent={<Entypo name="language" size={24} />}
        actionComponent={<Typography>Polski</Typography>}
      />
    </View>
  );
};
