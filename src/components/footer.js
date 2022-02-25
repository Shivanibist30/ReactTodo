import React from 'react'

export const Footer = () => {
    let footstyle={position:'relative',top:'95vh',width:"100%"}
  return (
    <div className='bg-dark text-light 'style={footstyle}>
    <p className='text-center' >Copyright &copy; TodoList.com</p>
    </div>
  )
}
