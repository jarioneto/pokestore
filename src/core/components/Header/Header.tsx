import React from 'react';

// Components
import Logo from '../Logo';
import Search from '../Search';

// Styles
import { Container, Content } from './styles';

interface IProps {
  storeLogo: string;
  storeName: string;
  searchPlaceholder: string;
}

const Header: React.FC<IProps> = ({ storeLogo, storeName, searchPlaceholder }) => {
  return (
    <Container>
      <Content>
        <Logo image={storeLogo} name={storeName} />
        <Search placeholder={searchPlaceholder} />
      </Content>
    </Container>
  );
};

export default Header;
