import React from 'react';

// RTL
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Components
import Catalog from './Catalog';

// Mocks
import MockedStoreProvider, {
  mockedContextValue
} from '../../../../__mocks__/providers/MockedStoreProvider';

import { mockProducts } from '../../../../__mocks__/data/catalog';

// Inifinite scroll Mock
jest.mock('react-infinite-scroller', () => ({ loadMore, children }: any) => {
  global.addEventListener('scroll', () => loadMore());

  return <div>{children}</div>;
});

const defaultProps = {
  value: {
    ...mockedContextValue,
    catalog: {
      ...mockedContextValue.catalog,
      items: mockProducts,
      currentItems: mockProducts.slice(0, 15)
    }
  }
};

const renderComponent = (props = defaultProps) =>
  render(
    <MockedStoreProvider {...props}>
      <Catalog />
    </MockedStoreProvider>
  );

describe('Catalog component', () => {
  test('Should render the componet', async () => {
    renderComponent();

    const catalog = await screen.findByTestId('catalog');

    expect(catalog.firstChild?.childNodes).toHaveLength(15);
  });

  test('Should be able fetch more products', async () => {
    renderComponent();

    const catalog = await screen.findByTestId('catalog');

    expect(catalog.firstChild?.childNodes).toHaveLength(15);

    fireEvent.scroll(global.window, { target: { scrollY: 800 } });

    await waitFor(() => {
      expect(catalog.firstChild?.childNodes).toHaveLength(30);
    });
  });
});
