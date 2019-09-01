import React from 'react';
import * as Yup from 'yup';
import { FaSave } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Button } from '~/components';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email('E-mail inválido!'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field
          .required('Preencha a nova senha')
          .min(6, 'Necessário no mínimo 6 caracteres')
      : field
  ),
  passwordConfirm: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Preencha a nova senha')
          .oneOf([Yup.ref('password')], 'Senhas não estão iguais!')
      : field
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={user} onSubmit={handleSubmit} schema={schema}>
        <Input name="name" />

        <Input name="email" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Senha atual" />

        <Input name="password" type="password" placeholder="Nova Senha" />

        <Input
          name="passwordConfirm"
          type="password"
          placeholder="Confirmação de senha"
        />

        <Button type="submit" onClick={() => {}}>
          <FaSave size={18} />
          Salvar perfil
        </Button>
      </Form>
    </Container>
  );
}
