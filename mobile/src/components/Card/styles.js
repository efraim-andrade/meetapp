import styled from 'styled-components/native';
import IconComponent from 'react-native-vector-icons/MaterialIcons';

import ButtonComponent from '../Button';

export const Container = styled.View`
  border-radius: 4px;
  margin-bottom: 20px;

  overflow: hidden;
  background: #fff;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 150px;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  margin-bottom: 8px;

  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

export const Info = styled.View`
  margin-bottom: 8px;

  align-items: center;
  flex-direction: row;
`;

export const Icon = styled(IconComponent).attrs({
  color: '#999',
  size: 13,
})``;

export const Text = styled.Text`
  margin-left: 10px;

  color: #999;
  font-size: 13px;
`;

export const Button = styled(ButtonComponent)`
  height: 40px;

  background: #f94d6a;
`;
