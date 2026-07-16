import React from 'react'

export default function AuthLayout({children}:{children:React.ReactNode}) {
  return (
    <section className='flex flex-col h-screen  justify-center items-center'>
      <div className='w-full max-w-md'>
        {children}
      </div>
    </section>
  )
}
