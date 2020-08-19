import styled from 'styled-components';

// Styles
import themeDefault from 'core/styles/theme/main';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 330px;
  width: 100%;
  padding: 10px 15px 15px 15px;
  border-radius: 10px;
  background: #fff;
  transition: transform 0.7s;
  backface-visibility: hidden;
  perspective: 1000;

  * > button {
    transition: background-color 0.7s;
    background: ${({ theme }) =>
      theme?.colors?.secondary.light ?? themeDefault.colors.secondary.light};

    color: ${({ theme }) => theme?.colors?.secondary.dark ?? themeDefault.colors.secondary.dark};
  }

  &:hover {
    transform: perspective(1px) scale(1.03);

    * > button {
      background: ${({ theme }) => theme?.colors?.primary.main ?? themeDefault.colors.primary.main};

      color: ${({ theme }) =>
        theme?.colors?.primary.contrast ?? themeDefault.colors.primary.contrast};
    }
  }
`;

export const Header = styled.div`
  flex: 0.1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;

  > svg {
    cursor: pointer;
    height: 20px;

    &:hover {
      path {
        stroke: ${({ theme }) => theme?.colors?.primary.main ?? themeDefault.colors.primary.main};
      }
    }
  }

  > svg[data-favorite='true'] {
    path {
      fill: ${({ theme }) => theme?.colors?.primary.main ?? themeDefault.colors.primary.main};
      stroke: ${({ theme }) => theme?.colors?.primary.main ?? themeDefault.colors.primary.main};
    }
  }
`;

export const Photo = styled.img`
  flex: 0.35;
  height: 110px;
`;

export const Description = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 50px;

  h6 {
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    text-transform: capitalize;
    color: ${({ theme }) => theme?.colors?.typograph.main ?? themeDefault.colors.typograph.main};
  }

  span {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme?.colors?.typograph.dark ?? themeDefault.colors.typograph.dark};
  }
`;

export const Footer = styled.div`
  flex: 0.15;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
`;
