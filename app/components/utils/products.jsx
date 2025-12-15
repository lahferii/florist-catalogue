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
        <div className="w-72 h-96 flex-shrink-0 flex flex-col rounded overflow-hidden shadow-md">
            <article className="flex-[2] bg-black">

            </article>

            <article className="flex-1 relative flex flex-col px-2 bg-white">
                <div className="absolute bottom-5">
                    <h3 className="tracking-widest font-semibold">{title}</h3>
                    <p className="mb-5 text-sm text-gray-700">Rp. {price}</p>
                    <button className="btn-primary py-1 rounded-sm">Pesan</button>
                </div>
            </article>
        </div>
    )
}

function MoreBox({target}){
    return(
        <div className="w-72 h-96 flex-shrink-0 rounded overflow-hidden snap-center flex border-2 border-rose-500 p-1">
            <article className="w-full h-full bg-rose-500 m-auto flex">
                <div className="m-auto">
                  <Link
                    href={`/katalog?category=${target}`}
                    className="btn-secondary text-rose-500"
                  >
                    Lihat Selengkapnya
                  </Link>
                </div>
            </article>
       </div>
    )
}

export {ProductWrapper, ProductBox, MoreBox}