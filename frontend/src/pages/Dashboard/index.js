import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';

import { Button } from '~/components';
import { formatDate } from '~/functions';
import { meetupsRequest } from '~/store/modules/meetup/actions';

import { Container } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.data);

  useEffect(() => {
    dispatch(meetupsRequest());
  }, [dispatch]);

  return (
    <Container>
      <div className="header">
        <h1>Meus meetups</h1>

        <Button type="button" onClick={() => {}}>
          <FaPlusCircle size={18} />
          Novo meetup
        </Button>
      </div>

      <ul className="list">
        {meetups.map(meetup => (
          <li key={meetup.id}>
            <Link
              to={{
                pathname: `details/${meetup.id}`,
                state: { meetup },
              }}
            >
              <p className="description">{meetup.title}</p>

              <p className="date">{formatDate(meetup.date)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
