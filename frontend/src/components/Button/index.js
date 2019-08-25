import React from 'react';
import PropTypes from 'prop-types';

import { ButtonElement } from './styles';

export default function Button({ type, children, onClick, themeColor }) {
  const props = {
    onClick,
    themeColor,
  };

  return (
    <ButtonElement type={type} {...props}>
      {children}
    </ButtonElement>
  );
}

Button.defaultProps = {
  themeColor: 'primary',
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  themeColor: PropTypes.string,
  type: PropTypes.string,
};
