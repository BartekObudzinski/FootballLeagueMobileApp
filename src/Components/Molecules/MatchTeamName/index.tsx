import { Typography } from '../../Atoms/Typography';
import { Container } from './styles';
import { MatchTeamNameProps } from './types';

export const MatchTeamName: React.FC<MatchTeamNameProps> = ({ teamName }) => {
  return (
    <Container>
      <Typography>{teamName}</Typography>
    </Container>
  );
};
