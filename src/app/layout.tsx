import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";

const inter = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "قدرات الأجيال",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ThemeProvider> {children}</ThemeProvider>

      
        </body>
    </html>
  );
}