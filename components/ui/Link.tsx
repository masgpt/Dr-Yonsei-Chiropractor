import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface CustomLinkProps extends Omit<RouterLinkProps, 'to'> {
  to?: string;
  href?: string;
  external?: boolean;
  className?: string;
}

const Link: React.FC<CustomLinkProps> = ({
  children,
  to,
  href,
  external = false,
  className = '',
  ...props
}) => {
  const { t } = useTranslation();
  const baseStyles = 'transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:rounded-sm';
  
  if (external || href) {
    return (
      <a
        href={href || to}
        className={`${baseStyles} ${className}`}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
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
    <RouterLink
      to={to || ''}
      className={`${baseStyles} ${className}`}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
