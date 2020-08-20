import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';

// Components
import Logo from './Logo';

// Assets
import logo from 'core/assets/images/no-avatar.png';

describe('Logo component', () => {
  test('Should render the component', () => {
    render(<Logo image={logo} name="PokéStore" />);

    expect(screen.getByRole('img', { name: /pokéstore/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /pokéstore/i })).toBeInTheDocument();
  });
});
