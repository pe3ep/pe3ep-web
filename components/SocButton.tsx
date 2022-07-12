import React from 'react'

const SocButton = ({ children, className, href }: any) => {
  return (
    <a
      href={href}
      className={`${className} flex items-center justify-center p-4 font-manrope font-bold text-lg rounded-lg shadow-lg transition-colors`}>
      {children}
    </a>
  )
}

export default SocButton
