import { Typography } from 'Components/Atoms/Typography';
import { Container } from './styles';
import { SettingsHeaderProps } from './types';

export const SettingsHeader: React.FC<SettingsHeaderProps> = ({ title }) => {
  return (
    <Container>
      <Typography size="medium" bold>
        {title}
      </Typography>
    </Container>
  );
};
