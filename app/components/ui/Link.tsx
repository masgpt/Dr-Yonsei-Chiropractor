'use client';

import React from 'react';
import NextLink from 'next/link';
import { useTranslation } from 'react-i18next';

interface CustomLinkProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  [key: string]: any;
}

const Link: React.FC<CustomLinkProps> = ({
  children,
  to,
  href,
  external = false,
  className = '',
  onClick,
  ...props
}) => {
  const { t } = useTranslation();
  const baseStyles = 'transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:rounded-sm';
  
  const targetPath = href || to || '';

  if (external || targetPath.startsWith('http') || targetPath.startsWith('mailto:') || targetPath.startsWith('tel:')) {
    return (
      <a
        href={targetPath}
        className={`${baseStyles} ${className}`}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        {...props}
      >
        {children}
        {external && (
          <span className="sr-only"> {t('accessibility.opensInNewWindow')}</span>
        )}
      </a>
    );
  }

  return (
    <NextLink
      href={targetPath}
      className={`${baseStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
