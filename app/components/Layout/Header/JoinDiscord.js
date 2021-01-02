import React from 'react';
import styled from 'styled-components';
import DiscordIcon from '../../Icons/DiscordIcon';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  line-height: 2.25rem;
  font-weight: 500;
  text-align: center;
  position: relative;
  color: ${({theme}) => theme.color.header.primary};
  background-color: ${({theme}) => theme.color.interactive.blue};
`

const StyledDiscordIcon = styled(DiscordIcon)`
  height: 1.5rem;
  width: 1.5rem;
  fill: ${({theme}) => theme.color.header.primary};
  margin-left: 0.5rem;
`;


const JoinDiscord = () => {
  return (
    <Container>
      <a href="https://discord.gg/WFz8gT2"
         target="_blank"
         rel="noreferrer"
      >
        Join Discord
        <StyledDiscordIcon/>
      </a>
    </Container>
  )
}

export default JoinDiscord;
