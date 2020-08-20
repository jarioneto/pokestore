import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';

// Components
import Header from './Header';

// Assets
import logo from 'core/assets/images/no-avatar.png';

// Mocks
import MockedStoreProvider from '../../../../__mocks__/providers/MockedStoreProvider';

const defaultProps = {
  storeLogo: logo,
  storeName: 'PokéStore',
  searchPlaceholder: 'Pesquisar'
};

const renderComponent = (props = defaultProps) =>
  render(
    <MockedStoreProvider>
      <Header {...props} />
    </MockedStoreProvider>
  );

describe('Header component', () => {
  test('Should render the componet', async () => {
    renderComponent();

    expect(screen.getByRole('img', { name: /pokéstore/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /pokéstore/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });
});
