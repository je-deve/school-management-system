'use client'
import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/lib/language";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { language, isRTL } = useLanguage()

    const schoolName = language === 'ar' ? 'قدرات الأجيال' : 'Abilities Generations'

    return (
        <div key={language} className="dashboard-container">

            {/* القائمة الجانبية */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 overflow-scroll dark:bg-gray-800">
                {/* شعار المدرسه */}
                <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
                    <Image src="/logo.png" alt="logo" width={45} height={45} />
                    <span className="hidden lg:block">{schoolName}</span>
                </Link>
                {/* عناصر القائمة */}
                <Menu />
            </div>

            {/* المحتوى الرئيسي */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#FAFAFA] dark:bg-gray-900 overflow-scroll min-h-screen">
                <Navbar />
                {children}
            </div>
        </div>
    );
}