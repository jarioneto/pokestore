import styled from 'styled-components';

// Styles
import themeDefault from 'core/styles/theme/main';
import breakpoints from 'core/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  animation: fade 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes fade {
    0% {
      transform: translate3d(0, 0, 0);
      transform: translateZ(0);
      opacity: 0.5;
      will-change: transform;
    }
    100% {
      transform: translate3d(0, 0, 0);
      transform: translateZ(0);
      opacity: 1;
      will-change: transform;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  max-width: 85%;
  padding: 15px;
  background: ${({ theme }) => theme?.colors?.primary?.main ?? themeDefault.colors.primary.main};
  color: ${({ theme }) => theme?.colors?.primary?.contrast ?? themeDefault.colors.primary.contrast};
  border-radius: 20px;
  animation: scale 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  > * {
    margin-bottom: 25px;
  }

  svg {
    height: 120px;
    max-width: 90%;
  }

  h6 {
    font-size: 25px;
    font-weight: 400;
  }

  p {
    font-size: 14px;
    text-align: center;
    font-weight: 300;
    max-width: 80%;
  }

  button {
    width: 200px;
    height: 40px;
    background: ${({ theme }) =>
      theme?.colors?.primary?.contrast ?? themeDefault.colors.primary.contrast};

    color: ${({ theme }) => theme?.colors?.typograph?.dark ?? themeDefault.colors.typograph.dark};
  }

  @media (max-width: ${breakpoints.sm}px) {
    > p {
      max-width: 100%;
    }
  }

  @keyframes scale {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
