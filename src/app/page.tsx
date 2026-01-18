// src/app/page.tsx 수정 (Link 추가)
import Link from "next/link";

export default function Home() {
  const newsList = [
    { id: 1, title: "Next.js 공부 시작!", date: "2026-01-18" },
    { id: 2, title: "Tailwind CSS는 정말 편하네요.", date: "2026-01-19" },
    { id: 3, title: "데이터 뿌리기 성공 예감", date: "2026-01-20" },
  ];

  return (
    <div className="max-w-md mx-auto p-10">
      <h1 className="text-2xl font-bold mb-6">📰 최신 뉴스</h1>
      <div className="flex flex-col gap-4">
        {newsList.map((news) => (
          // id값에 따라 주소가 /news/1, /news/2 로 바뀝니다.
          <Link key={news.id} href={`/news/${news.id}`}>
            <div className="p-4 border rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
              <h2 className="text-lg font-semibold">{news.title}</h2>
              <p className="text-gray-500 text-sm">{news.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}