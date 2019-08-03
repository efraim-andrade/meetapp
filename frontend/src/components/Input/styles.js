import styled from 'styled-components';

export const CustomInput = styled.input`
  height: 50px;
  padding: 0 20px;
  border: 0;
  border-radius: 4px;

  color: #eee;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;
