import React from 'react'

const HomePageSection = () => {
  return (
    <div className='flex bg-white justify-center gap-7'>
        <div className='flex flex-col gap-7 mt-4'>
            <div className='h-[260px] w-[500px] bg-slate-300 '></div>
            <div className='h-[260px] w-[500px]  bg-black '></div>
            
        </div>
        <div className='flex flex-col mt-4 gap-7'>
            <div className='h-[260px] w-[700px] bg-slate-300'></div>
            <div className='h-[260px] w-[700px] bg-slate-300'></div>
        </div>
    </div>
  )
}

export default HomePageSection