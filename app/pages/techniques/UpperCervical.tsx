import React from 'react';
import { useViewport } from '../../hooks/useViewport';
import UpperCervicalDesktop from './UpperCervical/Desktop/UpperCervical.desktop';
import UpperCervicalMobile from './UpperCervical/Mobile/UpperCervical.mobile';

const UpperCervical: React.FC = () => {
  const { isMobile } = useViewport();

  return isMobile ? <UpperCervicalMobile /> : <UpperCervicalDesktop />;
};

export default UpperCervical;
