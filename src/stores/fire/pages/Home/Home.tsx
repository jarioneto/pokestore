import React, { useState, useEffect, useContext } from 'react';

// Types
import { ICatalog } from 'core/types/catalog';

// Components
import Header from 'core/components/Header';
import Catalog from 'core/components/Catalog';
import Cart from 'core/components/Cart';

// Context
import StoreContext from 'core/contexts/StoreContext';

// Services
import { fetchProducts } from 'core/services/api';

// Utils
import parseProduct from 'core/utils/parseProduct';

// Styles
import { Container, Content } from './styles';

// Assets
import logo from 'stores/fire/assets/images/logo.png';

const Home: React.FC = () => {
  const { setCatalog } = useContext(StoreContext.Context);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchProducts('fire').then(({ data }) => {
      const products = data.pokemon;

      const parsedProducts = products.map((product: any) => parseProduct(product));

      const catalog: ICatalog = {
        items: parsedProducts,
        currentItems: [],
        filter: '',
        page: 1,
        hasNextPage: true
      };

      setCatalog(catalog);
      setLoading(false);
    });
  }, [setCatalog]);

  return (
    <Container>
      <Header storeLogo={logo} storeName="PokéStore" searchPlaceholder="o que você procura" />
      {!loading && (
        <Content>
          <Catalog />
          <Cart />
        </Content>
      )}
    </Container>
  );
};

export default Home;
