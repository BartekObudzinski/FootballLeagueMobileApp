import { Entypo } from '@expo/vector-icons';
import { Button } from 'Components/Atoms/Button';
import { Typography } from 'Components/Atoms/Typography';
import React from 'react';
import { View } from 'react-native';
import { Container, StyledTypography, TitleContainer } from './styles';
import { SettingsHeaderOptionProps } from './types';

export const SettingsHeaderOption: React.FC<SettingsHeaderOptionProps> = ({
  actionComponent,
  iconComponent,
  title,
}) => {
  return (
    <Container>
      <TitleContainer>
        {iconComponent}
        <StyledTypography size="small">{title}</StyledTypography>
      </TitleContainer>
      <View>{actionComponent}</View>
    </Container>
  );
};
