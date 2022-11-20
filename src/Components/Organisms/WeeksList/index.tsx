import { Typography } from 'Components/Atoms/Typography';
import { WeekData } from 'Components/Pages/WeekFormScreen';
import { orderBy } from 'firebase/firestore';
import { useFirestore } from 'Hooks/useFirestore';
import { FirestoreCollections } from 'Hooks/useFirestore/consts';
import { useScreen } from 'Hooks/useScreen';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { WeekContainer } from './styles';

export type WeekListProps = {
  setCurrentWeek: React.Dispatch<WeekData>;
};

export const WeeksList: React.FC<WeekListProps> = (props) => {
  const [weeks, setWeeks] = useState<WeekData[]>([]);
  const { useScreenEffect } = useScreen();
  const { setCurrentWeek } = props;
  const { fetchCollection } = useFirestore();
  useScreenEffect(() => {
    const fetchWeeks = async () => {
      const documents = await fetchCollection(
        FirestoreCollections.WEEKS,
        orderBy('label'),
      );
      setWeeks(documents as WeekData[]);
      setCurrentWeek({
        id: documents[0].id,
        label: documents[0].label,
      });
    };
    fetchWeeks();
  }, []);

  return (
    <FlatList
      data={weeks}
      style={{ marginLeft: 10 }}
      focusable
      horizontal
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={(props) => (
        <WeekContainer
          onPress={() =>
            setCurrentWeek({ id: props.item.id, label: props.item.label })
          }
        >
          <Typography style={{ color: 'white' }}>{props.item.label}</Typography>
        </WeekContainer>
      )}
    />
  );
};
