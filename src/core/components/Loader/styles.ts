import styled from 'styled-components';

// Theme
import themeDefault from 'core/styles/theme/main';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;

  > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 45px;
    height: 45px;
    border: 4px solid
      ${({ theme }) => theme?.colors?.primary.main ?? themeDefault.colors.primary.main};
    border-radius: 50%;
    animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme?.colors?.primary.main ?? themeDefault.colors.primary.main}
      transparent transparent transparent;
  }

  > div:nth-child(1) {
    animation-delay: -0.45s;
  }

  > div:nth-child(2) {
    animation-delay: -0.3s;
  }

  > div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
