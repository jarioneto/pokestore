import styled from 'styled-components';

// Styles
import themeDefault from 'core/styles/theme/main';
import breakpoints from 'core/styles/breakpoints';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme?.colors?.primary.main ?? themeDefault.colors.primary.main};

  > div {
    padding: 0 10%;
  }

  @media (max-width: ${breakpoints.sm}px) {
    > div {
      padding: 0;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  width: 100%;
  height: 70px;
`;
