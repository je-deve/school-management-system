'use client'
import { useLanguage } from "@/lib/language"

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  const handleToggle = () => {
    toggleLanguage()
   
  }

  return (
    <button
      onClick={handleToggle}
      className="bg-gray-100 dark:bg-gray-600 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
      title={language === 'ar' ? 'Switch to English' : 'تغيير للعربية'}
    >
      <span className="text-sm font-bold">
        {language === 'ar' ? 'EN' : 'ع'}
      </span>
    </button>
  )
}

export default LanguageToggle