import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { FaSave } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';
import { Button } from '~/components';

import { Container } from './styles';
import DateInput from './DateInput';
import BannerInput from './BannerInput';

const schema = Yup.object().shape({
  banner_id: Yup.number(),
  title: Yup.string().required('Preencha o titulo'),
  description: Yup.string().required('Preencha uma descrição'),
  date: Yup.date().required('Adicione uma data'),
  location: Yup.string().required('Preencha uma localização'),
});

export default function Create({ match }) {
  const [initialData, setInitialData] = useState({});
  const meetupDetails = useSelector(state =>
    state.meetup.data.filter(
      meetup => Number(meetup.id) === Number(match.params.id)
    )
  );

  useEffect(() => {
    setInitialData(meetupDetails[0]);

    console.tron.log(meetupDetails[0]);
  }, [meetupDetails]);

  async function handleSubmit(data) {
    try {
      await api.post('meetups', data);

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

        <Input multiline name="description" placeholder="Descrição" />

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
