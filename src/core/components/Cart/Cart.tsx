import React, { useState } from 'react';

// Components
import Button from '../Button';
import CartItem from '../CartItem';
import EmptyCart from '../EmptyCart';
import Modal from '../Modal';

// Hooks
import useCart from 'core/hooks/useCart';

// Utils
import parsePrice from 'core/utils/parsePrice';

// Styles
import { Container, Content, Footer, Header } from './styles';

const Cart: React.FC = () => {
  const { items, amount, removeItem, removeAll } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleFinish = () => {
    window.scrollTo(0, 0);

    setShowModal(true);
    removeAll();
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const renderItems = () => {
    return items.map((item) => (
      <CartItem key={item.product.id} item={item} onDelete={removeItem} />
    ));
  };

  return (
    <Container>
      <Header>
        <h5>Carrinho</h5>
      </Header>
      <Content>{items.length ? renderItems() : <EmptyCart />}</Content>
      <Footer>
        <h6>Total</h6>
        <span>{parsePrice(amount)}</span>
        <Button onClick={handleFinish}>Finalizar</Button>
      </Footer>
      {showModal && <Modal onClose={handleClose} />}
    </Container>
  );
};

export default Cart;
