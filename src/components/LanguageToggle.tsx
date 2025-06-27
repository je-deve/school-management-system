'use client'
import { useLanguage } from "@/lib/language"
import { useState } from "react"

const LanguageToggle = () => {
  const { language, toggleLanguage, isLoaded } = useLanguage()
  const [isChanging, setIsChanging] = useState(false)

  const handleToggle = async () => {
    if (!isLoaded || isChanging) return
    
    setIsChanging(true)
    
    // تنفيذ تغيير اللغة
    toggleLanguage()
    
    // انتظار قصير للسماح بالتحديث
    setTimeout(() => {
      setIsChanging(false)
    }, 300)
  }

  if (!isLoaded) {
    return (
      <div className="bg-gray-100 dark:bg-gray-600 rounded-full w-9 h-9 flex items-center justify-center animate-pulse">
        <span className="text-sm font-bold text-gray-400">...</span>
      </div>
    )
  }

  return (
    <button
      onClick={handleToggle}
      disabled={isChanging}
      className={`bg-gray-100 dark:bg-gray-600 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500 transition-all duration-300 ${
        isChanging ? 'animate-spin' : ''
      }`}
      title={language === 'ar' ? 'Switch to English' : 'تغيير للعربية'}
    >
      <span className="text-sm font-bold">
        {isChanging ? '⟳' : language === 'ar' ? 'EN' : 'ع'}
      </span>
    </button>
  )
}

export default LanguageToggle