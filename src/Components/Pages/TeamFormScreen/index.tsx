import { Button } from 'Components/Atoms/Button';
import { Input } from 'Components/Atoms/Input';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Typography } from 'Components/Atoms/Typography';
import { useFirestore } from '../../../Hooks/useFirestore';
import { FirestoreCollections } from '../../../Hooks/useFirestore/consts';
import { Controller, useForm } from 'react-hook-form';
import { DocumentData } from 'firebase/firestore';
import { DataIndicator } from 'Components/Atoms/DataIndicator';

export const TeamFormScreen = () => {
  const [teams, setTeams] = useState<DocumentData[]>([]);
  const { fetchCollection, isLoading, insertDocument, deleteDocument } =
    useFirestore();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; shortName: string }>({
    defaultValues: {
      name: '',
      shortName: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const extendedData = {
      ...data,
      matches: '0',
      points: '0',
      players: [],
      goalScore: '0',
      goalLost: '0',
    };
    const document = await insertDocument(
      FirestoreCollections.TEAMS,
      extendedData,
    );
    setTeams((data) => [document, ...data]);
    reset();
  });

  const deleteRecord = (id: string) => {
    deleteDocument(FirestoreCollections.TEAMS, id);
    setTeams((currentData) => currentData.filter((data) => data.id !== id));
  };

  useEffect(() => {
    const fetchTeams = async () => {
      const documents = await fetchCollection(FirestoreCollections.TEAMS);
      setTeams((teams) => [...documents, ...teams]);
    };
    fetchTeams();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        width: '100%',
      }}
    >
      <Typography>Nazwa drużyny</Typography>
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Wprowadź nazwę"
            focusable={isLoading}
          />
        )}
      />
      <Typography>Skrócona nazwa drużyny</Typography>
      <Controller
        name="shortName"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            maxLength={3}
            placeholder="Wprowadź skróconą nazwę"
            focusable={isLoading}
          />
        )}
      />

      <Button onPress={onSubmit}>Dodaj</Button>
      <Typography>Dodane drużyny</Typography>
      <DataIndicator isData={teams.length > 0} isLoading={isLoading}>
        {teams.map((team) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
            }}
            key={team.id}
          >
            <Typography>{`${team.name} - ${team.shortName}`}</Typography>

            <Button onPress={() => deleteRecord(team.id)}>Usuń</Button>
          </View>
        ))}
      </DataIndicator>
    </View>
  );
};
