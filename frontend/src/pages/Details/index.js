import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SweetAlert from 'sweetalert-react';
import { toast } from 'react-toastify';
import {
  FaTimesCircle,
  FaEdit,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import api from '~/services/api';
import { Button } from '~/components';
import { formatDate } from '~/functions';
import historyBrowser from '~/services/history';

import { Container } from './styles';

export default function Details({ history }) {
  const meetupDetails = history.location.state.meetup;

  const [showAlert, setShowAlert] = useState(false);

  async function deleteMeetup(id) {
    setShowAlert(false);

    try {
      await api.delete(`meetups/${id}`);

      toast.success('Evento apagado com sucesso!');
      historyBrowser.push('/');
    } catch (err) {
      toast.error('Algo deu errado ao deletar, tente novamente!');
    }
  }

  return (
    <Container>
      <div className="header">
        <h1>{meetupDetails.title}</h1>

        <div className="actions">
          <Button
            type="button"
            onClick={() => historyBrowser.push(`/update/${meetupDetails.id}`)}
            themeColor="secondary"
          >
            <FaEdit size={18} />
            Editar
          </Button>

          <Button
            type="button"
            onClick={() => setShowAlert(true)}
            themeColor="danger"
          >
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

      <SweetAlert
        show={showAlert}
        title={meetupDetails.title}
        text="Deseja cancelar o meetup?"
        button="Sim"
        onConfirm={() => deleteMeetup(meetupDetails.id)}
      />
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
