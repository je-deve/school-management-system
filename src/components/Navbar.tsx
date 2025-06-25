import Image from "next/image"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-white dark:bg-gray-800'>
      {/* معلومات المستخدم - يسار */}
      <div className="flex items-center gap-3">
        <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full" />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900 dark:text-white">جمانه الرحيلي</span>
          <span className="text-xs text-gray-500 dark:text-gray-300">مديرة</span>
        </div>
      </div>

      {/* شريط البحث - الوسط */}
      <div className="flex-1 max-w-md mx-8">
        <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2">
          <Image src="/search.png" alt="" width={16} height={16} />
          <input 
            type="text" 
            placeholder="بحث ..." 
            className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
      </div>

      {/* الأزرار - يمين */}
      <div className="flex items-center gap-3">
        {/* زر الإشعارات */}
        <div className="bg-gray-100 dark:bg-gray-600 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer relative hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors">
          <Image src="/announcement.png" alt="إشعارات" width={20} height={20} />
          <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-yellow-600 text-white rounded-full text-xs font-bold">
            1
          </div>
        </div>

        {/* زر الرسائل */}
        <div className="bg-gray-100 dark:bg-gray-600 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors">
          <Image src="/message.png" alt="رسائل" width={20} height={20} />
        </div>

        {/* زر تبديل الثيم */}
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Navbar