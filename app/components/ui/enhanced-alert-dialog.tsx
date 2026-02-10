'use client'

import { ReactNode } from 'react'
import { X } from 'lucide-react'
import Button from './Button'

interface EnhancedAlertDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    title: string
    description: string
    confirmText?: string
    cancelText?: string
    onConfirm: () => void
    variant?: 'default' | 'destructive'
    children?: ReactNode
}

export function EnhancedAlertDialog({
    open,
    onOpenChange,
    title,
    description,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm,
    variant = 'default',
    children
}: EnhancedAlertDialogProps) {
    if (!open) return null

    const handleClose = () => onOpenChange(false)
    const handleConfirm = () => {
        onConfirm()
        handleClose()
    }

    return (
        <div className="fixed inset-0 z-[2147483648] flex items-center justify-center px-4 py-6">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                aria-hidden="true"
                onClick={handleClose}
            />
            <div
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="enhanced-alert-dialog-title"
                aria-describedby="enhanced-alert-dialog-description"
                className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
            >
                <div className="flex items-start justify-between space-x-4 border-b border-border px-6 py-5">
                    <div className="space-y-1">
                        <h3 id="enhanced-alert-dialog-title" className="text-lg font-semibold text-foreground">
                            {title}
                        </h3>
                        <p id="enhanced-alert-dialog-description" className="text-sm text-muted-foreground">
                            {description}
                        </p>
                    </div>
                    <button
                        type="button"
                        aria-label="Close dialog"
                        onClick={handleClose}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {children && (
                    <div className="px-6 py-4">
                        {children}
                    </div>
                )}

                <div className="flex justify-end gap-3 border-t border-border px-6 py-4">
                    <Button variant="ghost" size="sm" onClick={handleClose}>
                        {cancelText}
                    </Button>
                    <Button
                        variant={variant === 'destructive' ? 'destructive' : 'primary'}
                        size="sm"
                        onClick={handleConfirm}
                    >
                        {confirmText}
                    </Button>
                </div>
            </div>
        </div>
    )
}
