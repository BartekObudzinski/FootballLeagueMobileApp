import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from '../../Atoms/Typography/styles';

export const Homepage = () => {
  return (
    <SafeAreaView>
      <Typography variant="small">Homepage Screen</Typography>
      <Typography variant="medium">Homepage Screen</Typography>

      <Typography variant="large">Homepage Screen</Typography>
    </SafeAreaView>
  );
};
