import React from 'react';
import { useViewport } from '../../hooks/useViewport';
import CarAccidentDesktop from './CarAccident/Desktop/CarAccident.desktop';
import CarAccidentMobile from './CarAccident/Mobile/CarAccident.mobile';

const CarAccident: React.FC = () => {
  const { isMobile } = useViewport();

  return isMobile ? <CarAccidentMobile /> : <CarAccidentDesktop />;
};

export default CarAccident;
