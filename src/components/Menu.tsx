import Link from "next/link";
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

const menuItems = [
  {
    title: "القائمة",
    items: [
      {
        icon: Home,
        label: "الرئيسية",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: GraduationCap,
        label: "المعلمون",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: Users,
        label: "الطلاب",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: UserCheck,
        label: "أولياء الأمور",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: BookOpen,
        label: "المادة",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: School,
        label: "الفصل",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: FileText,
        label: "الدروس",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: ClipboardList,
        label: "الإختبارات",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: PenTool,
        label: "الواجبات",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Trophy,
        label: "النتائج",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Calendar,
        label: "الحضور",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: CalendarDays,
        label: "الفعاليات",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: MessageSquare,
        label: "الرسائل",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Bell,
        label: "الإشعارات",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "أخرى",
    items: [
      {
        icon: User,
        label: "الملف الشخصي",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Settings,
        label: "الإعدادات",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: LogOut,
        label: "تسجيل الخروج",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
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