'use client'
import { useTheme } from '@/lib/theme'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 bg-gray-100 dark:bg-gray-600 rounded-full hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors w-9 h-9"
      type="button"
      title={isDark ? 'تحويل للوضع الفاتح' : 'تحويل للوضع الغامق'}
    >
      {isDark ? (
        <Sun size={18} className="text-gray-600 dark:text-gray-300" />
      ) : (
        <Moon size={18} className="text-gray-600 dark:text-gray-300" />
      )}
    </button>
  )
}