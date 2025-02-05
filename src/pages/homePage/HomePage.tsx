import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">우리 결혼해요 💍</h1>
        <p className="text-lg text-gray-600 mt-2">2025년 5월 25일 오후 2시</p>
        <p className="text-lg text-gray-600 mt-1">서울특별시 강남구 어딘가</p>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xl font-semibold text-gray-700">신랑 김철수 💙 신부 이영희</p>
      </div>

      <Link to="/guestbook">
        <button className="mt-8 px-6 py-2 text-white bg-blue-500 rounded-xl shadow-md hover:bg-blue-600">
          방명록 남기기 ✍️
        </button>
      </Link>
    </div>
  )
}

export default HomePage
