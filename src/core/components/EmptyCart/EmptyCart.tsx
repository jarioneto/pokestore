import React from 'react';

// Styles
import { Container } from './styles';

// Assets
import { ReactComponent as Empty } from 'core/assets/images/empty-cart.svg';

const EmptyCart: React.FC = () => {
  return (
    <Container>
      <Empty />
      <h6>Carrinho vazio</h6>
    </Container>
  );
};

export default EmptyCart;
