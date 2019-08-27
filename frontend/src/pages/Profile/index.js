import React from 'react';
import { FaSave } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Button } from '~/components';

import { Container } from './styles';

export default function Profile() {
  const user = useSelector(state => state.auth.user);

  return (
    <Container>
      <Form initialData={user}>
        <Input name="name" />

        <Input name="email" />

        <hr />

        <Input name="password" placeholder="Senha atual" />

        <Input name="new_password" placeholder="Nova Senha" />

        <Input name="confirm_password" placeholder="Confirmação de senha" />

        <Button type="submit" onClick={() => {}}>
          <FaSave size={18} />
          Salvar perfil
        </Button>
      </Form>
    </Container>
  );
}
