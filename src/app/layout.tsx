// src/app/layout.tsx
import Link from "next/link"; // 링크 컴포넌트 불러오기
import "./globals.css";

import LoginButton from "@/components/LoginButton"; // 1. 만든 버튼 불러오기


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {/* 공통 메뉴바 시작 */}
        <nav className="flex items-center justify-between px-10 py-5 bg-gray-100 border-b">
          <div className="text-xl font-bold">MyWeb</div>
          <div className="flex gap-10">
            <Link href="/" className="hover:text-blue-500">홈</Link>
            <Link href="/about" className="hover:text-blue-500">소개</Link>
            <Link href="/contact" className="hover:text-blue-500">연락처</Link>
          </div>
          <LoginButton />
        </nav>
        {/* 공통 메뉴바 끝 */}

        <main>{children}</main>
      </body>
    </html>
  );
}