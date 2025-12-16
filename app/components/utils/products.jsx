'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

function LatestProductWrapper({ title, children }) {
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

function MainWrapper({ children }) {
  return (
    <section className="flex gap-5 flex-wrap mb-20">
      {children}
    </section>
  );
}

function ProductBox({ path, title, price }) {
  const [count, setCount] = useState(1);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

  const formatRupiah = (num) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);
  };

  const totalPrice = price * count * 1000; // kalau price diberikan per ribu, misal 12 -> 12.000

  return (
    <div className="w-full md:w-72 h-96 flex-shrink-0 flex flex-col rounded overflow-hidden shadow-md relative">
      <article className="w-full h-full"></article>

      <article className="absolute w-full h-full flex flex-col bg-gradient-to-b from-transparent via-transparent to-pink-100">
        <div className="w-full absolute bottom-5 px-5">
          <h3 className="tracking-widest font-semibold">{title}</h3>
          <p className="mb-5 text-sm text-gray-700">
            {formatRupiah(totalPrice)}
          </p>

          <div className="flex justify-between">
            <div className="flex items-center">
              <button
                className="w-8 text-center border-2 border-rose-400 active:scale-110 hover:bg-rose-500 duration-300 text-xl font-semibold"
                onClick={decrement}
              >
                -
              </button>
              <span className="w-12 text-center text-xl">{count}</span>
              <button
                className="w-8 text-center border-2 border-rose-400 active:scale-110 hover:bg-rose-500 duration-300 text-xl font-semibold"
                onClick={increment}
              >
                +
              </button>
            </div>
            <button
              className="btn-primary py-1 rounded-sm"
              onClick={() => WhatsappRedirect(title, totalPrice, count)}
            >
              Pesan
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

function WhatsappRedirect(title, price, count) {
  const phone = "6283167944561";
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);

  const message = `Halo! saya mau pesan ${count} pcs ${title} seharga ${formattedPrice}.`;

  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${phone}?text=${encodedMessage}`,
    "_blank"
  );
}

function MoreBox({target}){
    return(
        <div className="w-72 h-96 flex-shrink-0 rounded overflow-hidden snap-center flex border-2 border-rose-500 p-1">
            <article className="w-full h-full bg-rose-500 m-auto flex">
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

export {LatestProductWrapper, MainWrapper, ProductBox, MoreBox}