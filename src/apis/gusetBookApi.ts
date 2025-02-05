import { supabase } from "../lib/supabase"

// 방명록 데이터 타입 정의
export interface GuestbookEntry {
  id: string
  name: string
  content: string
  password: string
  created_at: string
}

// ✅ 방명록 목록 불러오기
export const fetchGuestbookEntries = async (): Promise<GuestbookEntry[]> => {
  const { data, error } = await supabase.from('guestbook').select('*').order('created_at', { ascending: false })
  if (error) throw error
  return data || []
}

// ✅ 방명록 추가
export const addGuestbookEntry = async (entry: Omit<GuestbookEntry, 'id' | 'created_at'>) => {
  const { data, error } = await supabase.from('guestbook').insert([entry]).select()
  if (error) throw error
  return data ? data[0] : null
}

// ✅ 방명록 수정
export const updateGuestbookEntry = async (id: string, content: string, password: string) => {
  const { data, error } = await supabase.from('guestbook').select('password').eq('id', id).single()
  if (error) throw error

  if (data.password !== password) {
    throw new Error('비밀번호가 틀렸습니다!')
  }

  await supabase.from('guestbook').update({ content }).eq('id', id)
}

// ✅ 방명록 삭제
export const deleteGuestbookEntry = async (id: string, password: string) => {
  const { data, error } = await supabase.from('guestbook').select('password').eq('id', id).single()
  if (error) throw error

  if (data.password !== password) {
    throw new Error('비밀번호가 틀렸습니다!')
  }

  await supabase.from('guestbook').delete().eq('id', id)
}
