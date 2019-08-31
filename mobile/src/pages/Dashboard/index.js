import React, { useState, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import pt from 'date-fns/locale/pt-BR';
import { parseISO, format, parse } from 'date-fns';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Header, Background, Card } from '~/components';

import {
  Container,
  DateActions,
  IconButton,
  Left,
  Right,
  DatePicker,
  Meetups,
} from './styles';
import api from '~/services/api';

const date = new Date();

function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);
  const [actualMeetupDate, setActualMeetupDate] = useState({
    date: format(date, "yyyy'-'MM'-'dd"),
  });

  useEffect(() => {
    async function fetchMeetups() {
      try {
        const response = await api.get('meetups', {
          params: {
            date: actualMeetupDate.date,
            page: 1,
          },
        });

        const meetupsData = response.data.map(meetup => ({
          ...meetup,
          banner: meetup.banner.url,
          provider: meetup.user.name,
        }));

        setMeetups(meetupsData);
        setPage(2);
      } catch (error) {
        Alert.alert('Sem meetups neste dia!');
      }
    }

    fetchMeetups();
  }, [actualMeetupDate]); // eslint-disable-line

  async function loadMore() {
    try {
      const response = await api.get('meetups', {
        params: {
          date: actualMeetupDate.date,
          page,
        },
      });

      const meetupsData = response.data.map(meetup => ({
        ...meetup,
        banner: meetup.banner.url,
        provider: meetup.user.name,
      }));

      setMeetups([...meetups, ...meetupsData]);
      setPage(page + 1);
    } catch (error) {
      Alert.alert('Algo deu errado ao buscar meetups!');
    }
  }

  const formatedDate = useMemo(() => {
    const year = actualMeetupDate.date.substring(0, 4);
    const month = actualMeetupDate.date.substring(5, 7);
    const day = actualMeetupDate.date.substring(8, 10);

    const actualDate = new Date(year, month - 1, day);

    return format(actualDate, "d 'de' MMMM", { locale: pt });
  }, [actualMeetupDate.date]);

  function handleNextDate() {}

  function handlePrevDate() {}

  async function handleSubscription(id) {
    try {
      await api.post(`subscriptions/${id}`);

      Alert.alert('Inscrição feita com sucesso!');
    } catch (error) {
      console.tron.log(error);
      Alert.alert('Você já se inscreveu neste evento!');
    }
  }

  return (
    <Background>
      <Header />

      <Container>
        <DateActions>
          <IconButton onPress={handleNextDate}>
            <Left />
          </IconButton>

          <DatePicker
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
          renderItem={({ item }) => (
            <Card {...item} onSubscription={handleSubscription} />
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.2}
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
