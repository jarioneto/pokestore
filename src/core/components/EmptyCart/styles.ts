import styled from 'styled-components';

// Styles
import themeDefault from 'core/styles/theme/main';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  > svg {
    height: 100px;
  }

  > h6 {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    margin-left: -20px;
    color: ${({ theme }) => theme?.colors?.typograph?.main ?? themeDefault.colors.typograph.main};
  }
`;
