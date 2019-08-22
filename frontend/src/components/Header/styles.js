import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.3);

  > .content {
    height: 92px;
    margin: 0 auto;
    max-width: 940px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > .logo {
      height: 32px;
    }

    > .right {
      display: flex;
      align-items: center;

      > .info {
        margin-right: 27px;

        display: flex;
        flex-direction: column;

        > strong {
          margin-bottom: 5px;

          color: #fff;
          text-align: right;
          font-size: 14px;
          font-weight: bold;
        }

        > a {
          color: #999;
          font-size: 14px;
          text-align: right;
        }
      }

      > button {
        height: 42px;
        border: none;
        border-radius: 4px;
        padding: 0 20px;

        color: #fff;
        font-size: 16px;
        font-weight: bold;
        line-height: 42px;
        background: #d44059;
      }
    }
  }
`;
