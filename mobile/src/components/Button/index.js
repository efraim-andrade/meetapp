import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

function Button({ children, loading, size, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text size={size}>{children}</Text>
      )}
    </Container>
  );
}

Button.defaultProps = {
  loading: false,
  size: 18,
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  loading: PropTypes.bool,
  size: PropTypes.number,
};

export default Button;
