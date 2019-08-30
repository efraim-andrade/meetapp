import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function Input({ style, ...rest }, ref) {
  return (
    <Container style={style}>
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

Input.defaultProps = {
  style: {},
};

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default forwardRef(Input);
