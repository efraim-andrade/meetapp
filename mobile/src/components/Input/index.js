import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Container, TInput, Error } from './styles';

function Input({ style, errorMessage, ...rest }, ref) {
  return (
    <Container style={style}>
      <TInput {...rest} ref={ref} />

      {errorMessage && <Error>{errorMessage}</Error>}
    </Container>
  );
}

Input.defaultProps = {
  style: {},
  errorMessage: '',
};

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  errorMessage: PropTypes.string,
};

export default forwardRef(Input);
