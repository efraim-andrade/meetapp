import React, { useState, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import pt from 'date-fns/locale/pt-BR';
import { parseISO, format } from 'date-fns';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Header, Background, Card } from '~/components';

import {
  Container,
  DateActions,
  IconButton,
  Left,
  Right,
  Date,
  Meetups,
} from './styles';
import api from '~/services/api';

function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [actualMeetupDate, setActualMeetupDate] = useState({
    date: '2019-11-01',
  });

  useEffect(() => {
    async function fetchMeetups() {
      try {
        const response = await api.get('meetups', {
          params: {
            date: '2019-11-01',
            page: 1,
          },
        });

        const meetupsData = response.data.map(meetup => ({
          ...meetup,
          banner: meetup.banner.url,
          provider: meetup.user.name,
        }));

        setMeetups(meetupsData);
      } catch (error) {
        console.tron.log(error);
        Alert.alert('Algo deu errado ao buscar meetups!');
      }
    }

    fetchMeetups();
  }, []); // eslint-disable-line

  const formatedDate = useMemo(() => {
    const actualDate = new window.Date(actualMeetupDate.date);

    return format(actualDate, "d 'de' MMMM", { locale: pt });
  }, [actualMeetupDate.date]);

  function handleNextDate() {
    setActualMeetupDate();
  }

  function handlePrevDate() {}

  return (
    <Background>
      <Header />

      <Container>
        <DateActions>
          <IconButton onPress={handleNextDate}>
            <Left />
          </IconButton>

          <Date
            mode="date"
            data={actualMeetupDate}
            placeholder={formatedDate}
            onDateChange={date => setActualMeetupDate({ date })}
          />

          <IconButton onPress={handlePrevDate}>
            <Right />
          </IconButton>
        </DateActions>

        <Meetups
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Card {...item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" color={tintColor} size={20} />
  ),
};

export default withNavigationFocus(Dashboard);
