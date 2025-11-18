import { useMemo } from 'react'

function Medal({ n }) {
  const style =
    n === 1
      ? 'bg-gradient-to-br from-amber-300 to-yellow-400 text-slate-900 border-amber-200/70 shadow-[0_0_28px_rgba(251,191,36,0.35)]'
      : n === 2
      ? 'bg-gradient-to-br from-zinc-200 to-slate-100 text-slate-900 border-zinc-200/70 shadow-[0_0_28px_rgba(226,232,240,0.35)]'
      : n === 3
      ? 'bg-gradient-to-br from-amber-700 to-orange-500 text-white border-amber-500/60 shadow-[0_0_28px_rgba(245,158,11,0.35)]'
      : 'bg-emerald-500/15 text-emerald-100 border-emerald-300/40 shadow-[0_0_20px_rgba(16,185,129,0.25)]'
  return (
    <div className={`w-8 h-8 rounded-full grid place-items-center border ${style}`}>
      <span className="font-extrabold text-sm leading-none">{n}</span>
    </div>
  )
}

function Row({ rank, team, leader, members, compact=false }) {
  return (
    <div className="relative rounded-xl border border-emerald-400/20 bg-slate-900/60 backdrop-blur-sm p-2.5 flex items-center gap-3 overflow-hidden">
      <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-emerald-400/10 blur-2xl" />
      <Medal n={rank} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className={`truncate font-extrabold ${compact ? 'text-[12px]' : 'text-sm'}`}>{team}</h3>
          {rank <= 3 && (
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-400/15 text-amber-200 border border-amber-300/30">
              {rank === 1 ? 'Dragon' : rank === 2 ? 'Jade' : 'Chi'}
            </span>
          )}
        </div>
        <p className={`text-emerald-200/90 ${compact ? 'text-[10px]' : 'text-[11px]'} leading-tight truncate`}>Leader: <span className="text-emerald-100 font-semibold">{leader}</span></p>
        <p className={`text-emerald-300/70 ${compact ? 'text-[9px]' : 'text-[10px]'} leading-tight truncate`}>Members: {members}</p>
      </div>
    </div>
  )
}

function ChiparadoxStrip() {
  const people = [
    { name: 'Muhammad Mufeez', role: 'Head' },
    { name: 'Asfand Ahmed', role: 'Co-Head' },
    { name: 'Usman Ahmed', role: 'Deputy' },
    { name: 'Ali Mobin', role: 'Deputy' }
  ]
  return (
    <div className="rounded-2xl border border-amber-400/30 bg-gradient-to-br from-emerald-900/40 via-slate-900/60 to-emerald-900/30 p-2.5">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-amber-200 font-extrabold text-xs tracking-wide">Chi Paradox Team</h4>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-200 border border-emerald-400/30">Organizers</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {people.map((p) => (
          <div key={p.name} className="flex items-center gap-2 text-[10px] text-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
            <span className="truncate">{p.name}</span>
            <span className="ml-auto text-emerald-300/80">{p.role}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const rows = useMemo(
    () => [
      { rank: 1, team: 'BrainRot', leader: 'Zaid Bin Tariq', members: 'Muhammad Subhan, Muhammad Waleed' },
      { rank: 2, team: 'aibohphobia', leader: 'Muhammad Asim', members: 'Valihasan Jalees, Munnazzar Shahzad' },
      { rank: 3, team: 'Abdul Rafay Mughal', leader: 'Abdullah Azhar Khan', members: 'Sarim Ahmed, Sahil' },
      { rank: 4, team: 'Mavericks', leader: 'Syed Yousif Ali Shah', members: 'Talha Farooq Khan, Syed Hammad Ali Jilani' },
      { rank: 5, team: 'Moulana ki team', leader: 'Abrar Malik', members: 'Syed Azmeer' },
      { rank: 6, team: 'Byte Battalion', leader: 'Asad Jafri', members: 'Zohair Sarosh Shamsi' },
      { rank: 7, team: 'Clueless', leader: 'Ali Wasif', members: 'Furzan Ahmed, Syed Muhammad Mehdi Abidi' },
      { rank: 8, team: '501', leader: 'Dania Zehra', members: 'Hira Iftikhar, Vaniya Rehan' },
      { rank: 9, team: 'Paradox Resolvers', leader: 'Shayan', members: 'Aqsa Masood' },
      { rank: 10, team: 'YinYang', leader: 'Abeer Aslam', members: 'Arisha Rehan Chotani' }
    ],
    []
  )

  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-950 text-white">
      {/* Chi/Kai cinematic backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.10]" style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(34,197,94,0.12) 0px, rgba(34,197,94,0.12) 2px, transparent 2px, transparent 12px)'
        }} />
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      {/* 9:16 canvas that fits fully without scroll */}
      <div className="mx-auto h-screen aspect-[9/16] max-w-[1080px] relative">
        {/* Center and pad content inside the canvas */}
        <div className="absolute inset-0 p-3 sm:p-4 flex flex-col">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_12px_rgba(245,158,11,0.9)]" />
              <span className="text-emerald-200 text-[10px] tracking-widest font-semibold uppercase">Chi • Kai • Balance</span>
            </div>
            <h1 className="mt-2 text-[22px] sm:text-2xl font-black tracking-tight bg-gradient-to-br from-emerald-200 via-amber-200 to-emerald-100 text-transparent bg-clip-text">
              Chi Paradox by PROCOM'26 Leaderboard
            </h1>
          </div>

          {/* Layout grid: podium + list + organizers – all fit without scrolling */}
          <div className="grid grid-rows-[auto_1fr_auto] gap-2 mt-2 flex-1">
            {/* Top 3 podium (compact) */}
            <div className="grid grid-cols-3 gap-2">
              {rows.slice(0,3).map((r) => (
                <div key={r.rank} className={`rounded-2xl p-2 border ${r.rank === 1 ? 'border-amber-300/40 bg-gradient-to-br from-amber-200/10 via-emerald-500/5 to-amber-300/10' : 'border-emerald-400/30 bg-emerald-400/5'}`}>
                  <div className="flex items-start gap-2">
                    <Medal n={r.rank} />
                    <div className="min-w-0">
                      <h3 className="font-extrabold text-[12px] leading-tight truncate">{r.team}</h3>
                      <p className="text-emerald-200/90 text-[10px] leading-tight truncate">Leader: <span className="text-emerald-100 font-semibold">{r.leader}</span></p>
                    </div>
                  </div>
                  <div className="mt-1 text-emerald-300/70 text-[9px] leading-tight truncate">Members: {r.members}</div>
                </div>
              ))}
            </div>

            {/* Remaining ranks in a snug grid (4–10) */}
            <div className="grid grid-cols-1 gap-2 overflow-hidden">
              {rows.slice(3).map((r) => (
                <Row key={r.rank} rank={r.rank} team={r.team} leader={r.leader} members={r.members} compact />
              ))}
            </div>

            {/* Organizers */}
            <ChiparadoxStrip />
          </div>

          {/* Footer ribbon */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-200 text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              Share-ready • 9:16 Portrait
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
