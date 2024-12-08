import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div>
        <h2>Top header of auth</h2>
        {children}
    </div>
  )
}

export default AuthLayout