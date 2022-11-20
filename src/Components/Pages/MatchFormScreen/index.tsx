import { Button } from 'Components/Atoms/Button';
import { Typography } from 'Components/Atoms/Typography';
import { DocumentData } from 'firebase/firestore';
import { useFirestore } from 'Hooks/useFirestore';
import { FirestoreCollections } from 'Hooks/useFirestore/consts';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getDate } from 'Utils/get-date';
import { getTime } from 'Utils/get-time';
import { Dropdown } from 'Components/Atoms/Dropdown';
import { isNull } from 'Utils/is-null';
import { DataIndicator } from 'Components/Atoms/DataIndicator';
export const MatchFormScreen = () => {
  const [matches, setMatches] = useState<DocumentData[]>([]);
  const [hostOpen, setHostOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);
  const [hostTeams, setHostTeams] = useState<
    { label: string; value: string }[]
  >([]);
  const [guestTeams, setGuestTeams] = useState<
    { label: string; value: string }[]
  >([]);
  const [weeks, setWeeks] = useState<{ label: string; value: string }[]>([]);
  const [weeksOpen, setWeeksOpen] = useState(false);
  const [weekValue, setWeekValue] = useState(null);
  const [hostValue, setHostValue] = useState(null);
  const [guestValue, setGuestValue] = useState(null);

  const { insertDocument, deleteDocument, fetchCollection, isLoading } =
    useFirestore();
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async () => {
    const data = {
      host: hostValue,
      guest: guestValue,
      week: weekValue,
      date: getDate(date),
      time: getTime(date),
    };
    const document = await insertDocument(FirestoreCollections.MATCHES, data);
    setMatches((currentData) => [document, ...currentData]);

    setHostValue(null);
    setGuestValue(null);
  });

  const deleteRecord = (id: string) => {
    deleteDocument(FirestoreCollections.MATCHES, id);
    setMatches((currentData) => currentData.filter((data) => data.id !== id));
  };
  useEffect(() => {
    const fetchWeeks = async () => {
      const documents = await fetchCollection(FirestoreCollections.WEEKS);
      const weeks = documents.map((doc) => ({
        label: doc.label,
        value: doc.label,
      }));
      setWeeks(weeks);
    };
    const fetchMatches = async () => {
      const documents = await fetchCollection(FirestoreCollections.MATCHES);

      setMatches(documents);
    };

    const fetchTeams = async () => {
      const documents = await fetchCollection(FirestoreCollections.TEAMS);
      const teams = documents.map((doc) => ({
        label: doc.name,
        value: doc.name,
      }));
      setHostTeams(teams);
      setGuestTeams(teams);
    };
    fetchWeeks();
    fetchMatches();
    fetchTeams();
  }, []);

  const isButtonDisabled =
    isNull(hostValue) || isNull(guestValue) || isNull(weekValue);

  // DATE
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState(false);

  const showMode = (currentMode: 'date' | 'time') => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        width: '100%',
      }}
    >
      <Typography>Gospodarz</Typography>

      <Dropdown
        open={hostOpen}
        setValue={setHostValue}
        value={hostValue}
        items={hostTeams}
        setOpen={setHostOpen}
        setItems={setHostTeams}
        dropDownContainerStyle={{ zIndex: 10000 }}
      />
      <Typography>Gość</Typography>

      <Dropdown
        open={guestOpen}
        setValue={setGuestValue}
        value={guestValue}
        items={guestTeams}
        setOpen={setGuestOpen}
        setItems={setGuestTeams}
      />
      <Typography>Kolejka</Typography>

      <Dropdown
        open={weeksOpen}
        setValue={setWeekValue}
        value={weekValue}
        items={weeks}
        setOpen={setWeeksOpen}
        setItems={setWeeks}
      />
      <Button
        type="outline"
        style={{ marginVertical: 10 }}
        onPress={showDatepicker}
      >
        Wybierz datę
      </Button>
      <Button type="outline" onPress={showTimepicker}>
        Wybierz godzinę
      </Button>
      <Typography>
        Data i godzina:
        {`${getDate(date)} - ${getTime(date)}`}
      </Typography>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={(_, date) => {
            const currentDate = date;
            setShow(false);
            setDate(currentDate!);
          }}
        />
      )}
      <Button onPress={onSubmit} disabled={isButtonDisabled}>
        Dodaj
      </Button>
      <Typography>Dodane mecze {`(${matches.length})`}</Typography>
      <DataIndicator isData={matches.length > 0} isLoading={isLoading}>
        <ScrollView>
          {matches.map((match) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: '#25252522',
                marginVertical: 5,
              }}
              key={match.id}
            >
              <View style={{ alignItems: 'center' }}>
                <Typography>{match.host}</Typography>
                <Typography>vs.</Typography>
                <Typography>{match.guest}</Typography>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Typography>{match.date}</Typography>
                <Typography>{match.time}</Typography>
              </View>
              <Typography>{`${match.week}`}</Typography>
              <Button onPress={() => deleteRecord(match.id)}>Usuń</Button>
            </View>
          ))}
        </ScrollView>
      </DataIndicator>
    </View>
  );
};
