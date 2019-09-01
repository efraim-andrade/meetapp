import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Auth({ children }) {
  return <Container>{children}</Container>;
}

Auth.propTypes = {
  children: PropTypes.element.isRequired,
};
