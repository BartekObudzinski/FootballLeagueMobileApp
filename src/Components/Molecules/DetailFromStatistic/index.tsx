import { Typography } from 'Components/Atoms/Typography';
import React from 'react';
import { Container, DetailContainer, ValueDetailContianer } from './styles';
import { DetailFromStatisticProps } from './types';

export const DetailFromStatistic: React.FC<DetailFromStatisticProps> = ({
  description,
  value,
}) => {
  return (
    <Container>
      <DetailContainer>
        <Typography>{description}</Typography>
      </DetailContainer>
      <ValueDetailContianer>
        <Typography>{value}</Typography>
      </ValueDetailContianer>
    </Container>
  );
};
