import React from 'react';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <div className="header">
        <h1>Meus meetups</h1>

        <button type="button">Novo meetup</button>
      </div>
    </Container>
  );
}
