import React from 'react';
import { FlatList } from 'react-native';
import { Typography } from '../../Atoms/Typography';
import { WeekContainer } from './styles';
const data = [
  { id: '1', name: 'Kolejka 1', date: '30.09' },
  { id: '2', name: 'Kolejka 2', date: '10.10' },
  { id: '3', name: 'Kolejka 3', date: '30.09' },
  { id: '5', name: 'Kolejka 5', date: '30.09' },
  { id: '6', name: 'Kolejka 6', date: '30.09' },
  { id: '7', name: 'Kolejka 7', date: '30.09' },
  { id: '8', name: 'Kolejka 8', date: '30.09' },
  { id: '9', name: 'Kolejka 9', date: '30.09' },
  { id: '10', name: 'Kolejka 10', date: '30.09' },
  { id: '11', name: 'Kolejka 11', date: '30.09' },
];

export const WeeksList = () => {
  return (
    <FlatList
      data={data}
      focusable
      horizontal
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={(props) => (
        <WeekContainer>
          <Typography bold size="small">
            {props.item.name}
          </Typography>
          <Typography size="small">{props.item.date}</Typography>
        </WeekContainer>
      )}
    />
  );
};