'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface LanguageContextType {
  language: string
  toggleLanguage: () => void
  isRTL: boolean
  isLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<string>('ar')
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (!isLoaded) return
    
    const newDirection = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.dir = newDirection
    document.documentElement.lang = language
    
    localStorage.setItem('language', language)
  }, [language, isLoaded])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar')
  }

  const isRTL = language === 'ar'

  if (!isLoaded) {
    return <div className="min-h-screen bg-gray-100 dark:bg-gray-900" />
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isRTL, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}