import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import Logo from '~/assets/images/logo.svg';

export default function SignUp() {
  function handleSubmit() {}

  return (
    <>
      <img src={Logo} alt="Logo Meetapp" title="Logo Meetapp" />

      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Nome Completo" />

        <Input type="text" name="email" placeholder="Digite seu e-mail" />

        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar Conta</button>
      </Form>

      <Link to="/">Já tenho login</Link>
    </>
  );
}
