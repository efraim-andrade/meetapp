import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <h1>profile</h1>

      <Form>
        <Input placeholder="Nome" name="name" />

        <Input placeholder="Nome" name="name" />

        <Input placeholder="Nome" name="name" />
      </Form>
    </Container>
  );
}
