import React from 'react';
import {
  Wrapper,
  Text,
  Title,
  Container,
  IconContainer,
  LastContainer,
} from './Sidebar.style';

import {
  Dashboard,
  Billing,
  Message,
  Request,
  Star,
  UserIcon,
} from '../../assets/index';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Wrapper>
      <Title>MH</Title>

      <Container>
        <Link to=''>

        <IconContainer>
          <img src={Dashboard} alt="" />
          <Text>Dashboard</Text>
        </IconContainer>
        </Link>
        <Link to='mood-tracker'>
        <IconContainer>
          <img src={UserIcon} alt="" />
          <Text>Mood</Text>
        </IconContainer>
        </Link>
        <Link to='chat'>
        <IconContainer>
          <img src={Message} alt="" />
          <Text>Chat</Text>
        </IconContainer>
        </Link>
        <Link to='quotes'>
        <IconContainer>
          <img src={Message} alt="" />
          <Text>Quotes</Text>
        </IconContainer>
        </Link>
      </Container>

      <LastContainer>
        <IconContainer className="bottom">
          <img src={Request} alt="Login" />
          <Text>Log Out</Text>
        </IconContainer>
      </LastContainer>
    </Wrapper>
  );
};

export default Sidebar;
