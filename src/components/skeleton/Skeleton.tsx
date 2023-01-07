import React from 'react'

const Skeleton = () => {
  return (
    <div>
        <div className='h-2 rounded lg:w-20 xl:w-28 bg-zinc-800'></div>
        <div className="h-2 rounded lg:w-16 xl:w-24 bg-zinc-800 mt-1"></div>
        <div className="h-2 rounded lg:w-16 xl:w-24 bg-zinc-800 mt-1"></div>
    </div>
  )
}

export default Skeleton