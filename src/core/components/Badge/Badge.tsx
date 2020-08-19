import React from 'react';

// Styles
import { BadgeBase } from './styles';

const Badge: React.FC = ({ children }) => {
  return <BadgeBase>{children}</BadgeBase>;
};

export default Badge;
