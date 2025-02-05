import { useEffect, useState } from 'react'
import {
  fetchGuestbookEntries,
  addGuestbookEntry,
  updateGuestbookEntry,
  deleteGuestbookEntry,
  GuestbookEntry
} from "../../apis/gusetBookApi"

const Guestbook = () => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [password, setPassword] = useState('')
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [editId, setEditId] = useState<string | null>(null)
  const [editContent, setEditContent] = useState('')
  const [editPassword, setEditPassword] = useState('')

  // 🔽 방명록 불러오기
  useEffect(() => {
    const loadEntries = async () => {
      try {
        const data = await fetchGuestbookEntries()
        setEntries(data)
      } catch (error) {
        console.error(error)
      }
    }
    loadEntries()
  }, [])

  // 🔽 방명록 추가
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !content || !password) {
      alert('이름, 내용, 비밀번호를 모두 입력해주세요!')
      return
    }

    try {
      const newEntry = await addGuestbookEntry({ name, content, password })
      if (newEntry) {
        setEntries((prev) => [newEntry, ...prev])
        setName('')
        setContent('')
        setPassword('')
      }
    } catch (error) {
      console.error(error)
    }
  }

  // 🔽 수정 모드 활성화
  const handleEditMode = (entry: GuestbookEntry) => {
    setEditId(entry.id)
    setEditContent(entry.content)
    setEditPassword('')
  }

  // 🔽 방명록 수정
  const handleEditSubmit = async (id: string) => {
    try {
      await updateGuestbookEntry(id, editContent, editPassword)
      setEntries((prev) =>
        prev.map((entry) => (entry.id === id ? { ...entry, content: editContent } : entry))
      )
      setEditId(null)
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        alert('An unknown error occurred')
      }
    }
  }

  // 🔽 방명록 삭제
  const handleDelete = async (id: string) => {
    const inputPassword = prompt('비밀번호를 입력하세요:')
    if (!inputPassword) return

    try {
      await deleteGuestbookEntry(id, inputPassword)
      setEntries((prev) => prev.filter((entry) => entry.id !== id))
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        alert('An unknown error occurred')
      }
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center">방명록 ✍️</h1>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded" />
        <textarea placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded" />
        <input type="password" placeholder="비밀번호 (수정/삭제용)" value={password}
          onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          방명록 남기기
        </button>
      </form>

      <div className="mt-6 space-y-3">
        {entries.map((entry) => (
          <div key={entry.id} className="p-3 border rounded shadow">
            <p className="font-semibold">{entry.name}</p>
            {editId === entry.id ? (
              <div>
                <textarea value={editContent} onChange={(e) => setEditContent(e.target.value)}
                  className="w-full p-2 border rounded" />
                <input type="password" placeholder="비밀번호 입력" value={editPassword}
                  onChange={(e) => setEditPassword(e.target.value)} className="w-full p-2 border rounded mt-2" />
                <div className="flex justify-end space-x-2 mt-2">
                  <button onClick={() => handleEditSubmit(entry.id)}
                    className="text-green-500 hover:underline">저장</button>
                  <button onClick={() => setEditId(null)}
                    className="text-gray-500 hover:underline">취소</button>
                </div>
              </div>
            ) : (
              <>
                <p>{entry.content}</p>
                <p className="text-sm text-gray-500">{new Date(entry.created_at).toLocaleString()}</p>
                <div className="flex space-x-2 mt-2">
                  <button onClick={() => handleEditMode(entry)}
                    className="text-blue-500 hover:underline">수정</button>
                  <button onClick={() => handleDelete(entry.id)}
                    className="text-red-500 hover:underline">삭제</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Guestbook
