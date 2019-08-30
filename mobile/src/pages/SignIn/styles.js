import styled from 'styled-components/native';
import { Input } from '~/components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px;
`;

export const Logo = styled.Image`
  height: 42px;
  margin-bottom: 50px;
`;

export const Form = styled.View``;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
