import React from 'react'

function Button({children}) {
  const Varients={
    default:{
      padding:'10px 20px',
      backgroundColor:'red',
      borderRadius:'5px'
    }
  }
  return (
    <button style={Varients.default}>{children}</button>
  )
}

export default Button