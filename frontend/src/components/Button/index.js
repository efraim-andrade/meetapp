import React from 'react';
import PropTypes from 'prop-types';

import { ButtonElement } from './styles';

export default function Button({ children, onClick, themeColor }) {
  const props = {
    onClick,
    themeColor,
  };

  return (
    <ButtonElement type="button" {...props}>
      {children}
    </ButtonElement>
  );
}

Button.defaultProps = {
  themeColor: 'primary',
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  themeColor: PropTypes.string,
};
