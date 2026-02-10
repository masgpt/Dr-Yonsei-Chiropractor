'use client'

import { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import pkg from '@/../package.json'
import Link from '@/components/ui/Link'
import {
    shouldShowBanner,
    setConsent,
    getStoredConsent,
    getDefaultConsent,
    clearAllCookies,
    type CookieConsent
} from '@/utils/cookie-consent'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import { X, Shield, CheckCircle, ChevronUp, ChevronDown, BarChart3, Eye, Trash2, AlertTriangle, MapPin, FileText, Info, Scale } from 'lucide-react'
import { EnhancedAlertDialog } from '@/components/ui/enhanced-alert-dialog'

interface CookieConsentBannerProps {
    className?: string
}

export function CookieConsentBanner({ className }: CookieConsentBannerProps) {
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [consent, setLocalConsent] = useState<CookieConsent | null>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [isGPC, setIsGPC] = useState(false)
    const [viewportHeight, setViewportHeight] = useState(0)
    const [deviceType, setDeviceType] = useState<string>('Detecting...')

    useEffect(() => {
        setMounted(true)
        // Check for GPC
        const gpc = typeof window !== 'undefined' && (window.navigator as any).globalPrivacyControl === true
        setIsGPC(gpc)

        // Only show banner if user hasn't made a choice
        const shouldShow = shouldShowBanner()
        const stored = getStoredConsent()
        
        // If GPC is on, enforce opt-out if no stored choice or previously accepted
        let initialConsent = stored || getDefaultConsent()
        if (gpc && (!stored || initialConsent.analytics)) {
            initialConsent = { ...initialConsent, analytics: false, marketing: false }
        }

        setLocalConsent(initialConsent)
        setOpen(shouldShow)

        // Detect mobile device and calculate proper viewport height for Safari
        const checkMobileAndViewport = () => {
            const ua = navigator.userAgent
            const isMobileDevice = window.innerWidth < 768 ||
                /Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i.test(ua)
            setIsMobile(isMobileDevice)

            // More granular device detection for display
            let platform = 'Desktop'
            if (/tablet|ipad|playbook|silk/i.test(ua)) {
                platform = 'Tablet'
            } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Opera Mini/i.test(ua)) {
                platform = 'Mobile'
            }

            let os = 'Unknown OS'
            if (ua.indexOf('Win') !== -1) os = 'Windows'
            if (ua.indexOf('Mac') !== -1) os = 'macOS'
            if (ua.indexOf('X11') !== -1) os = 'UNIX'
            if (ua.indexOf('Linux') !== -1) os = 'Linux'
            if (/Android/.test(ua)) os = 'Android'
            if (/iPhone|iPad|iPod/.test(ua)) os = 'iOS'

            setDeviceType(`${os} ${platform}`)

            // Fix Safari iOS viewport height issues
            const actualHeight = window.innerHeight
            setViewportHeight(actualHeight)
        }

        checkMobileAndViewport()
        window.addEventListener('resize', checkMobileAndViewport)
        window.addEventListener('orientationchange', checkMobileAndViewport)
        return () => {
            window.removeEventListener('resize', checkMobileAndViewport)
            window.removeEventListener('orientationchange', checkMobileAndViewport)
        }
    }, [])

    const onAccept = useCallback(() => {
        // When users accept, persist the choice (with anonymous analytics and general location enabled unless toggled off)
        setConsent({
            analytics: consent?.analytics ?? true,
            marketing: consent?.marketing ?? false,
            location: consent?.location ?? true
        })
        setOpen(false)
    }, [consent])

    const onReject = useCallback(() => {
        const next = setConsent({
            analytics: false,
            marketing: false,
            location: false
        })
        setLocalConsent(next)
        setOpen(false)
    }, [])

    const onToggleAnalytics = useCallback(() => {
        const next = setConsent({ analytics: !(consent?.analytics ?? true) })
        setLocalConsent(next)
    }, [consent])

    const onDeleteAll = useCallback(() => {
        clearAllCookies()
        // Force reload to ensure all cleared states are picked up
        window.location.reload()
    }, [])

    if (!open || !mounted) return null

    const banner = (
        <>
            {/* Background Overlay - Darkens and Blurs the rest of the app only when expanded */}
            <div 
                className={cn(
                    "fixed inset-0 z-[2147483647] bg-black/40 backdrop-blur-sm transition-all duration-300",
                    expanded ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                aria-hidden="true"
                onClick={() => setExpanded(false)}
            />
            
            <div
                className="fixed bottom-0 left-0 right-0 z-[2147483647] pointer-events-none cookie-consent-container p-3 safe-area-inset-bottom"
                style={{
                    // Ensure proper positioning on mobile devices
                    paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
                }}
            >
            <div
                role="dialog"
                aria-modal="true"
                aria-live="polite"
                aria-label="Privacy notice"
                className={cn(
                    'max-w-3xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl',
                    'pointer-events-auto',
                    'overflow-hidden',
                    // Ensure banner doesn't cover entire screen on small devices
                    'w-[calc(100vw-1.5rem)] sm:w-auto',
                    'mx-3 sm:mx-auto',
                    className,
                )}
            >
                <div className="p-4 h-auto">
                    {/* Main content */}
                    <div className="flex items-center justify-between gap-2">
                        <div 
                            className="flex items-center gap-2 min-w-0 flex-1 cursor-pointer hover:opacity-80 transition-opacity select-none"
                            onClick={() => setExpanded(!expanded)}
                            role="button"
                            aria-expanded={expanded}
                            title={expanded ? "Click to collapse" : "Click to see what we track"}
                        >
                            <Shield className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <div className="min-w-0">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Privacy Protected</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Essential cookies + anonymous analytics & general location.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 flex-shrink-0">
                        <div className="flex gap-2">
                            <Button
                                onClick={onAccept}
                                size="sm"
                                className="bg-green-600 hover:bg-green-700 text-white"
                            >
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Got it
                            </Button>
                            <Button
                                onClick={onReject}
                                variant="outline"
                                size="sm"
                                className="text-red-500 border-red-500/60 hover:bg-red-50 dark:hover:bg-red-950/30"
                            >
                                Reject all
                            </Button>
                        </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setExpanded(!expanded)}
                                className="h-8 w-8 p-0"
                            >
                                {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>

                    {/* Expanded details - with Scroll Area */}
                    {expanded && (
                        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 overflow-y-auto max-h-[60vh] sm:max-h-[450px] pr-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
                            <div className="space-y-4">
                                <div className="text-sm">
                                    <h4 className="font-medium mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                                        <BarChart3 className="h-4 w-4 text-blue-400" />
                                        What We Track Anonymously
                                    </h4>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                        <div className="p-2 sm:p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Eye className="h-4 w-4 text-blue-400" />
                                                <span className="font-medium text-sm text-slate-900 dark:text-white">Page Views</span>
                                            </div>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                Which pages are visited (no personal info)
                                            </p>
                                        </div>

                                        <div className="p-2 sm:p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                                            <div className="flex items-center gap-2 mb-1">
                                                <MapPin className="h-4 w-4 text-purple-400" />
                                                <span className="font-medium text-sm text-slate-900 dark:text-white">General Location</span>
                                            </div>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                Anonymous City/Region for site optimization
                                            </p>
                                        </div>

                                        <div className="p-2 sm:p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                            <div className="flex items-center gap-2 mb-1">
                                                <BarChart3 className="h-4 w-4 text-blue-400" />
                                                <span className="font-medium text-sm text-slate-900 dark:text-white">Device Type</span>
                                            </div>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                Current: <span className="text-blue-500 font-semibold">{deviceType}</span> (anonymized)
                                            </p>
                                        </div>

                                        <div className="p-2 sm:p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Shield className="h-4 w-4 text-green-400" />
                                                <span className="font-medium text-sm text-slate-900 dark:text-white">Essential Cookies</span>
                                            </div>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                Remember your privacy choices (required)
                                            </p>
                                        </div>

                                        <div className="p-2 sm:p-3 bg-red-500/10 border border-red-500/20 rounded-lg sm:col-span-2">
                                            <div className="flex items-center gap-2 mb-1">
                                                <X className="h-4 w-4 text-red-500" />
                                                <span className="font-medium text-sm text-red-600 dark:text-red-400">Personal Data</span>
                                            </div>
                                            <p className="text-xs text-red-600/80 dark:text-red-400/80">
                                                Never collected or stored without your explicit permission. We never see your exact address or identity.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Analytics toggle */}
                                <div className="flex flex-col gap-3">
                                    {isGPC && (
                                        <div className="flex items-center gap-2 p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-600 dark:text-blue-400">
                                            <Shield className="h-3 w-3" />
                                            <span>Global Privacy Control (GPC) signal detected. Your preference is set to Opt-Out.</span>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <BarChart3 className="h-4 w-4 text-blue-400" />
                                            <div>
                                                <p className="font-medium text-sm text-slate-900 dark:text-white">Anonymous Analytics</p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                                    Help us improve the site (completely anonymous)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={onToggleAnalytics}
                                                disabled={isGPC}
                                                className={cn(
                                                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                                                    consent?.analytics ? "bg-blue-500" : "bg-slate-200 dark:bg-slate-700",
                                                    isGPC && "opacity-50 cursor-not-allowed"
                                                )}
                                            >
                                                <span
                                                    className={cn(
                                                        "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                                                        consent?.analytics ? "translate-x-6" : "translate-x-1"
                                                    )}
                                                />
                                            </button>
                                            <span className="text-xs text-slate-500 dark:text-slate-400">
                                                {consent?.analytics ? "On" : "Off"}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-col gap-3">
                                    <p>
                                        <strong>Privacy Promise:</strong> We only collect anonymous usage data to improve our service.
                                        No personal information, no tracking across other sites, no selling data to third parties.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <Link
                                            href="/privacy-policy"
                                            className="group block p-3 bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-lg transition-all duration-200 !text-inherit"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Shield className="h-4 w-4 text-primary" />
                                                    <span className="font-medium text-slate-900 dark:text-white">Privacy Policy</span>
                                                </div>
                                                <div className="text-primary group-hover:translate-x-1 transition-transform">→</div>
                                            </div>
                                            <p className="text-[10px] mt-1 text-slate-500 dark:text-slate-400">
                                                How we protect your data.
                                            </p>
                                        </Link>

                                        <Link
                                            href="/terms-of-service"
                                            className="group block p-3 bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-lg transition-all duration-200 !text-inherit"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <FileText className="h-4 w-4 text-primary" />
                                                    <span className="font-medium text-slate-900 dark:text-white">Terms of Service</span>
                                                </div>
                                                <div className="text-primary group-hover:translate-x-1 transition-transform">→</div>
                                            </div>
                                            <p className="text-[10px] mt-1 text-slate-500 dark:text-slate-400">
                                                Our rules and agreement.
                                            </p>
                                        </Link>

                                        <Link
                                            href="/cookie-policy"
                                            className="group block p-3 bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-lg transition-all duration-200 !text-inherit"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Info className="h-4 w-4 text-primary" />
                                                    <span className="font-medium text-slate-900 dark:text-white">Cookie Policy</span>
                                                </div>
                                                <div className="text-primary group-hover:translate-x-1 transition-transform">→</div>
                                            </div>
                                            <p className="text-[10px] mt-1 text-slate-500 dark:text-slate-400">
                                                Details about cookies we use.
                                            </p>
                                        </Link>

                                        <Link
                                            href="/disclaimer"
                                            className="group block p-3 bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-lg transition-all duration-200 !text-inherit"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Scale className="h-4 w-4 text-primary" />
                                                    <span className="font-medium text-slate-900 dark:text-white">Disclaimer</span>
                                                </div>
                                                <div className="text-primary group-hover:translate-x-1 transition-transform">→</div>
                                            </div>
                                            <p className="text-[10px] mt-1 text-slate-500 dark:text-slate-400">
                                                Legal and medical disclaimers.
                                            </p>
                                        </Link>

                                        <Link
                                            href="/do-not-sell"
                                            className="group block p-3 bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-lg transition-all duration-200 sm:col-span-2 !text-inherit"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <AlertTriangle className="h-4 w-4 text-primary" />
                                                    <span className="font-medium text-slate-900 dark:text-white">Do Not Sell or Share My Personal Information</span>
                                                </div>
                                                <div className="text-primary group-hover:translate-x-1 transition-transform">→</div>
                                            </div>
                                            <p className="text-[10px] mt-1 text-slate-500 dark:text-slate-400">
                                                Exercise your California Privacy Rights (CPRA).
                                            </p>
                                        </Link>
                                    </div>

                                    <div className="mt-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setConfirmDelete(true)}
                                            className="w-full border-red-500/50 text-red-500 hover:bg-red-500/10"
                                        >
                                            <Trash2 className="h-3 w-3 mr-2" />
                                            Delete All Cookies & Reset Consent
                                        </Button>

                                        <div className="mt-4 flex items-center justify-between text-[10px] opacity-40 uppercase tracking-widest font-bold">
                                            <span>Privacy Guard System</span>
                                            <span>v{pkg.version}</span>
                                        </div>

                                        <EnhancedAlertDialog
                                            open={confirmDelete}
                                            onOpenChange={setConfirmDelete}
                                            title="Reset All Privacy Settings?"
                                            description="This will sign you out, clear all site preferences, and delete all cookies. The privacy banner will reappear on your next visit."
                                            confirmText="Yes, Delete Everything"
                                            cancelText="Cancel"
                                            onConfirm={onDeleteAll}
                                            variant="destructive"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>
)

    // Use portal to render at the very top of the DOM tree
    return typeof window !== 'undefined' ? createPortal(banner, document.body) : null
}

export default CookieConsentBanner
