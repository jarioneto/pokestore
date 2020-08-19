import styled from 'styled-components';

// Styles
import themeDefault from 'core/styles/theme/main';

export const Container = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  padding: 10px 5px;
  border-bottom: solid 1px
    ${({ theme }) => theme?.colors?.typograph.light ?? themeDefault.colors.typograph.light};
`;

export const Photo = styled.img`
  flex: 0.2;
  height: 50px;
`;

export const Quantity = styled.div`
  flex: 0.2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.div`
  flex: 0.45;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h6 {
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    text-transform: capitalize;
    color: ${({ theme }) => theme?.colors?.typograph.main ?? themeDefault.colors.typograph.main};
  }

  > span {
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme?.colors?.typograph.dark ?? themeDefault.colors.typograph.dark};
  }
`;

export const Action = styled.div`
  flex: 0.1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    padding: 2px 8px;
    transition: background-color 0.7s;
    background: ${({ theme }) =>
      theme?.colors?.secondary.light ?? themeDefault.colors.secondary.light};

    color: ${({ theme }) => theme?.colors?.secondary.dark ?? themeDefault.colors.secondary.dark};
  }
`;
