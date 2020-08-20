import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import CartItem from './CartItem';

const defaultProps = {
  item: {
    product: {
      id: 37,
      name: 'vulpix',
      image: '037.png',
      price: 37,
      discount: 1
    },
    quantity: 1
  },
  onDelete: jest.fn()
};

const renderComponent = (props = defaultProps) => render(<CartItem {...props} />);

describe('CartItem component', () => {
  test('Should render the componet', async () => {
    renderComponent();

    expect(screen.getByRole('img', { name: /vulpix/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /vulpix/i })).toBeInTheDocument();

    expect(screen.getByText('R$ 37.00')).toBeInTheDocument();
    expect(screen.getByText('x 1')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /trash/i })).toBeInTheDocument();
  });

  test('Should remove item on click ', async () => {
    renderComponent();

    const buttonDelete = screen.getByRole('button', { name: /trash/i });
    userEvent.click(buttonDelete);

    expect(defaultProps.onDelete).toBeCalledWith(37);
  });
});
