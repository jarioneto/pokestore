import React, { ButtonHTMLAttributes } from 'react';

// Styles
import { ButtonBase } from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ElementType | string;
}

const Button: React.FC<IProps> = ({ icon, children, ...restProps }) => {
  return (
    <ButtonBase {...restProps}>
      {icon}
      {children}
    </ButtonBase>
  );
};

Button.defaultProps = {
  icon: ''
} as Partial<IProps>;

export default Button;
