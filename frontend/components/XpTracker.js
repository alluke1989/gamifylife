import { useState } from 'react'

export default function XpTracker() {
  const [xp, setXp] = useState(0)

  const addXp = (amount) => setXp(xp + amount)

  return (
    <div className="my-4">
      <p>XP: {xp}</p>
      <button onClick={() => addXp(10)} className="px-2 py-1 bg-green-500 text-white rounded">Complete Task (+10 XP)</button>
    </div>
  )
}
