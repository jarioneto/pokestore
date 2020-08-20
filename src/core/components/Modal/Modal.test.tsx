import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import Modal from './Modal';

const defaultProps = {
  onClose: jest.fn()
};

const renderComponent = (props = defaultProps) => render(<Modal {...props} />);

describe('Modal component', () => {
  test('Should render the component', () => {
    renderComponent();

    expect(screen.getByRole('heading', { name: /compra finalizada/i })).toBeInTheDocument();
    expect(screen.getByText(/seus pokémon estão a caminho/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /fechar/i })).toBeInTheDocument();
  });

  test('Should close modal when click', () => {
    renderComponent();

    const buttonClose = screen.getByRole('button', { name: /fechar/i });
    userEvent.click(buttonClose);

    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
