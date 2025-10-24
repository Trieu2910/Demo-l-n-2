import React from 'react'

type Candidate = {
  id: string
  name: string
  email: string
  role?: string
  cvUrl?: string
}

export default function CandidateCard({ candidate, onView }: { candidate: Candidate; onView: (c: Candidate) => void }) {
  return (
    <div className="rounded-lg p-4" style={{
      background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',
      border: '1px solid rgba(255,255,255,0.04)'
    }}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold text-[#dbeafe]">{candidate.name}</div>
          <div className="text-sm text-[#9aa6bf]">{candidate.email}</div>
          {candidate.role && <div className="text-sm text-[#a0b0c6]">{candidate.role}</div>}
        </div>
        <div className="flex flex-col items-end gap-2">
          <button
            onClick={() => onView(candidate)}
            className="px-3 py-1 rounded-md font-semibold"
            style={{
              background: 'linear-gradient(90deg,#7c3aed,#06b6d4)',
              color: '#021028'
            }}
          >
            View CV
          </button>
        </div>
      </div>
    </div>
  )
}
