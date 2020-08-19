import React from 'react';

// RTL
import { render } from '@testing-library/react';

// Components
import Loader from './Loader';

const renderComponent = () => render(<Loader />);

describe('Loader component', () => {
  test('Should render the component', () => {
    const { container } = renderComponent();

    expect(container).toBeDefined();
  });
});
