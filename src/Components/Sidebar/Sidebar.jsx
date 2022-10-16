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

const Sidebar = () => {
  return (
    <Wrapper>
      <Title>MH</Title>

      <Container>
        <IconContainer>
          <img src={Dashboard} alt="" />
          <Text>Dashboard</Text>
        </IconContainer>

        <IconContainer>
          <img src={UserIcon} alt="" />
          <Text>Mood</Text>
        </IconContainer>

        <IconContainer>
          <img src={Message} alt="" />
          <Text>Chat</Text>
        </IconContainer>

        {/* <IconContainer>
          <img src={Star} alt="" />
          <Text>Starred</Text>
        </IconContainer>

        <IconContainer>
          <img src={Request} alt="" />
          <Text>Requests</Text>
        </IconContainer>

        <IconContainer>
          <img src={Billing} alt="" />
          <Text>Billing</Text>
        </IconContainer> */}
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
