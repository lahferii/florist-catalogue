'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

function ProductWrapper({ title, children }) {
  const ref = useRef(null)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // ⬅️ SSR & first render sama

  return (
    <section className="mb-10 cursor-pointer">
      <h2 className="text-2xl tracking-wider mb-2">{title}</h2>

      <div
        ref={ref}
        className="flex space-x-5 overflow-x-auto py-5"
        onMouseDown={(e) => {
          setIsDown(true)
          setStartX(e.pageX - ref.current.offsetLeft)
          setScrollLeft(ref.current.scrollLeft)
        }}
        onMouseMove={(e) => {
          if (!isDown) return
          ref.current.scrollLeft =
            scrollLeft - (e.pageX - startX) * 1.5
        }}
        onMouseUp={() => setIsDown(false)}
        onMouseLeave={() => setIsDown(false)}
      >
        {children}
      </div>
    </section>
  )
}

function ProductBox({path, title, price}){
    return(
        <div className="w-full md:w-72 h-96 flex-shrink-0 flex flex-col rounded overflow-hidden shadow-md relative">
            <article className="w-full h-full">

            </article>
            
            <article className="absolute w-full h-full flex flex-col px-5 bg-gradient-to-b from-transparent via-transparent to-pink-100">
                <div className="absolute bottom-5">
                    <h3 className="tracking-widest font-semibold">{title}</h3>
                    <p className="mb-5 text-sm text-gray-700">Rp. {price}</p>
                    <button className="btn-primary py-1 rounded-sm" onClick={() => WhatsappRedirect(title, price)}>
                      Pesan
                    </button>
                </div>
            </article>
        </div>
    )
}

function WhatsappRedirect(title, price){
  const phone = "6283167944561";
  const message = `Halo! saya mau pesan ${title} dengan harga ${price}.`;

  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${phone}?text=${encodedMessage}`,
    "_blank"
  );
}

function MoreBox({target}){
    return(
        <div className="w-72 h-96 flex-shrink-0 rounded overflow-hidden snap-center flex border-2 border-rose-300 p-1">
            <article className="w-full h-full bg-rose-300 m-auto flex">
                <div className="m-auto">
                  <Link
                    href={`/katalog?category=${target}`}
                    className="btn-secondary hover:-translate-y-2 text-rose-500"
                  >
                    Lihat Selengkapnya
                  </Link>
                </div>
            </article>
       </div>
    )
}

export {ProductWrapper, ProductBox, MoreBox}