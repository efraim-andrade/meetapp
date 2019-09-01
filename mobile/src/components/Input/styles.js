import styled from 'styled-components/native';

export const Container = styled.View``;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.5)',
})`
  width: 100%;
  border-radius: 4px;
  padding: 0 20px;
  height: 50px;

  color: #ddd;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.2);
`;

export const Error = styled.Text`
  margin-left: auto;

  color: #d44059;
  font-size: 12px;
`;
