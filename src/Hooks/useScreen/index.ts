import React from 'react';
import type { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { UseScreenEffectHook } from 'Hooks/useScreen/types';
import { RootStackParamList } from 'Navigation/RootNavigator/types';

type NavProp = NavigationProp<RootStackParamList, keyof RootStackParamList>;

type ExtendedNavProps = {
  useScreenEffect: UseScreenEffectHook;
};

export type UseNavResult = ExtendedNavProps;

export const useScreen = (): UseNavResult => {
  const navigation = useNavigation<NavProp>();

  const useScreenEffect: UseScreenEffectHook = (callback, deps) => {
    const [intDep, triggerEffect] = React.useReducer(
      (state: number): number => state + 1,
      Number.MIN_SAFE_INTEGER,
    );

    const isFirstFocus = React.useRef(true);

    const latestCallback = React.useRef(callback);
    latestCallback.current = callback;

    const onBlur = React.useRef(() => {});

    const callOnBlur = React.useCallback(() => {
      const fn = onBlur.current;
      onBlur.current = () => {};
      fn();
    }, []);

    React.useEffect(() => {
      if (navigation.isFocused()) {
        const cleanup = latestCallback.current();

        if (cleanup) {
          onBlur.current = cleanup;
        } else {
          onBlur.current = () => {};
        }
      }

      return () => {
        callOnBlur();
      };
    }, [...deps, intDep]);

    React.useEffect(() => {
      const removeOnFocusListener = navigation.addListener('focus', () => {
        if (!isFirstFocus.current) triggerEffect();
        else isFirstFocus.current = false;
      });

      const removeOnBlurListener = navigation.addListener('blur', () => {
        callOnBlur();
      });

      return () => {
        removeOnFocusListener();
        removeOnBlurListener();

        isFirstFocus.current = true;
      };
    }, []);
  };

  const extendedNavProps: ExtendedNavProps = {
    useScreenEffect,
  };

  return Object.assign(navigation, extendedNavProps);
};
