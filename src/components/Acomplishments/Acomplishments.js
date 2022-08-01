import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {text: 'Teaching Award'},
  { text: 'Ford Mentorship Fellow' },
];

const Acomplishments = () => (
 <Section>
  <SectionTitle>Personal Accomplishments</SectionTitle>
  <Boxes>
    {data.map((card, index) =>(
      <Box key={index}>
        <BoxNum>{card.number}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
 </Section>
);

export default Acomplishments;
