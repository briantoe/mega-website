import React from 'react';
import { styled } from '@mui/system';
import { MemberCardComponent } from './MemberCardComponent';

const GridContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
  padding: '20px', // Add padding to all sides for consistent spacing
  boxSizing: 'border-box', // Ensure padding is included in element's total width
});

export const MemberCards = () => {
  // members object should be drawn from a data source in the future, maybe a google sheet?
  const members = [
    {
      image: 'https://picsum.photos/200',
      instrument: 'Piano',
      name: 'Jane Doe',
      pronouns: 'She/Her',
      description: 'Passionate pianist and composer.',
      instagram: 'https://www.instagram.com/jane.doe/',
      twitter: 'https://twitter.com/janedoe',
      youtube: 'https://www.youtube.com/channel/UCuRieTSfjxMSaoQuxSo18ZQ',
    },
    {
      image: 'https://picsum.photos/200',
      instrument: 'Piano',
      name: 'Jane Doe',
      pronouns: 'She/Her',
      description: 'Passionate pianist and composer.',
      instagram: 'https://www.instagram.com/jane.doe/',
      twitter: 'https://twitter.com/janedoe',
      youtube: 'https://www.youtube.com/channel/UCuRieTSfjxMSaoQuxSo18ZQ',
    },
    {
      image: 'https://picsum.photos/200',
      instrument: 'Piano',
      name: 'Jane Doe',
      pronouns: 'She/Her',
      description: 'Passionate pianist and composer.',
      instagram: 'https://www.instagram.com/jane.doe/',
      twitter: 'https://twitter.com/janedoe',
      youtube: 'https://www.youtube.com/channel/UCuRieTSfjxMSaoQuxSo18ZQ',
    },
    {
      image: 'https://picsum.photos/200',
      instrument: 'Piano',
      name: 'Jane Doe',
      pronouns: 'She/Her',
      description: 'Passionate pianist and composer.',
      instagram: 'https://www.instagram.com/jane.doe/',
      twitter: 'https://twitter.com/janedoe',
      youtube: 'https://www.youtube.com/channel/UCuRieTSfjxMSaoQuxSo18ZQ',
    },
    // Add more member objects...
  ];

  return (
    <GridContainer>
      {members.map((member, index) => (
        <MemberCardComponent key={index} {...member} />
      ))}
    </GridContainer>
  );
};
