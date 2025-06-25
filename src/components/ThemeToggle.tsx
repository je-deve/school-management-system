'use client'
import { JSX } from 'react'
import { useTheme } from '@/lib/theme'

export default function ThemeToggle(): JSX.Element {
    const { isDark, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className=" flex items-center p-2 bg-gray-100 dark:bg-gray-600 rounded-full hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors w-9 h-9"
            type="button"
        >
            {isDark ? '☀️' : '🌙 '}
        </button>
    )
}