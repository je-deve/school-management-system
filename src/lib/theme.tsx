'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// تعريف نوع البيانات
interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

// إنشاء Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// تعريف Props
interface ThemeProviderProps {
  children: ReactNode
}

// المكون الرئيسي للثيم
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      setIsDark(true)
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Hook للاستخدام
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}