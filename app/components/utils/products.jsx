'use client'

import { useRef, useState, useEffect } from 'react'

export { ProductWrapper, ProductBox, MoreBox }

function ProductWrapper({ title, children }) {
  const ref = useRef(null)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.matchMedia('(pointer: fine)').matches)
  }, [])

  const onMouseDown = (e) => {
    if (!isDesktop || !ref.current) return
    setIsDown(true)
    setStartX(e.pageX - ref.current.offsetLeft)
    setScrollLeft(ref.current.scrollLeft)
  }

  const onMouseMove = (e) => {
    if (!isDown || !ref.current) return
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    ref.current.scrollLeft = scrollLeft - (x - startX) * 1.5
  }

  const stopDrag = () => setIsDown(false)

  return (
    <section className="mb-10">
      <div className="mb-2 flex justify-between">
        <h2 className="text-2xl tracking-wider">{title}</h2>
      </div>

      <div
        ref={ref}
        className="
          w-full flex space-x-5 py-5
          overflow-x-auto select-none
          cursor-grab active:cursor-grabbing
        "
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
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
        <div className="w-80 h-96 flex-shrink-0 rounded overflow-hidden snap-center flex border-2 border-rose-500 p-1">
            <article className="w-full h-full bg-rose-500 m-auto flex">
                    <div className="m-auto">
                        <button className="btn-secondary text-rose-500">Lihat Selengkapnya</button>
                    </div>
            </article>
       </div>
    )
}