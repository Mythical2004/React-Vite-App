import React from 'react'

const navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-600 text-amber-400 p-2 py-10'>
        <div className="logo">
            <span className='font-bold text-xl'>iTask</span>
        </div>
      <ul className="flex gap-8">
        <li className='cursor-pointer hover:bg-slate-500 hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:bg-slate-500 hover:font-bold transition-all'>Your Task</li>
      </ul>
    </nav>
  )
}

export default navbar
