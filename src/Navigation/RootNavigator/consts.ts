import { RouteProp, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

export const RootStackNavigator =
  createNativeStackNavigator<RootStackParamList>();

export const useScreenRoute = <T extends keyof RootStackParamList>() => {
  const params = useRoute<RouteProp<RootStackParamList, T>>();

  return params;
};
