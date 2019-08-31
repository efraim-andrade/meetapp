import styled from 'styled-components/native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  padding: 0 20px;

  margin-bottom: 155px;
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

export const Date = styled(DatePicker).attrs({
  showIcon: false,
  customStyles: {
    dateInput: {
      borderWidth: 0,
    },
    dateText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    placeholderText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
  },
})`
  margin: 0 10px;
`;

export const Meetups = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
