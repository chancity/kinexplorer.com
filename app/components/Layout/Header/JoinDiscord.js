import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
  line-height: 2.25rem;
  font-weight: 500;
  text-align: center;
  position: relative;
  color: ${({theme}) => theme.color.header.primary};
  background-color: ${({theme}) => theme.color.interactive.blue};
`

const JoinDiscord = () => {
  return (
    <Container>
      <a href={'https://discord.gg/WFz8gT2'}
         target="_blank"
         rel="noreferrer"
      >
        Join Discord
      </a>
    </Container>
  )
}

export default JoinDiscord;
