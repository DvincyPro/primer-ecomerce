import React from 'react'

export const TopFooter = () => {
  return (
    <div className='w-full bg-lightBlue ' >
        <div className=' py-10 flex flex-col gap-4 justify-center items-center ' >
            <p className=' font-medium ' > We love to hear what you think! </p>
            <button className=' w-36 h-9 border-[1px] hover:bg-[#125af4] hover:text-[#fff] border-[#000] bg-[#fff] rounded-full hover:border-[2px] transition-all duration-200' >Give feedBack</button>
        </div>
    </div>
  )
}
