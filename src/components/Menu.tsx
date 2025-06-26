'use client'
import Link from "next/link";
import { useLanguage } from "@/lib/language";
import {
  Home,
  Users,
  GraduationCap,
  UserCheck,
  BookOpen,
  School,
  FileText,
  ClipboardList,
  Trophy,
  Calendar,
  MessageSquare,
  Bell,
  User,
  Settings,
  LogOut,
  PenTool,
  CalendarDays
} from "lucide-react";

const Menu = () => {
  const { language } = useLanguage()

  const menuItems = [
    {
      title: language === 'ar' ? "القائمة" : "Menu",
      items: [
        {
          icon: Home,
          label: language === 'ar' ? "الرئيسية" : "Home",
          href: "/",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: GraduationCap,
          label: language === 'ar' ? "المعلمون" : "Teachers",
          href: "/list/teachers",
          visible: ["admin", "teacher"],
        },
        {
          icon: Users,
          label: language === 'ar' ? "الطلاب" : "Students",
          href: "/list/students",
          visible: ["admin", "teacher"],
        },
        {
          icon: UserCheck,
          label: language === 'ar' ? "أولياء الأمور" : "Parents",
          href: "/list/parents",
          visible: ["admin", "teacher"],
        },
        {
          icon: BookOpen,
          label: language === 'ar' ? "المادة" : "Subjects",
          href: "/list/subjects",
          visible: ["admin"],
        },
        {
          icon: School,
          label: language === 'ar' ? "الفصل" : "Classes",
          href: "/list/classes",
          visible: ["admin", "teacher"],
        },
        {
          icon: FileText,
          label: language === 'ar' ? "الدروس" : "Lessons",
          href: "/list/lessons",
          visible: ["admin", "teacher"],
        },
        {
          icon: ClipboardList,
          label: language === 'ar' ? "الإختبارات" : "Exams",
          href: "/list/exams",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: PenTool,
          label: language === 'ar' ? "الواجبات" : "Assignments",
          href: "/list/assignments",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: Trophy,
          label: language === 'ar' ? "النتائج" : "Results",
          href: "/list/results",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: Calendar,
          label: language === 'ar' ? "الحضور" : "Attendance",
          href: "/list/attendance",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: CalendarDays,
          label: language === 'ar' ? "الفعاليات" : "Events",
          href: "/list/events",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: MessageSquare,
          label: language === 'ar' ? "الرسائل" : "Messages",
          href: "/list/messages",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: Bell,
          label: language === 'ar' ? "الإشعارات" : "Notifications",
          href: "/list/announcements",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
    {
      title: language === 'ar' ? "أخرى" : "Others",
      items: [
        {
          icon: User,
          label: language === 'ar' ? "الملف الشخصي" : "Profile",
          href: "/profile",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: Settings,
          label: language === 'ar' ? "الإعدادات" : "Settings",
          href: "/settings",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: LogOut,
          label: language === 'ar' ? "تسجيل الخروج" : "Logout",
          href: "/logout",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
  ];

  return (
    <div className='mt-4 text-sm'>
      {menuItems.map(i => (
        <div className="flex flex-col" key={i.title}>
          <span className="hidden lg:block text-gray-400 dark:text-gray-300 font-light my-4 uppercase text-xs tracking-wider">
            {i.title}
          </span>
          {i.items.map(item => {
            const IconComponent = item.icon;
            return (
              <Link
                href={item.href}
                key={item.label}
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-600 dark:text-gray-300 py-2 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 group">
                <IconComponent
                  size={20}
                  className="text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200" />
                <span className="hidden lg:block group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;