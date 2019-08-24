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
  }

  > .list {
    display: flex;
    flex-direction: column;

    > li {
      > a {
        height: 62px;
        padding: 0 30px;
        border-radius: 4px;
        margin-bottom: 10px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background: rgba(0, 0, 0, 0.1);
        > .description {
          color: #fff;
          font-size: 18px;
          font-weight: bold;
        }

        > .date {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
`;
