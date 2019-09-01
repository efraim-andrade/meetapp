import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  border-radius: 5px;
  margin-bottom: 30px;

  cursor: pointer;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);

  &:hover {
    opacity: 0.7;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    cursor: pointer;

    img {
      width: 100%;
      height: 100%;

      background: #eee;
      object-fit: cover;
    }

    .placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      > svg {
        margin-bottom: 10px;
        color: rgba(255, 255, 255, 0.3);
      }

      > p {
        font-size: 20px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.3);
      }
    }

    input {
      display: none;
    }
  }
`;
