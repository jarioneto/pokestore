import { useContext } from 'react';

// Types
import { IProduct } from 'core/types/product';
import { ICatalog } from 'core/types/catalog';

// Context
import StoreContext from 'core/contexts/StoreContext';

interface IUseCatalog {
  products: IProduct[];
  hasNextPage: boolean;
  getProducts: (page?: number) => void;
  searchProduct: (product: string) => void;
}

const useCatalog = (): IUseCatalog => {
  const offset = 16;

  const { catalog, setCatalog } = useContext(StoreContext.Context);
  const { items, currentItems, filter, page, hasNextPage } = catalog;

  const getProducts = () => {
    if (!hasNextPage) {
      return;
    }

    const initOffset = (page - 1) * offset;
    const lastOffset = page * offset - 1;

    const currentCatalog = filter ? filterCatalog(filter) : items;

    const parcialProducts = currentCatalog.slice(initOffset, lastOffset);
    const hasNextProducts = lastOffset <= currentCatalog.length;

    const catalogFilter: ICatalog = {
      ...catalog,
      currentItems: [...currentItems, ...parcialProducts],
      page: page + 1,
      hasNextPage: hasNextProducts
    };

    setCatalog(catalogFilter);
  };

  const searchProduct = (product: string) => {
    let filterItems: IProduct[] = [];

    if (product) {
      filterItems = filterCatalog(product).slice(0, 15);
    } else {
      filterItems = items.slice(0, 15);
    }

    const catalogFilter: ICatalog = {
      ...catalog,
      currentItems: filterItems,
      filter: product,
      page: 2,
      hasNextPage: true
    };

    setCatalog(catalogFilter);
  };

  const filterCatalog = (term: string): IProduct[] => {
    return catalog.items.filter((item) =>
      item.name.toLocaleUpperCase().includes(term.toLocaleUpperCase())
    );
  };

  return { products: currentItems, hasNextPage, getProducts, searchProduct };
};

export default useCatalog;
