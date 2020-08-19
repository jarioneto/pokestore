import styled from 'styled-components';

// Styles
import themeDefault from 'core/styles/theme/main';
import breakpoints from 'core/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 45px;
  width: 80%;
  border-radius: 10px;
  background: ${({ theme }) =>
    theme?.colors?.primary?.contrast ?? themeDefault.colors.primary.contrast};

  input {
    width: 80%;
    border: none;
    background: transparent;
    padding: 0 10px;
    height: 40px;
    font-size: 16px;
    color: ${({ theme }) => theme?.colors?.typograph?.dark ?? themeDefault.colors.typograph.dark};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme?.colors?.typograph?.main ?? themeDefault.colors.typograph.main};
    }
  }

  button {
    width: 10%;
    height: 40px;
    padding: 5px;
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;

    > svg {
      path,
      line {
        stroke: ${({ theme }) => theme?.colors?.primary?.main ?? themeDefault.colors.primary.main};
      }
    }
  }

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;

    button {
      width: 20%;

      > svg {
        height: 22px;
      }
    }
  }
`;
