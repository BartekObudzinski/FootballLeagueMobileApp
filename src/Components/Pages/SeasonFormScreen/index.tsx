import React, { useEffect, useState } from 'react';
import { Button } from 'Components/Atoms/Button';
import { Input } from 'Components/Atoms/Input';
import { Typography } from 'Components/Atoms/Typography';
import { View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { DocumentData } from 'firebase/firestore';
import { db } from 'Setup/config';
import { useFirestore } from '../../../Hooks/useFirestore';
import { FirestoreCollections } from '../../../Hooks/useFirestore/consts';

export type Seasons = {
  id: string;
  label: string;
};

export const SeasonFormScreen = () => {
  const [seasons, setSeasons] = useState<DocumentData[]>([]);
  const { insertDocument, deleteDocument, fetchCollection } = useFirestore();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<{ label: string }>({
    defaultValues: {
      label: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const document = await insertDocument(FirestoreCollections.SEASONS, data);
    setSeasons((currentData) => [document, ...currentData]);
    reset();
  });

  const deleteRecord = (id: string) => {
    deleteDocument(FirestoreCollections.SEASONS, id);
    setSeasons((currentData) => currentData.filter((data) => data.id !== id));
  };
  useEffect(() => {
    const fetchData = async () => {
      const documents = await fetchCollection(FirestoreCollections.SEASONS);
      setSeasons(documents);
    };
    fetchData();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        width: '100%',
      }}
    >
      <Typography>Nazwa sezonu</Typography>
      <Controller
        name="label"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Wprowadź nazwę"
          />
        )}
      />

      <Button onPress={onSubmit}>Dodaj</Button>
      <Typography>Dodane sezony</Typography>

      {seasons.map((season) => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
          }}
          key={season.id}
        >
          <Typography>{season.label}</Typography>
          <Button onPress={() => deleteRecord(season.id)}>Usuń</Button>
        </View>
      ))}
    </View>
  );
};
