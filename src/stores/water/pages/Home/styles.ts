import styled from 'styled-components';

// Styles
import breakpoints from 'core/styles/breakpoints';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr;
  min-height: 100vh;
  backface-visibility: hidden;
  perspective: 1000;
  animation: fade 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;

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
  display: grid;
  grid-template-columns: 9fr 4fr;
  column-gap: 40px;
  padding: 0 10%;
  margin: 50px 0;

  @media (max-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: ${breakpoints.sm}px) {
    > div:nth-child(2) {
      grid-row-start: 1;
      order: 1;
      position: unset;
      margin-bottom: 25px;
    }
  }
`;
