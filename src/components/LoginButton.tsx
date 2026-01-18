"use client"; // 클릭 이벤트를 써야 하므로 클라이언트 컴포넌트로 선언!

export default function LoginButton() {
  const handleLogin = () => {
    alert("로그인 페이지로 이동하거나 환영 메시지를 띄웁니다! 🎉");
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
    >
      로그인
    </button>
  );
}