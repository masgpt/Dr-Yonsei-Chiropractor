'use client';

import React from 'react';
import { useViewport } from '../hooks/useViewport';
import NavbarDesktop from './Navbar/Desktop/Navbar.desktop';
import NavbarMobile from './Navbar/Mobile/Navbar.mobile';

const Navbar: React.FC = () => {
  const { isMobile } = useViewport();

  return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
};

export default Navbar;