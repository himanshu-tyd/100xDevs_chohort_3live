import React from 'react'

interface ErrorProps{
    lable:string
}

const Error = ({lable}:ErrorProps) => {
  return (
    <div className='flex flex-1 w-full h-[300px] items-center justify-center' >
        <p className='text-red-500 font-semibold text-[16px]' >{lable}</p>
    </div>
  )
}

export default Error