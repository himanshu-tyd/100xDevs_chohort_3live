/* eslint-disable react/prop-types */
import React from 'react'

// eslint-disable-next-line react/prop-types
const SideBarCard = ({items}) => {
  console.log(items)
  return (
    <div className='flex justify-between w-full px-4 rounded-md py-3  items-center text-[#E4E9EE hover:bg-[#E4E9EE] hover:text-[#002B5B]  duration-100' >
        <span>{items.title}</span>
        <span><img src={items.icon} /></span>
    </div>
  )
}

export default SideBarCard