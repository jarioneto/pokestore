import React, { useState } from 'react';

// Types
import { IVariant } from 'core/types/variant';

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
import { Container, Content, Footer, Header, CartIcon } from './styles';

// Assets
import { ReactComponent as Bag } from 'core/assets/images/bag.svg';

const Cart: React.FC<IVariant> = ({ variant = 'default' }) => {
  const { items, amount, removeItem, removeAll } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const hasItems = !!items.length;

  const handleFinish = () => {
    window.scrollTo(0, 0);

    setShowModal(true);
    removeAll();
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const toggleShowCart = () => {
    setShowCart(!showCart);
  };

  const renderItems = () => {
    return items.map((item) => (
      <CartItem key={item.product.id} item={item} onDelete={removeItem} />
    ));
  };

  return (
    <>
      <Container variant={variant} showCart={showCart} data-testid="cart">
        <Header>
          <h5>Carrinho</h5>
        </Header>
        <Content>{items.length ? renderItems() : <EmptyCart />}</Content>
        <Footer>
          <h6>Total</h6>
          <span>{parsePrice(amount)}</span>
          <Button disabled={!hasItems} onClick={handleFinish}>
            Finalizar
          </Button>
        </Footer>
        {showModal && <Modal onClose={handleClose} />}
      </Container>
      <CartIcon onClick={toggleShowCart}>
        <Bag />
      </CartIcon>
    </>
  );
};

export default Cart;
