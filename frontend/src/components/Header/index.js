import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';
import Logo from '~/assets/images/logo.svg';
import { signOut } from '~/store/modules/auth/actions';

import { Container } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  function handleSignout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <div className="content">
        <Link to="/">
          <img
            src={Logo}
            className="logo"
            alt="Meetapp Logo"
            title="Meetapp Logo"
          />
        </Link>

        <div className="right">
          <div className="info">
            <strong>{user.name}</strong>

            {/* TODO: colocar o link certo quando tiver o link */}
            <Link to="/">Meu Perfil</Link>
          </div>

          <Button onClick={handleSignout} themeColor="danger">
            Sair
          </Button>
        </div>
      </div>
    </Container>
  );
}
