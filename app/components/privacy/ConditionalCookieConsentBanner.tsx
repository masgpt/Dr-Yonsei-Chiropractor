'use client'

import { usePathname } from 'next/navigation'
import { CookieConsentBanner } from './CookieConsentBanner'

/**
 * Conditionally renders the CookieConsentBanner based on the current pathname.
 * Excludes the banner from meeting booking pages (/meet/*).
 */
export function ConditionalCookieConsentBanner() {
  const pathname = usePathname()
  
  // Don't show banner on meeting booking pages
  if (pathname?.startsWith('/meet/')) {
    return null
  }

  // Don't show banner on script reader pages (includes car view mode)
  if (pathname?.startsWith('/tools/script-reader')) {
    return null
  }
  
  return <CookieConsentBanner />
}
