'use client'

import BoxFeatures from "../utils/boxFeatures"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Feature() {
  const card1 = useRef(null)
  const card2 = useRef(null)
  const card3 = useRef(null)

    useGSAP(() => {
        const responsive = gsap.matchMedia()

        responsive.add("(min-width: 1024px)", () => {
            gsap.from(card1.current, {
                y: -550,
                scale: 0.6,
                rotate: 14,
                scrollTrigger: {
                    scrub: 1,
                    trigger: card1.current,
                    start: "top 30%",
                    toggleActions: "play none none reverse",
                },
            })

            gsap.from(card3.current, {
                y: -500,
                scale: 0.6,
                rotate: -14,
                scrollTrigger: {
                    scrub: 1,
                    trigger: card3.current,
                    start: "top 20%",
                    toggleActions: "play none none reverse",
                },
            })
        })

        responsive.add("(min-width: 768px) and (max-width: 1020px)", () => {
            gsap.from(card1.current, {
                x: -300,
                opacity: 0.1,
                scrollTrigger: {
                    scrub: 0.8,
                    trigger: card1.current,
                    start: "top 90%",
                    end: "top 70%",
                    toggleActions: "play none none reverse",
                },
            })
            gsap.from(card2.current, {
                x: 300,
                opacity: 0.1,
                scrollTrigger: {
                    scrub: 0.8,
                    trigger: card2.current,
                    start: "top 90%",
                    end: "top 70%",
                    toggleActions: "play none none reverse",
                },
            })
            gsap.from(card3.current, {
                y: 100,
                scrollTrigger: {
                    scrub: 0.8,
                    trigger: card3.current,
                    start: "top 95%",
                    end: "top 70%",
                    toggleActions: "play none none reverse",
                },
            })
        })

        responsive.add("(max-width: 760px)", () => {
            gsap.from(card1.current, {
                y: 100,
                scrollTrigger: {
                    scrub: 0.8,
                    trigger: card1.current,
                    start: "top 90%",
                    end: "top 70%",
                    toggleActions: "play none none reverse",
                },
            })
            gsap.from(card2.current, {
                y: 100,
                scrollTrigger: {
                    scrub: 0.8,
                    trigger: card2.current,
                    start: "top 80%",
                    end: "top 70%",
                    toggleActions: "play none none reverse",
                },
            })
            gsap.from(card3.current, {
                y: 100,
                scrollTrigger: {
                    scrub: 0.8,
                    trigger: card3.current,
                    start: "top 90%",
                    end: "top 70%",
                    toggleActions: "play none none reverse",
                },
            })
        })
    })

  return (
    <section className="mb-20">
        <article className="mb-5 text-center">
            <h2 className="text-3xl tracking-wider mb-2">Kenapa Memilih Lorem Florist?</h2>
            <p>Kami berkomitmen memberikan pelayanan terbaik dengan kualitas premium</p>
        </article>

        <section className="flex flex-col md:flex-row flex-wrap justify-center">
            <BoxFeatures
                ref={card1}
                boxTitle="Kualitas Terbaik"
                boxDetail="Lorem ipsum dolor sit amet."
            />

            <BoxFeatures
                ref={card2}
                boxTitle="Kualitas Terbaik"
                boxDetail="Lorem ipsum dolor sit amet."
            />
            
            <BoxFeatures
                ref={card3}
                boxTitle="Kualitas Terbaik"
                boxDetail="Lorem ipsum dolor sit amet."
            />
        </section>
    </section>
  )
}
