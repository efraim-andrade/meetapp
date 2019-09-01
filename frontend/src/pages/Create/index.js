import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FaSave } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import api from '~/services/api';
import { Button } from '~/components';
import history from '~/services/history';

import { Container } from './styles';
import DateInput from './DateInput';
import BannerInput from './BannerInput';

const schema = Yup.object().shape({
  banner_id: Yup.number(),
  date: Yup.date().required('Adicione uma data'),
  title: Yup.string().required('Preencha o titulo'),
  description: Yup.string().required('Preencha uma descrição'),
  location: Yup.string().required('Preencha uma localização'),
});

export default function Create({ match }) {
  const [initialData, setInitialData] = useState({});
  const [multilineValue, setMultilineValue] = useState('');

  const meetupDetails = useSelector(state =>
    state.meetup.data.filter(
      meetup => Number(meetup.id) === Number(match.params.id)
    )
  );

  useEffect(() => {
    if (meetupDetails[0]) {
      setInitialData(meetupDetails[0]);
    }
  }, [meetupDetails]);

  useEffect(() => {
    if (meetupDetails[0]) {
      setMultilineValue(meetupDetails[0].description);
    }
  }, []); //eslint-disable-line

  async function handleSubmit(data) {
    try {
      if (match.params.id) {
        await api.put(`meetups/${match.params.id}`, data);
      } else {
        await api.post('meetups', data);
      }

      toast.success('Meetup salvo com sucesso!');
      history.push('/');
    } catch (error) {
      toast.error('Ocorreu algum erro ao enviar os dados, tente novamente!');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema} initialData={initialData}>
        <BannerInput name="banner_id" />

        <Input name="title" placeholder="Título do Meetup" />

        <Input
          multiline
          name="description"
          placeholder="Descrição"
          value={multilineValue}
          onChange={event => setMultilineValue(event.target.value)}
        />

        <DateInput name="date" placeholder="Data do meetup" />

        <Input name="location" placeholder="Localização" />

        <Button type="submit" onClick={() => {}}>
          <FaSave size={18} />
          Salvar meetup
        </Button>
      </Form>
    </Container>
  );
}

Create.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
