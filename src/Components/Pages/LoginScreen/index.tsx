import { Button } from 'Components/Atoms/Button';
import { Container, StretchContainer } from './styles';
import { Input } from 'Components/Atoms/Input';

export const LoginScreen = () => {
  return (
    <Container>
      <StretchContainer>
        <Input placeholder="Login" />
        <Input placeholder="Hasło" />

        <Button onPress={() => {}}>Zaloguj się</Button>
      </StretchContainer>
    </Container>
  );
};
