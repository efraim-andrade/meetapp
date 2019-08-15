import React, { useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { store } from '~/store';
import Logo from '~/assets/images/logo.svg';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.tron.log(store.getState().auth);
  }, []);

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
