import styled from 'styled-components';

// Styles
import themeDefault from 'core/styles/theme/main';

export const ButtonBase = styled.button.attrs((props) => ({
  type: 'button',
  ...props
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme?.colors?.primary.main ?? themeDefault.colors.primary.main};
  color: ${({ theme }) => theme?.colors?.primary.contrast ?? themeDefault.colors.primary.contrast};
  height: 35px;
  padding: 2px 17px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.7s;
  -webkit-font-smoothing: subpixel-antialiased;
  backface-visibility: hidden;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    cursor: wait;
  }
`;
