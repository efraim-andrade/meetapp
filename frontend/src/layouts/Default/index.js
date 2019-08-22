import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '~/components';

import { Container } from './styles';

export default function Default({ children }) {
  return (
    <Container>
      <Header />

      <div className="content">{children}</div>
    </Container>
  );
}

Default.propTypes = {
  children: PropTypes.element.isRequired,
};
