"use client";

import React from 'react';

const SkipToContent: React.FC<{ lng: string }> = ({ lng }) => {
  const label = lng === 'ko' ? '본문 바로가기' : 'Skip to content';

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      {label}
    </a>
  );
};

export default SkipToContent;
