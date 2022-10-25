import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'Components/Atoms/Button';

import { Typography } from 'Components/Atoms/Typography';
import { SettingsHeader } from 'Components/Molecules/SettingsHeader';
import { SettingsHeaderOption } from 'Components/Molecules/SettingsHeaderOption';
import { Switch, SwitchBase, View } from 'react-native';
import { LOGIN_SCREEN } from '../LoginScreen/consts';

export const SettingsScreen = () => {
  const { navigate } = useNavigation<any>();
  const navigateToLoginScreen = () => {
    navigate(LOGIN_SCREEN);
  };
  return (
    <View style={{ flex: 1, paddingVertical: 10 }}>
      <SettingsHeader title="Użytkownik" />
      <SettingsHeaderOption
        title={'Niezalogowany'}
        iconComponent={<Entypo name="user" size={24} />}
        actionComponent={
          <Button onPress={navigateToLoginScreen}>ZALOGUJ SIĘ</Button>
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
