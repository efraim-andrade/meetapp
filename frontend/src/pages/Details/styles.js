import styled from 'styled-components';

export const Container = styled.div`
  > .header {
    margin-bottom: 44px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > h1 {
      color: #fff;
      font-size: 32px;
      font-weight: bold;
    }

    > .actions {
      display: flex;
      align-items: center;

      > button + button {
        margin-left: 15px;
      }
    }
  }

  > img {
    width: 100%;
    height: 300px;
    border-radius: 4px;
    margin-bottom: 25px;

    object-fit: cover;
  }

  > p {
    margin-bottom: 30px;

    color: #fff;
    font-size: 18px;
    line-height: 1.5;
  }

  > .informations {
    display: flex;
    align-items: center;

    > p {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);

      & + p {
        margin-left: 20px;
      }
    }
  }
`;
