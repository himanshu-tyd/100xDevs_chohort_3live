import React from 'react'
import {LoaderCircle} from 'lucide-react'


const Loader = () => {
  return (
   <div className='w-full flex flex-1 items-center justify-center h-[300px]' > 
    <LoaderCircle className='animate-spin text-blue-600 ' />
   </div>

  )
}

export default Loader