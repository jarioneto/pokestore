import React from 'react';

// Types
import { ICartItem } from 'core/types/cart';

// Components
import Button from '../Button';

// Utils
import parsePrice from 'core/utils/parsePrice';

// Styles
import { Container, Quantity, Description, Action, Photo } from './styles';

// Assets
import { ReactComponent as TrashIcon } from 'core/assets/images/trash.svg';

interface IProps {
  item: ICartItem;
  onDelete: (id: number) => void;
}

const CartItem: React.FC<IProps> = ({ item, onDelete }) => {
  const { product, quantity } = item;

  return (
    <Container data-testid="cart-item">
      <Photo src={product.image} alt={product.name} />
      <Quantity>x {quantity}</Quantity>
      <Description>
        <h6>{product.name}</h6>
        <span>{parsePrice(product.price)}</span>
      </Description>
      <Action>
        <Button onClick={() => onDelete(product.id)}>
          <TrashIcon />
        </Button>
      </Action>
    </Container>
  );
};

export default CartItem;
