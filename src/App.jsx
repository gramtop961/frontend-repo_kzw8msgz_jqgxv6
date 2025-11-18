import { useMemo } from 'react'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-emerald-500/15 text-emerald-200 border border-emerald-400/30 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
      {children}
    </span>
  )
}

function RankMedal({ rank }) {
  const colors = {
    1: 'from-amber-300 via-yellow-200 to-amber-400 text-slate-900 border-amber-200/70',
    2: 'from-zinc-200 via-slate-100 to-zinc-300 text-slate-900 border-zinc-200/70',
    3: 'from-amber-700 via-orange-500 to-amber-600 text-white border-amber-500/60'
  }
  const glow = {
    1: 'shadow-[0_0_40px_rgba(251,191,36,0.35)]',
    2: 'shadow-[0_0_40px_rgba(226,232,240,0.35)]',
    3: 'shadow-[0_0_40px_rgba(245,158,11,0.35)]'
  }
  const style = colors[rank] || 'from-emerald-400/40 via-emerald-300/30 to-emerald-500/40 text-emerald-50 border-emerald-300/40'
  const sGlow = glow[rank] || 'shadow-[0_0_30px_rgba(16,185,129,0.25)]'
  return (
    <div className={`relative w-12 h-12 rounded-full grid place-items-center bg-gradient-to-br ${style} border ${sGlow}`}>
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.35),transparent_60%)]" />
      <span className="relative font-black text-xl">{rank}</span>
    </div>
  )
}

function LeaderboardRow({ rank, team, leader, members }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-emerald-400/20 p-4 sm:p-5 transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(16,185,129,0.25)]">
      {/* Chi ring */}
      <div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-emerald-400/10 blur-2xl" />
      <div className="flex items-center gap-4">
        <RankMedal rank={rank} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-white text-lg sm:text-xl font-extrabold tracking-tight">
              {team}
            </h3>
            {rank <= 3 ? (
              <Badge>{rank === 1 ? 'Dragon Warrior' : rank === 2 ? 'Jade Master' : 'Chi Adept'}</Badge>
            ) : null}
          </div>
          <p className="text-emerald-200/90 text-sm sm:text-base mt-1 truncate">
            Leader: <span className="text-emerald-100 font-semibold">{leader}</span>
          </p>
          <p className="text-emerald-300/70 text-xs sm:text-sm mt-1">
            Members: {members}
          </p>
        </div>
      </div>
    </div>
  )
}

function ChiparadoxPanel() {
  return (
    <div className="relative rounded-3xl border border-amber-400/30 bg-gradient-to-br from-emerald-900/40 via-slate-900/60 to-emerald-900/30 p-5 sm:p-6 overflow-hidden">
      <div className="absolute -inset-1 rounded-[28px] bg-[radial-gradient(circle_at_20%_0%,rgba(245,158,11,0.15),transparent_35%),radial-gradient(circle_at_80%_100%,rgba(16,185,129,0.2),transparent_40%)]" />
      <div className="relative">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
          <h3 className="text-amber-200 text-xl font-extrabold tracking-wide drop-shadow">Chi Paradox Team</h3>
          <Badge>Organizing Council</Badge>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-emerald-100">
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.7)]" />
            <span className="font-semibold">Muhammad Mufeez</span>
            <span className="ml-auto text-emerald-300/80 text-sm">Head</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.7)]" />
            <span className="font-semibold">Asfand Ahmed</span>
            <span className="ml-auto text-emerald-300/80 text-sm">Co-Head</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.7)]" />
            <span className="font-semibold">Usman Ahmed</span>
            <span className="ml-auto text-emerald-300/80 text-sm">Deputy</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.7)]" />
            <span className="font-semibold">Ali Mobin</span>
            <span className="ml-auto text-emerald-300/80 text-sm">Deputy</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

function App() {
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
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Kung Fu Panda Chi/Kai inspired backdrop */}
      <div className="fixed inset-0 -z-10">
        {/* Bamboo stripes */}
        <div className="absolute inset-0 opacity-[0.10]" style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(34,197,94,0.12) 0px, rgba(34,197,94,0.12) 2px, transparent 2px, transparent 12px)'
        }} />
        {/* Chi glow orbs */}
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-emerald-400/20 blur-3xl" />
        {/* Subtle texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_55%)]" />
      </div>

      {/* Canvas sized for portrait (Instagram story friendly) */}
      <div className="mx-auto max-w-[720px] min-h-screen px-4 py-6 sm:py-8 flex flex-col">
        {/* Header */}
        <div className="text-center mb-5 sm:mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 shadow-[inset_0_0_20px_rgba(16,185,129,0.15),0_10px_40px_rgba(16,185,129,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_16px_rgba(245,158,11,0.9)]" />
            <span className="text-emerald-200 text-xs tracking-widest font-semibold uppercase">Chi • Kai • Balance</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-br from-emerald-200 via-amber-200 to-emerald-100 text-transparent bg-clip-text drop-shadow">
            Chi Paradox by PROCOM'26 Leaderboard
          </h1>
          <p className="mt-2 text-emerald-200/80 text-sm sm:text-base">Kung Fu Panda inspired — share-ready in portrait</p>
        </div>

        {/* Top 3 podium */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {rows.slice(0, 3).map((r) => (
            <div key={r.rank} className={`relative rounded-3xl p-3 sm:p-4 border ${
              r.rank === 1
                ? 'border-amber-300/40 bg-gradient-to-br from-amber-200/15 via-emerald-500/10 to-amber-300/10'
                : 'border-emerald-400/30 bg-emerald-400/5'
            } shadow-[0_10px_40px_rgba(16,185,129,0.15)]`}>
              <div className="flex items-start gap-3">
                <RankMedal rank={r.rank} />
                <div className="min-w-0">
                  <h3 className="font-extrabold text-base sm:text-lg leading-tight truncate">{r.team}</h3>
                  <p className="text-emerald-200/90 text-xs sm:text-sm">Leader: <span className="text-emerald-100 font-semibold">{r.leader}</span></p>
                </div>
              </div>
              <div className="mt-2 text-emerald-300/70 text-[11px] sm:text-xs leading-snug">Members: {r.members}</div>
              {r.rank === 1 && (
                <div className="absolute -right-6 -top-6 w-16 h-16 rounded-full bg-amber-400/40 blur-xl" />
              )}
            </div>
          ))}
        </div>

        {/* Rest of leaderboard */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          {rows.slice(3).map((r) => (
            <LeaderboardRow key={r.rank} rank={r.rank} team={r.team} leader={r.leader} members={r.members} />
          ))}
        </div>

        {/* Chi Paradox Team panel */}
        <div className="mt-5 sm:mt-8">
          <ChiparadoxPanel />
        </div>

        {/* Footer ribbon */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-200 text-xs sm:text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
            Powered by the spirit of Chi
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
