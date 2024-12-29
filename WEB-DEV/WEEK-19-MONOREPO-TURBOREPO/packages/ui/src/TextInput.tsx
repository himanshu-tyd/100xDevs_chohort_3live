
import React from 'react'

interface textInputProps{
    placeholder:string,
    onClick:()=>void,
    variant:string
}


export const TextInput = ({placeholder,onClick,variant}:textInputProps) => {
  return (
    <input
    style={{
        width:"80px",
        height:"25px",
        padding:"10px 20px",
        
    }}
    type="text" placeholder={placeholder}  />
  )
}

