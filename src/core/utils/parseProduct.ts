// Types
import { IProduct } from 'core/types/product';

// Assets
import noAvatar from 'core/assets/images/no-avatar.png';

const pokemonAssets = process.env.REACT_APP_POKEMON_ASSETS;

const parseProduct = (product: any): IProduct => {
  let productId;
  let productImage;

  productId = product?.pokemon?.url?.split?.('pokemon')?.pop?.()?.replace?.(/\//g, '');
  productId = parseInt(productId, 10);

  if (productId < 900) {
    const filledId = String(productId).padStart(3, '0');

    productImage = `${pokemonAssets}${filledId}.png`;
  } else {
    productImage = noAvatar;
  }

  const productName = product?.pokemon?.name;
  const productPrice = productId < 9 ? productId * 10 : productId;
  const productDiscount = Math.floor(Math.random() * 10) + 1;

  const parsedProduct: IProduct = {
    id: productId,
    name: productName,
    image: productImage,
    price: productPrice,
    discount: productDiscount
  };

  return parsedProduct;
};

export default parseProduct;
