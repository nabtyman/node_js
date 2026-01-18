// src/app/news/[id]/page.tsx

// 주소창의 값을 받아오기 위해 params를 인자로 받습니다.
export default async function NewsDetail({ params }: { params: Promise<{ id: string }> }) {
  // params를 기다렸다가(await) 가져옵니다.
  const { id } = await params;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">뉴스 상세 페이지</h1>
      <div className="p-6 bg-gray-100 rounded-lg">
        <p className="text-xl font-bold text-blue-600">
          현재 보고 있는 뉴스의 번호는 [{id}] 입니다.
        </p>
        <p className="mt-4">
          여기에 해당 뉴스 아이디에 맞는 상세 내용을 DB에서 가져와 보여주게 됩니다.
        </p>
      </div>
    </div>
  );
}