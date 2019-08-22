import React from 'react';
import PropTypes from 'prop-types';

import { ButtonElement } from './styles';

// TODO: Fazer a parte do tema dinamico.
export default function Button({ children, onClick, theme }) {
  const props = {
    onClick,
    theme,
  };

  return (
    <ButtonElement type="button" {...props}>
      {children}
    </ButtonElement>
  );
}

Button.defaultProps = {
  theme: 'primary',
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.string,
};
