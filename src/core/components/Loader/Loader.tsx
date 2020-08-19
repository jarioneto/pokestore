import React from 'react';

// Styles
import { Container } from './styles';

const Loader: React.FC = () => {
  return (
    <Container data-testid="loader">
      <div />
      <div />
      <div />
    </Container>
  );
};

export default Loader;
