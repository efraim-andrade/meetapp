import React, { useState, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { useDispatch } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import remountDate from '~/functions/remountDate';
import { Header, Background, Card } from '~/components';
import { subscriptionsRequest } from '~/store/modules/subscriptions/actions';

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
  const dispatch = useDispatch();

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
    const actualDate = remountDate(actualMeetupDate.date);

    return format(actualDate, "d 'de' MMMM", { locale: pt });
  }, [actualMeetupDate.date]);

  function handleNextDate() {
    const remountedDate = remountDate(actualMeetupDate.date, 'next');

    setActualMeetupDate({
      date: format(remountedDate, "yyyy'-'MM'-'dd"),
    });
  }

  function handlePrevDate() {
    const remountedDate = remountDate(actualMeetupDate.date, 'prev');

    setActualMeetupDate({
      date: format(remountedDate, "yyyy'-'MM'-'dd"),
    });
  }

  async function handleSubscription(id) {
    try {
      await api.post(`subscriptions/${id}`);

      dispatch(subscriptionsRequest());

      Alert.alert('Inscrição feita com sucesso!');
    } catch (error) {
      Alert.alert('Você já se inscreveu neste evento!');
    }
  }

  return (
    <Background>
      <Header />

      <Container>
        <DateActions>
          <IconButton onPress={handlePrevDate}>
            <Left />
          </IconButton>

          <DatePicker
            mode="date"
            data={actualMeetupDate}
            placeholder={formatedDate}
            onDateChange={date => setActualMeetupDate({ date })}
          />

          <IconButton onPress={handleNextDate}>
            <Right />
          </IconButton>
        </DateActions>

        <Meetups
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Card {...item} onPress={handleSubscription} />
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
