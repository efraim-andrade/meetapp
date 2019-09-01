import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 50px;
  border-radius: 4px;

  align-items: center;
  justify-content: center;

  background: #f94d6a;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${props => props.size}px;
`;
