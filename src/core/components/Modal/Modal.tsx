import React, { useEffect } from 'react';

// Components
import Button from '../Button';

// Styles
import { Container, Content } from './styles';

// Assets
import { ReactComponent as Eggs } from 'core/assets/images/eggs.svg';

interface IProps {
  onClose: () => void;
}

const Modal: React.FC<IProps> = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Container>
      <Content role="alert">
        <Eggs />
        <h6>Compra finalizada!</h6>
        <p>Seus Pokémon estão a caminho, prepare-se para desfrutar de grandes batalhas!</p>
        <Button onClick={onClose}>Fechar</Button>
      </Content>
    </Container>
  );
};

export default Modal;
