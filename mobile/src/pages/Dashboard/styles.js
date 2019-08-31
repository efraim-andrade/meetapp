import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  padding: 0 20px;
`;

export const DateActions = styled.View`
  margin: 32px auto;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled.TouchableOpacity``;

export const Left = styled(Icon).attrs({
  size: 19,
  color: '#FFF',
  name: 'chevron-left',
})``;

export const Right = styled(Left).attrs({
  name: 'chevron-right',
})``;

export const Date = styled.Text`
  margin: 0 10px;

  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
