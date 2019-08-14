import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';
import Logo from '~/assets/images/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={Logo} alt="Logo Meetapp" title="Logo Meetapp" />

      <Form onSubmit={handleSubmit}>
        <Input type="text" name="email" placeholder="Digite seu e-mail" />

        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Entrar</button>
      </Form>

      <Link to="/registrar">Criar conta grátis</Link>
    </>
  );
}
