import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';

// Components
import Badge from './Badge';

describe('Badge component', () => {
  test('Should render the component', () => {
    const { container } = render(<Badge>Red</Badge>);

    expect(container).toBeInTheDocument();
    expect(screen.getByText(/red/i)).toBeInTheDocument();
  });
});
