import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "./components/Sidebar(trái)";
import UserCard from "./components/UserCard(phải)";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CS60 Tuyển dụng",
  description: "Hệ thống quản lý tuyển dụng CS60",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen gap-4 p-4">
          {/* Sidebar trái */}
          <Sidebar />

          {/* Nội dung động (page.tsx sẽ thay đổi) */}
          <div className="flex flex-col w-full gap-4 overflow-y-auto">
            {children}
          </div>

          {/* Sidebar phải */}
          <UserCard />
        </div>
      </body>
    </html>
  );
}
