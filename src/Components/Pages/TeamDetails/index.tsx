import { AntDesign, Fontisto } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BackArrowIcon } from 'Components/Atoms/BackArrowIcon';
import { Typography } from 'Components/Atoms/Typography';
import { DetailFromStatistic } from 'Components/Molecules/DetailFromStatistic';
import { TeamMatches } from 'Components/Organisms/TeamMatches';
import { TeamStats } from 'Components/Organisms/TeamStats';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import theme from 'Setup/theme';
import {
  BodyContainer,
  HeaderContainer,
  SafeContainer,
  StyledTypography,
  styles,
} from './styles';

const renderScene = SceneMap({
  teamMatches: TeamMatches,
  teamStats: TeamStats,
});

export const TeamDetails = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [routes] = useState([
    { key: 'teamMatches', title: 'Terminarz' },
    { key: 'teamStats', title: 'Statystyki' },
  ]);

  return (
    <SafeContainer>
      <HeaderContainer>
        <BackArrowIcon style={styles.backArrowIcon} />
        <StyledTypography>Joga Bonito </StyledTypography>
        <StyledTypography size="small" style={styles.descriptionPosition}>
          Miejsce w rankingu: 1
        </StyledTypography>
      </HeaderContainer>

      <BodyContainer>
        <TabView
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={styles.tabBarStyle}
              labelStyle={styles.tabBarLabelStyle}
              activeColor={theme.colors.PRIMARY}
              indicatorStyle={styles.tabBarIndicatorStyle}
            />
          )}
          navigationState={{ index: currentTab, routes }}
          renderScene={renderScene}
          onIndexChange={setCurrentTab}
        />
      </BodyContainer>
    </SafeContainer>
  );
};
