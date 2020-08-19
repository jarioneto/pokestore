import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  test('Should execute function on click', () => {
    const props = {
      ...defaultProps,
      onClick: jest.fn()
    };

    renderComponent(props);

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(props.onClick).toHaveBeenCalled();
  });
});
