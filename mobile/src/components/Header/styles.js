import styled from 'styled-components/native';
import LogoImage from '~/assets/img/logo.png';

export const Container = styled.View`
  height: 64px;

  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.3);
`;

export const Logo = styled.Image.attrs({
  source: LogoImage,
})`
  width: 23px;
  height: 24px;
`;
