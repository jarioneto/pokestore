import styled from 'styled-components';

// Types
import { IVariant } from 'core/types/variant';

// Styles
import themeDefault from 'core/styles/theme/main';
import breakpoints from 'core/styles/breakpoints';

interface IProps extends IVariant {
  showCart: boolean;
}

export const Container = styled.div<IProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 20px;
  width: 100%;
  height: calc(100vh - 150px);
  max-height: 600px;
  padding: 10px 15px 15px 15px;
  border-radius: ${({ variant }) => (variant !== 'retro' ? '10px' : 'unset')};
  background: #fff;
  animation: ${({ showCart }) =>
    showCart ? 'showIn 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both' : 'unset'};

  @media (max-width: ${breakpoints.md}px) {
    display: ${({ showCart }) => (showCart ? 'flex' : 'none')};
  }

  @keyframes showIn {
    0% {
      transform: scale(0.5);
      transform-origin: 50% 0%;
      will-change: transform;
    }
    100% {
      transform: scale(1);
      transform-origin: 50% 0%;
      will-change: transform;
    }
  }
`;

export const Header = styled.div`
  flex: 0.1;
  display: flex;
  flex-direction: column;

  > h5 {
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.3px;
    color: ${({ theme }) => theme?.colors?.typograph.dark ?? themeDefault.colors.typograph.dark};
  }
`;

export const Content = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  padding-right: 5px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #eeeee #fff;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #eeeeee;
    border-radius: 5px;
  }
`;

export const Footer = styled.div`
  flex: 0.2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-top: 10px;

  > h6 {
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    color: ${({ theme }) => theme?.colors?.typograph.main ?? themeDefault.colors.typograph.main};
  }

  > span {
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    color: ${({ theme }) => theme?.colors?.typograph.dark ?? themeDefault.colors.typograph.dark};
  }

  > button {
    margin-top: 25px;
  }

  > button[disabled='true'] {
    background: ${({ theme }) =>
      theme?.colors?.secondary.light ?? themeDefault.colors.secondary.light};

    color: ${({ theme }) => theme?.colors?.secondary.main ?? themeDefault.colors.secondary.main};
  }
`;

export const CartIcon = styled.div`
  opacity: 0;
  cursor: pointer;

  > svg {
    width: 35px;
    height: 40px;
  }

  @media (max-width: ${breakpoints.md}px) {
    position: fixed;
    top: 15px;
    right: 4%;
    opacity: 1;
  }
`;
