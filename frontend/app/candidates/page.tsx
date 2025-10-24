"use client"
import React, { useState } from 'react'
import CandidateCard from './CandidateCard'

type Candidate = { id: string; name: string; email: string; role?: string; cvUrl?: string }

const demoData: Candidate[] = [
  { id: '1', name: 'Nguyen Van A', email: 'a@example.com', role: 'Frontend Developer', cvUrl: '/public/cv/modern-entry-level-resume.pdf' },
  { id: '2', name: 'Tran Thi B', email: 'b@example.com', role: 'Backend Developer', cvUrl: '/public/cv/modern-entry-level-resume.pdf' },
  { id: '3', name: 'Le Van C', email: 'c@example.com', role: 'Fullstack', cvUrl: '/public/cv/modern-entry-level-resume.pdf' }
]

export default function CandidatesPage() {
  const [list, setList] = useState(demoData)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Candidate | null>(null)

  const filtered = list.filter(c => c.name.toLowerCase().includes(query.toLowerCase()) || c.email.toLowerCase().includes(query.toLowerCase()) )

  function handleView(c: Candidate) {
    setSelected(c)
  }

  function handleAdd() {
    const id = String(Date.now())
    const item: Candidate = { id, name: 'New Candidate', email: `new${id}@example.com`, role: 'Unknown', cvUrl: '/public/cv/modern-entry-level-resume.pdf' }
    setList([item, ...list])
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(120deg, rgba(12,14,30,0.8), rgba(4,6,20,0.8))' }} className="p-6">
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: '#7c3aed' }}>Quản lý hồ sơ ứng viên</h1>
          <p className="text-sm text-[#9aa6bf]">Danh sách và quản lý CV của ứng viên</p>
        </div>
        <div className="flex items-center gap-3">
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Tìm kiếm theo tên hoặc email" className="px-3 py-2 rounded-md bg-transparent border border-white/5 text-[#dbeafe]" />
          <button onClick={handleAdd} className="px-4 py-2 rounded-md font-semibold" style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)', color: '#021028' }}>Thêm</button>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2 space-y-4">
          {filtered.map(c => (
            <CandidateCard key={c.id} candidate={c} onView={handleView} />
          ))}
        </section>

        <aside className="space-y-4">
          <div style={{ padding: 16, borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
            <h3 className="text-lg font-semibold text-[#dbeafe]">Chi tiết</h3>
            {!selected && <p className="text-sm text-[#a0b0c6]">Chọn ứng viên để xem chi tiết</p>}
            {selected && (
              <div className="mt-3 space-y-2">
                <div className="text-md font-semibold text-[#dbeafe]">{selected.name}</div>
                <div className="text-sm text-[#9aa6bf]">{selected.email}</div>
                <div className="text-sm text-[#a0b0c6]">{selected.role}</div>
                <div className="mt-3 flex gap-2">
                  <a href={selected.cvUrl} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md font-semibold" style={{ background: 'linear-gradient(90deg,#10b981,#4f46e5)', color: '#001' }}>Open CV</a>
                  <button className="px-3 py-1 rounded-md" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.06)', color: '#cfe7ff' }} onClick={() => setSelected(null)}>Close</button>
                </div>
              </div>
            )}
          </div>

          <div style={{ padding: 16, borderRadius: 12, background: 'linear-gradient(180deg, rgba(124,58,237,0.06), rgba(6,182,212,0.02))' }}>
            <h4 className="text-sm font-semibold text-[#021028]">Ghi chú</h4>
            <p className="text-sm text-[#001]">Sử dụng nút "Open CV" để xem file CV. Bạn có thể thêm chức năng upload / lọc nâng cao sau.</p>
          </div>
        </aside>
      </main>
    </div>
  )
}
