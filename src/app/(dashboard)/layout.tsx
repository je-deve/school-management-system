import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex" dir="rtl">

            {/* القائمة الجانبية - يمين */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 overflow-scroll dark:bg-gray-800">
                {/* شعار المدرسه */}
                <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
                    <Image src="/logo.png" alt="logo" width={45} height={45} />
                    <span className="hidden lg:block">قدرات الأجيال</span>
                </Link>
                {/* عناصر القائمة */}
                <Menu />
            </div>

            {/* المحتوى الرئيسي - يسار */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-gray-100 dark:bg-gray-900 overflow-scroll min-h-screen">
                <Navbar />
                {children}
            </div>
        </div>
    );
}