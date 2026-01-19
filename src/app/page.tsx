// src/app/page.tsx 수정 (Link 추가)
import Link from "next/link";

export default async function Home() {

  
  const newsList = [
    { id: 1, title: "Next.js 공부 시작!", date: "2026-01-18" },
    { id: 2, title: "Tailwind CSS는 정말 편하네요.", date: "2026-01-19" },
    { id: 3, title: "데이터 뿌리기 성공 예감", date: "2026-01-20" },
  ];


// 1. 카페24 PHP API 주소 호출
  const res = await fetch('https://nabtyman.cafe24.com/web/sql_func.php', {
    cache: 'no-store' // 매번 새로운 데이터를 가져오도록 설정 (PHP의 실시간성 유지)
  });
  if (!res.ok) {
    return <div>데이터를 불러오는 중 에러가 발생했습니다.</div>;
  }

  const newsList2 = await res.json();

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
      <div>
        111
        {newsList2[0].f_data2}
        222
      </div>

      <div style={{ padding: '20px' }}>
        <h1>뉴스 리스트 ({newsList2.length}개)</h1>
        <hr />
        
        {/* 1. map을 사용하여 배열을 하나씩 순회합니다 */}
        {newsList2.map((item: any) => (
          <div key={item.f_sn} style={{ 
            borderBottom: '1px solid #ccc', 
            padding: '15px 0',
            marginBottom: '10px' 
          }}>
            {/* 2. 객체 통째로가 아니라, 내부의 속성(key)을 하나씩 찍어줍니다 */}
            <h2 style={{ color: 'blue' }}>{item.f_data}</h2> {/* 제목 역할 */}
            <p><strong>구분:</strong> {item.f_gubun1} / {item.f_gubun2}</p>
            <div style={{ background: '#f9f9f9', padding: '10px' }}>
              {item.f_contents}
            </div>
            <small style={{ color: '#888' }}>일련번호: {item.f_sn} | 순서: {item.f_order}</small>
          </div>
        ))}
      </div>      
    </div>
  );
}