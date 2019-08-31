import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import pt from 'date-fns/locale/pt-BR';
import { parseISO, format } from 'date-fns';

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

export default function Card({ banner, title, date, location, provider }) {
  const convertedDate = useMemo(() => {
    const parsedDate = parseISO(date);

    return format(parsedDate, "d 'de' MMMM ', às 'h'h'", { locale: pt });
  }, [date]);

  return (
    <Container>
      <Banner source={{ uri: banner }} />

      <Content>
        <Title>{title}</Title>

        <Info>
          <Icon name="event" />

          <Text>{convertedDate}</Text>
        </Info>

        <Info>
          <Icon name="place" />

          <Text>{location}</Text>
        </Info>

        <Info>
          <Icon name="person" />

          <Text>{provider}</Text>
        </Info>

        <Button>Realizar Inscrição</Button>
      </Content>
    </Container>
  );
}

Card.propTypes = {
  banner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
};
