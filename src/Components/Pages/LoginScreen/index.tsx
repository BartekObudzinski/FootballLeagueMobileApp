import { auth } from 'Setup/config';
import { AuthContext } from '../../../Contexts/auth-context';
import { Button } from 'Components/Atoms/Button';
import { Container, StretchContainer } from './styles';
import { Controller, useForm } from 'react-hook-form';
import { HOMEPAGE_SCREEN } from '../Homepage/consts';
import { Input } from 'Components/Atoms/Input';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
type FormData = {
  email: string;
  password: string;
};
export const LoginScreen = () => {
  const { navigate } = useNavigation<any>();
  const { setIsUserAuth } = useContext(AuthContext);

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSignIn = (data: FormData) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate(HOMEPAGE_SCREEN);
      })
      .catch(() => new Error('Failed login to app'));
  };

  const onSubmit = handleSubmit((data) => handleSignIn(data));

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsUserAuth(true);
      } else {
        setIsUserAuth(false);
      }
      return unsubscribe;
    });
  }, []);

  return (
    <Container>
      <StretchContainer>
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Login"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: true,
            minLength: 2,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Hasło"
              secureTextEntry={true}
            />
          )}
        />

        <Button onPress={onSubmit}>Zaloguj się</Button>
      </StretchContainer>
    </Container>
  );
};
