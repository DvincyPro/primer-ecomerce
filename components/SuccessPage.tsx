import Link from 'next/link'
import React from 'react'

const SuccessPage = () => {
  return (
    <div className=' flex flex-col align-middle m-auto py-20 ' >
      <h1 className=' text-2xl text-hoverBg font-semibold ' >Gracias por comprar en nuestra plataforma</h1>
      <Link href="/" >
      <button className=' text-center flex m-auto border rounded-full p-2 text-lg text-ligthText hover:underline underline-offset-4 decoration-[1px] hover:text-[#2124ef] duration-300' >Puede continuar comprando de clic acá</button>
      </Link>
    </div>
  )
}

export default SuccessPage
