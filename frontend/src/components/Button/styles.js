import styled, { css } from 'styled-components';

const btnTypes = {
  primary: css`
    background-color: #f94d6a;
  `,
  secondary: css`
    background-color: #4dbaf9;
  `,
  danger: css`
    background-color: #d44059;
  `,
};

export const ButtonElement = styled.button`
  height: 42px;
  border: none;
  padding: 0 20px;
  border-radius: 4px;

  display: flex;
  align-items: center;

  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 42px;

  ${props => btnTypes[props.themeColor]};

  > svg {
    margin-right: 4px;
  }
`;
