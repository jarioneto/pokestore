import React from 'react';

// Types
import { IVariant } from 'core/types/variant';

// Components
import Product from '../Product';
import Loader from '../Loader';

// Third party
import InfiniteScroll from 'react-infinite-scroller';

// Hooks
import useCatalog from 'core/hooks/useCatalog';

// Styles
import { Container } from './styles';

const Catalog: React.FC<IVariant> = ({ variant = 'default' }) => {
  const { products, getProducts, hasNextPage } = useCatalog();

  return (
    <Container data-testid="catalog">
      <InfiniteScroll
        hasMore={hasNextPage}
        loadMore={getProducts}
        initialLoad
        loader={<Loader key={0} />}
      >
        {products.map((product) => (
          <Product key={product.id} variant={variant} product={product} />
        ))}
      </InfiniteScroll>
    </Container>
  );
};

export default Catalog;
