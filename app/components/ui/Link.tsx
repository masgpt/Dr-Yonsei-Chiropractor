'use client';

import React, { useMemo, useState } from 'react';
import NextLink from 'next/link';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import Modal from './Modal';

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
  const { t, i18n } = useTranslation();
  const params = useParams();
  const currentLng = (params?.lng as string) || i18n.language || 'en';
  const [isEmailPickerOpen, setIsEmailPickerOpen] = useState(false);
  const baseStyles = 'transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:rounded-sm';
  
  let targetPath = href || to || '';
  const isMailtoFromToProp = !!to && targetPath.startsWith('mailto:');
  const isKorean = (currentLng || '').toLowerCase().startsWith('ko');

  const isExternal = external || targetPath.startsWith('http') || targetPath.startsWith('mailto:') || targetPath.startsWith('tel:');
  const gmailComposeLink = useMemo(() => {
    if (!targetPath.startsWith('mailto:')) return '';
    const emailOnly = targetPath.replace(/^mailto:/, '').split('?')[0];
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailOnly)}`;
  }, [targetPath]);

  const openDefaultEmail = () => {
    if (typeof window === 'undefined') return;
    window.location.href = targetPath;
    setIsEmailPickerOpen(false);
  };

  const openGmail = () => {
    if (typeof window === 'undefined' || !gmailComposeLink) return;
    window.open(gmailComposeLink, '_blank', 'noopener,noreferrer');
    setIsEmailPickerOpen(false);
  };

  const handleMailtoClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    e.preventDefault();
    setIsEmailPickerOpen(true);
  };

  if (isExternal) {
    return (
      <>
        <a
          href={targetPath}
          className={`${baseStyles} ${className}`}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          onClick={isMailtoFromToProp ? handleMailtoClick : onClick}
          {...props}
        >
          {children}
          {external && (
            <span className="sr-only"> {t('accessibility.opensInNewWindow')}</span>
          )}
        </a>
        {isMailtoFromToProp && (
          <Modal
            isOpen={isEmailPickerOpen}
            onClose={() => setIsEmailPickerOpen(false)}
            title={
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                {isKorean ? '이메일 앱 선택' : 'Choose Email App'}
              </h2>
            }
          >
            <div className="space-y-3">
              <button
                type="button"
                onClick={openDefaultEmail}
                className="w-full h-12 rounded-xl bg-primary text-white font-bold hover:bg-orange-600 transition-colors"
              >
                {isKorean ? '기본 이메일 앱' : 'Default Email App'}
              </button>
              <button
                type="button"
                onClick={openGmail}
                className="w-full h-12 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Gmail
              </button>
            </div>
          </Modal>
        )}
      </>
    );
  }

  // Prepend language prefix for internal links if not already present
  if (targetPath.startsWith('/')) {
    const segments = targetPath.split('/');
    const firstSegment = segments[1];
    if (!['en', 'ko'].includes(firstSegment)) {
      // Avoid double slashes
      const cleanPath = targetPath === '/' ? '' : targetPath;
      targetPath = `/${currentLng}${cleanPath}`;
    }
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
