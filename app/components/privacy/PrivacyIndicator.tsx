'use client'

import { useEffect, useState } from 'react'
import { getConsentSummary, isAnalyticsAllowed } from '@/utils/cookie-consent'
import { Shield, BarChart3, Eye, EyeOff } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface PrivacyIndicatorProps {
    className?: string
    showDetails?: boolean
}

export function PrivacyIndicator({ className, showDetails = false }: PrivacyIndicatorProps) {
    const [consent, setConsent] = useState<{ functional: boolean; analytics: boolean; marketing: boolean; hasChoice: boolean } | null>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isGPC, setIsGPC] = useState(false)

    useEffect(() => {
        const update = () => {
            const summary = getConsentSummary()
            setConsent(summary)
            const gpc = typeof window !== 'undefined' && (window.navigator as any).globalPrivacyControl === true
            setIsGPC(gpc)
        }

        update()
        window.addEventListener('cookie-consent-changed', update as EventListener)
        return () => window.removeEventListener('cookie-consent-changed', update as EventListener)
    }, [])

    if (!consent) return null

    const analyticsAllowed = isAnalyticsAllowed()
    const isPrivacyMode = !analyticsAllowed

    return (
        <div className={cn('flex items-center gap-2', className)}>
            {/* Privacy Status Icon */}
            <div className="flex items-center gap-1">
                {isPrivacyMode ? (
                    <div className="flex items-center gap-1 text-green-600">
                        <Shield className="h-4 w-4" />
                        <span className="text-xs font-medium">Privacy Mode</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-1 text-blue-600">
                        <BarChart3 className="h-4 w-4" />
                        <span className="text-xs font-medium">Analytics On</span>
                    </div>
                )}
            </div>

            {/* Detailed Status (if requested) */}
            {showDetails && (
                <div className="text-xs text-muted-foreground">
                    {isPrivacyMode ? (
                        <span>No tracking • Anonymous page views only</span>
                    ) : (
                        <span>Anonymous analytics enabled</span>
                    )}
                </div>
            )}

            {/* Toggle Visibility */}
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVisible(!isVisible)}
                className="h-6 w-6 p-0"
            >
                {isVisible ? (
                    <EyeOff className="h-3 w-3" />
                ) : (
                    <Eye className="h-3 w-3" />
                )}
            </Button>

            {/* Detailed Info Panel */}
            {isVisible && (
                <div className="absolute top-8 right-0 bg-background border border-border rounded-lg shadow-lg p-3 min-w-[200px] z-50">
                    <div className="space-y-2 text-xs">
                        <div className="font-medium">Privacy Status</div>
                        <div className="space-y-1">
                            <div className="flex items-center justify-between">
                                <span>Functional Cookies:</span>
                                <span className="text-green-600">✓ Required</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Analytics:</span>
                                <span className={analyticsAllowed ? 'text-blue-600' : 'text-gray-500'}>
                                    {analyticsAllowed ? '✓ Anonymous' : '✗ Disabled'}
                                </span>
                            </div>
                            {isGPC && (
                                <div className="flex items-center justify-between text-[10px] text-blue-500 font-bold">
                                    <span>GPC Signal:</span>
                                    <span>Active (DNS)</span>
                                </div>
                            )}
                            <div className="flex items-center justify-between">
                                <span>Marketing:</span>
                                <span className="text-gray-500">✗ Never used</span>
                            </div>
                        </div>
                        <div className="pt-2 border-t border-border">
                            <a
                                href="/cookie-policy"
                                className="text-primary hover:underline"
                            >
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PrivacyIndicator
