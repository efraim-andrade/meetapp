import styled from 'styled-components/native';

import { Input, Button } from '~/components';

export const Container = styled.View`
  padding: 20px;
`;

export const Form = styled.SafeAreaView`
  margin-bottom: 15px;
`;

export const InputComponent = styled(Input)`
  margin-bottom: 10px;
`;

export const Hr = styled.View`
  width: 100%;
  height: 1px;
  margin: 20px 0;

  background: rgba(255, 255, 255, 0.1);
`;

export const ButtonComponent = styled(Button)`
  background: #e5556e;
`;

export const ButtonExit = styled(Button).attrs({
  size: 16,
})`
  height: 42px;
`;
