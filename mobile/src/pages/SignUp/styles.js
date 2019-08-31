import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { Input, Button } from '~/components';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
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

export const SubmitButton = styled(Button)`
  margin: 5px 0 20px 0;
`;

export const SignLink = styled.TouchableOpacity`
  margin: 0 auto;
`;

export const SignText = styled.Text`
  color: rgba(255, 255, 255, 0.6);

  font-size: 16px;
  font-weight: bold;
`;
