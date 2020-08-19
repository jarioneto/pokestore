import styled from 'styled-components';

// Styles
import themeDefault from 'core/styles/theme/main';

export const BadgeBase = styled.span`
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 22px;
  padding: 3px 8px;
  border-radius: 15px;
  font-size: 12px;
  background: ${({ theme }) =>
    theme?.colors?.secondary?.light ?? themeDefault.colors.secondary.light};

  color: ${({ theme }) =>
    theme?.colors?.secondary?.contrast ?? themeDefault.colors.secondary.contrast};
`;
