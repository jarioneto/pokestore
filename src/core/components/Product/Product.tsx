import React, { useState } from 'react';

// Components
import Badge from '../Badge';
import Button from '../Button';

// Hooks
import useCart from 'core/hooks/useCart';

// Utils
import parsePrice from 'core/utils/parsePrice';

// Styles
import { Container, Header, Description, Photo, Footer } from './styles';

// Assets
import { ReactComponent as FavoriteIcon } from 'core/assets/images/favorite.svg';

// Types
import { IProduct } from 'core/types/product';

interface IProps {
  product: IProduct;
}

const Product: React.FC<IProps> = ({ product }) => {
  const { image, name, price, discount } = product;

  const { addItem } = useCart();

  const [favorite, setFavorite] = useState(false);

  const toggleFavrite = () => {
    setFavorite(!favorite);
  };

  return (
    <Container>
      <Header>
        <FavoriteIcon role="button" data-favorite={favorite} onClick={toggleFavrite} />
        {!!discount && <Badge>{discount}% OFF</Badge>}
      </Header>
      <Photo src={image} alt={name} title={name} />
      <Description>
        <h6>{name}</h6>
        <span>{parsePrice(price)}</span>
      </Description>
      <Footer>
        <Button onClick={() => addItem(product)}>Comprar</Button>
      </Footer>
    </Container>
  );
};

export default Product;
