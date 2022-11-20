import { FontAwesome5 } from '@expo/vector-icons';
import { DataIndicatorProps } from 'Components/Atoms/DataIndicator/typed';
import { Typography } from 'Components/Atoms/Typography';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import theme from 'Setup/theme';

export const DataIndicator: React.FC<DataIndicatorProps> = ({
  isData,
  isLoading,
  children,
}) => {
  return (
    <>
      {isData ? (
        children
      ) : (
        <>
          {isLoading ? (
            <>
              <ActivityIndicator size={128} color={theme.colors.SECONDARY} />
              <Typography style={{ alignSelf: 'center' }}>
                Wczytywanie...
              </Typography>
            </>
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FontAwesome5
                name="box-open"
                size={128}
                color={theme.colors.SECONDARY}
              />
              <Typography>Brak danych</Typography>
            </View>
          )}
        </>
      )}
    </>
  );
};
