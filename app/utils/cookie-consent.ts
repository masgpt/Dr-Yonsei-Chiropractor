import i18n, { persistLanguagePreference, clearLanguagePreference } from '@/i18n'

const STORAGE_KEY = 'consent_preferences'
const COOKIE_NAME = 'consent_preferences'
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365

type ConsentDecision = 'accepted' | 'rejected' | 'custom' | null

type ThemePreference = 'light' | 'dark' | 'system'

interface ConsentCategories {
  analytics: boolean
  marketing: boolean
  preferences: boolean
  location: boolean
}

interface ConsentState {
  decision: ConsentDecision
  categories: ConsentCategories
  themePreference: ThemePreference
  updatedAt: number
}

export type CookieConsent = {
  analytics: boolean
  marketing: boolean
  location: boolean
  hasChoice: boolean
}

const createDefaultState = (): ConsentState => {
  const gpc = typeof window !== 'undefined' && (window.navigator as any).globalPrivacyControl === true
  return {
    decision: gpc ? 'rejected' : null,
    categories: {
      analytics: false,
      marketing: false,
      preferences: false,
      location: false,
    },
    themePreference: 'system',
    updatedAt: Date.now(),
  }
}

const DEFAULT_CONSENT: CookieConsent = {
  analytics: false,
  marketing: false,
  location: false,
  hasChoice: false,
}

const isClient = typeof window !== 'undefined'

const dispatchConsentEvent = (detail: CookieConsent | null) => {
  if (!isClient) return
  const event = new CustomEvent('cookie-consent-changed', { detail })
  window.dispatchEvent(event)
}

const syncLanguagePreference = (analyticsEnabled: boolean) => {
  if (analyticsEnabled) {
    persistLanguagePreference(i18n.language)
  } else {
    clearLanguagePreference()
  }
}

const writeCookieValue = (state: ConsentState) => {
  if (typeof document === 'undefined') return
  const value = encodeURIComponent(JSON.stringify(state))
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Strict`
}

const readStoredState = (): ConsentState | null => {
  if (!isClient) return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch (error) {
    console.error('Unable to read consent preferences', error)
    return null
  }
}

const persistState = (state: ConsentState) => {
  if (!isClient) return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (error) {
    console.error('Unable to persist consent preferences', error)
  }
  writeCookieValue(state)
  syncLanguagePreference(state.categories.analytics)
}

const deriveDecision = (categories: ConsentCategories): ConsentDecision => {
  if (categories.analytics && categories.marketing && categories.location) {
    return 'accepted'
  }
  if (!categories.analytics && !categories.marketing && !categories.location) {
    return 'rejected'
  }
  return 'custom'
}

const resolveCategories = (
  base: ConsentCategories,
  update: Partial<CookieConsent>
): ConsentCategories => ({
  analytics: typeof update.analytics === 'boolean' ? update.analytics : base.analytics,
  marketing: typeof update.marketing === 'boolean' ? update.marketing : base.marketing,
  preferences: base.preferences,
  location: typeof update.location === 'boolean' ? update.location : base.location,
})

const getStoredConsentState = (): ConsentState => {
  return readStoredState() ?? createDefaultState()
}

export function shouldShowBanner() {
  const stored = readStoredState()
  return !stored || stored.decision === null
}

export function getStoredConsent(): CookieConsent | null {
  const stored = readStoredState()
  if (!stored) return null
  return {
    analytics: stored.categories.analytics,
    marketing: stored.categories.marketing,
    location: stored.categories.location,
    hasChoice: stored.decision !== null,
  }
}

export function getDefaultConsent(): CookieConsent {
  return { ...DEFAULT_CONSENT }
}

export function setConsent(update: Partial<CookieConsent>): CookieConsent {
  const stored = getStoredConsentState()
  const categories = resolveCategories(stored.categories, update)
  const nextState: ConsentState = {
    ...stored,
    categories,
    decision: deriveDecision(categories),
    updatedAt: Date.now(),
  }
  persistState(nextState)
  const nextConsent: CookieConsent = {
    analytics: categories.analytics,
    marketing: categories.marketing,
    location: categories.location,
    hasChoice: true,
  }
  dispatchConsentEvent(nextConsent)
  return nextConsent
}

export function getConsentSummary() {
  const consent = getStoredConsent()
  return {
    functional: true,
    analytics: consent?.analytics ?? DEFAULT_CONSENT.analytics,
    marketing: consent?.marketing ?? DEFAULT_CONSENT.marketing,
    hasChoice: consent?.hasChoice ?? false,
  }
}

export function isAnalyticsAllowed() {
  return getStoredConsent()?.analytics ?? DEFAULT_CONSENT.analytics
}

export function clearAllCookies() {
  if (typeof document === 'undefined') return
  const cookies = document.cookie.split(';')
  cookies.forEach((cookie) => {
    const [name] = cookie.split('=')
    const trimmed = name?.trim()
    if (!trimmed) return
    document.cookie = `${trimmed}=; path=/; max-age=0; SameSite=Strict`
  })
  if (isClient) {
    window.localStorage.removeItem(STORAGE_KEY)
  }
  clearLanguagePreference()
  dispatchConsentEvent(null)
}
