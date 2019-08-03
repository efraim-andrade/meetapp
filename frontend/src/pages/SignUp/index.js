import React from 'react';
import { Link } from 'react-router-dom';

import { Input } from '~/components';
import Logo from '~/assets/images/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={Logo} alt="Logo Meetapp" title="Logo Meetapp" />

      <form>
        <Input type="text" name="name" placeholder="Nome Completo" />

        <Input type="text" name="email" placeholder="Digite seu e-mail" />

        <Input
          type="text"
          name="new_password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar Conta</button>
      </form>

      <Link to="/">Já tenho login</Link>
    </>
  );
}
