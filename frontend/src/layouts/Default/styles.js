import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;

  background-image: linear-gradient(#22202c, #402845);

  > .content {
    width: 100%;
    margin: 52px auto 0;
    max-width: 940px;

    form {
      display: flex;
      flex-direction: column;

      input,
      textarea {
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
      }

      input {
        margin-top: 10px;
      }

      textarea {
        height: 200px;
        margin-top: 10px;
        padding-top: 10px;

        font-size: 18px;
        font-family: Roboto;
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
  }
`;
