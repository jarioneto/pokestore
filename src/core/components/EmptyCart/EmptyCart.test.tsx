import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';

// Components
import EmptyCart from './EmptyCart';

describe('EmptyCart component', () => {
  test('Should render the component', () => {
    const { container } = render(<EmptyCart />);

    expect(container).toBeInTheDocument();
    expect(screen.getByText(/carrinho vazio/i)).toBeInTheDocument();
  });
});
