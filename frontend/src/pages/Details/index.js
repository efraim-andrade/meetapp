import React from 'react';
import PropTypes from 'prop-types';
import {
  FaTimesCircle,
  FaEdit,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import { Button } from '~/components';
import { formatDate } from '~/functions';

import { Container } from './styles';

export default function Details({ history }) {
  const meetupDetails = history.location.state.meetup;

  return (
    <Container>
      <div className="header">
        <h1>{meetupDetails.title}</h1>

        <div className="actions">
          <Button type="button" onClick={() => {}} themeColor="secondary">
            <FaEdit size={18} />
            Editar
          </Button>

          <Button type="button" onClick={() => {}} themeColor="danger">
            <FaTimesCircle size={18} />
            Cancelar
          </Button>
        </div>
      </div>

      <img
        alt="Meetup Banner"
        title="Meetup Banner"
        src={meetupDetails.banner.url}
      />

      <p className="details">{meetupDetails.description}</p>

      <div className="informations">
        <p>
          <FaCalendarAlt size={18} /> {formatDate(meetupDetails.date)}
        </p>

        <p>
          <FaMapMarkerAlt size={18} /> {meetupDetails.location}
        </p>
      </div>
    </Container>
  );
}

Details.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.shape({
        meetup: PropTypes.number,
      }),
    }),
  }).isRequired,
};
