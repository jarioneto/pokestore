import React from 'react';

// Styles
import { Container } from './styles';

interface IProps {
  image: string;
  name: string;
}

const Logo: React.FC<IProps> = ({ image, name }) => {
  return (
    <Container>
      <img src={image} alt={name} title={name} />
      <h2>{name}</h2>
    </Container>
  );
};

export default Logo;
