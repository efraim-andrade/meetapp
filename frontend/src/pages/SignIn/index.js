import React from 'react';
import { Link } from 'react-router-dom';

import { Input } from '~/components';
import Logo from '~/assets/images/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={Logo} alt="Logo Meetapp" title="Logo Meetapp" />

      <form>
        <Input type="text" name="email" placeholder="Digite seu e-mail" />

        <Input type="text" name="password" placeholder="Sua senha secreta" />

        <button type="submit">Entrar</button>
      </form>

      <Link to="/registrar">Criar conta grátis</Link>
    </>
  );
}
