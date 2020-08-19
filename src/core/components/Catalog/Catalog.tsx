import React from 'react';

// Components
import Product from '../Product';
import Loader from '../Loader';

// Third party
import InfiniteScroll from 'react-infinite-scroller';

// Hooks
import useCatalog from 'core/hooks/useCatalog';

// Styles
import { Container } from './styles';

const Catalog: React.FC = () => {
  const { products, getProducts, hasNextPage } = useCatalog();

  return (
    <Container>
      <InfiniteScroll
        hasMore={hasNextPage}
        loadMore={getProducts}
        initialLoad
        loader={<Loader key={0} />}
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </InfiniteScroll>
    </Container>
  );
};

export default Catalog;
