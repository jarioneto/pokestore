import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';

// Components
import Button from './Button';

const defaultProps = {
  icon: ''
};

const renderComponent = (props = defaultProps) => render(<Button {...props}>Cancel</Button>);

describe('Button component', () => {
  test('Should render the component', () => {
    renderComponent();

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/cancel/i)).toBeInTheDocument();
  });
});
