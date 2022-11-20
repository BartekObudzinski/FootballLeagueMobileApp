import { Button } from 'Components/Atoms/Button';
import { DataIndicator } from 'Components/Atoms/DataIndicator';
import { Input } from 'Components/Atoms/Input';
import { Typography } from 'Components/Atoms/Typography';
import { DocumentData } from 'firebase/firestore';
import { useFirestore } from 'Hooks/useFirestore';
import { FirestoreCollections } from 'Hooks/useFirestore/consts';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';

export type WeekData = { id: string; label: string };

export const WeekFormScreen = () => {
  const [weeks, setWeeks] = useState<DocumentData[]>([]);
  const { insertDocument, deleteDocument, fetchCollection, isLoading } =
    useFirestore();
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
    const document = await insertDocument(FirestoreCollections.WEEKS, data);
    setWeeks((currentData) => [document, ...currentData]);
    reset();
  });

  const deleteRecord = (id: string) => {
    deleteDocument(FirestoreCollections.WEEKS, id);
    setWeeks((currentData) => currentData.filter((data) => data.id !== id));
  };
  useEffect(() => {
    const fetchData = async () => {
      const documents = await fetchCollection(FirestoreCollections.WEEKS);
      setWeeks(documents);
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
      <Typography>Nazwa kolejki</Typography>
      <Controller
        name="label"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Wprowadź nazwę kolejki"
          />
        )}
      />
      <Typography>Wybierz datę</Typography>

      <Button onPress={onSubmit}>Dodaj</Button>
      <Typography>Dodane kolejki</Typography>
      <DataIndicator isData={weeks.length > 0} isLoading={isLoading}>
        {weeks.map((week) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
            }}
            key={week.id}
          >
            <Typography>{week.label}</Typography>
            <Button onPress={() => deleteRecord(week.id)}>Usuń</Button>
          </View>
        ))}
      </DataIndicator>
    </View>
  );
};
