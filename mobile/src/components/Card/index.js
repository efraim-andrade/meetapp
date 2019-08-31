import React from 'react';

import {
  Container,
  Banner,
  Content,
  Title,
  Info,
  Icon,
  Text,
  Button,
} from './styles';

export default function Card({ banner }) {
  return (
    <Container>
      <Banner source={{ uri: banner }} />

      <Content>
        <Title>Meetup de React Native</Title>

        <Info>
          <Icon name="event" />

          <Text>24 de junho, as 20h</Text>
        </Info>

        <Info>
          <Icon name="place" />

          <Text>Rua Guilherme Lemba, 20</Text>
        </Info>

        <Info>
          <Icon name="person" />

          <Text>Diego Rocketseat</Text>
        </Info>

        <Button>Realizar Inscrição</Button>
      </Content>
    </Container>
  );
}
