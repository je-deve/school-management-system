'use client'
import Image from "next/image"
import ThemeToggle from "./ThemeToggle"
import LanguageToggle from "./LanguageToggle"
import { Search, Bell, MessageSquare } from "lucide-react"
import { useLanguage } from "@/lib/language"

const Navbar = () => {
  const { language } = useLanguage()

  // النصوص حسب اللغة
  const texts = {
    ar: {
      search: "بحث ...",
      name: "جمانه الرحيلي",
      role: "مديرة"
    },
    en: {
      search: "Search ...",
      name: "Jumanah Al-Raheeli",
      role: "Manager"
    }
  }

  const currentTexts = texts[language as keyof typeof texts] || texts.ar

  return (
    <div className='flex items-center justify-between p-4 bg-white dark:bg-gray-800'>
      {/* معلومات المستخدم - يسار */}
      <div className="flex items-center gap-3">
        <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full" />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {currentTexts.name}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-300">
            {currentTexts.role}
          </span>
        </div>
      </div>

      {/* شريط البحث - الوسط */}
      <div className="flex-1 max-w-md mx-8">
        <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2">
          <Search size={16} className="text-gray-500 dark:text-gray-400" />
          <input 
            type="text" 
            placeholder={currentTexts.search}
            className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
      </div>

      {/* الأزرار - يمين */}
      <div className="flex items-center gap-3">
        {/* زر الإشعارات */}
        <div className="bg-gray-100 dark:bg-gray-600 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer relative hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors">
          <Bell size={20} className="text-gray-600 dark:text-gray-300" />
          <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-yellow-600 text-white rounded-full text-xs font-bold">
            1
          </div>
        </div>

        {/* زر الرسائل */}
        <div className="bg-gray-100 dark:bg-gray-600 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors">
          <MessageSquare size={20} className="text-gray-600 dark:text-gray-300" />
        </div>

        {/* زر تبديل اللغة */}
        <LanguageToggle />

        {/* زر تبديل الثيم */}
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Navbar