// 1. 상단에 Link를 불러와야 합니다.
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-green-600">Contact</h1>
      <p className="mt-4">폴더 기반 라우팅 성공을 축하드립니다! 🎉</p>
      
      {/* 2. a 태그 대신 Link를 사용합니다. */}
      <Link href="/" className="text-blue-500 underline mt-4 block">
        홈으로 돌아가기 (새로고침 없이 이동!)
      </Link>
    </div>
  );
}