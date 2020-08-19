import styled from 'styled-components';

// Styles
import themeDefault from 'core/styles/theme/main';
import breakpoints from 'core/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: 40px;
    max-width: 100%;
    margin-right: 10px;
  }

  > h2 {
    color: ${({ theme }) =>
      theme?.colors?.primary?.contrast ?? themeDefault.colors.primary.contrast};
  }

  @media (max-width: ${breakpoints.sm}px) {
    > h2 {
      display: none;
    }
  }
`;
