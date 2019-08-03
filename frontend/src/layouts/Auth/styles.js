import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: linear-gradient(#22202c, #402845);

  > img {
    margin-bottom: 50px;
  }

  > form {
    display: flex;
    flex-direction: column;

    > input + input {
      margin-top: 10px;
    }

    > button {
      height: 50px;
      border: 0;
      border-radius: 4px;
      margin: 10px 0 20px 0;

      color: #fff;
      font-size: 18px;
      font-weight: bold;
      background: #f94d6a;
    }
  }

  > a {
    font-size: 16px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.6);
  }
`;
