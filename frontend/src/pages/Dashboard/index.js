import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import pt from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { FaPlusCircle } from 'react-icons/fa';

import { Button } from '~/components';
import api from '~/services/api';

import { Container } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function fetchMeetapps() {
      try {
        const { data } = await api.get('meetups/provider');

        setMeetups(data);
      } catch (error) {
        toast.error('Ocorreu algum erro ao buscar seu meetups!');
      }
    }

    fetchMeetapps();
  }, []);

  function formatDate(date) {
    const parsedDate = parseISO(date);

    return format(parsedDate, "d 'de' MMMM ', às ' hh'h'", { locale: pt });
  }

  return (
    <Container>
      <div className="header">
        <h1>Meus meetups</h1>

        <Button type="button">
          <FaPlusCircle size={18} />
          Novo meetup
        </Button>
      </div>

      <ul className="list">
        {meetups.map(meetup => (
          <li>
            <Link to={`meetup/${meetup.id}`}>
              <p className="description">{meetup.title}</p>

              <p className="date">{formatDate(meetup.date)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
