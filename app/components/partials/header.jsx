"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const menuRef = useRef(null);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    const menu = menuRef.current;
    if (!menu) return;

    menu.classList.toggle("hidden");
    menu.classList.toggle("sm:flex");
    menu.classList.toggle("flex");
  };

  const toggleDark = () => {
    const body = document.body.classList;
    const isDark = localStorage.getItem("isDark");

    if (isDark) {
      localStorage.removeItem("isDark");
      body.toggle("dark");
      console.info("terang");
    } else {
      localStorage.setItem("isDark", "true");
      body.toggle("dark");
      console.info("gelap");
    }
  };

  useEffect(() => {
    const checkDarkMode = localStorage.getItem("isDark");
    if (checkDarkMode) {
      document.body.classList.add("dark");
    }

    const handleScroll = () => {
      if (!navbarRef.current) return;

      if (window.scrollY >= 10) {
        navbarRef.current.classList.add("nav-scrolled");
      } else {
        navbarRef.current.classList.remove("nav-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={navbarRef} className="nav-bar">
      <div>
        <h3 className="md:text-xl tracking-wider">
          Lorem Florist
        </h3>
      </div>

      <button onClick={toggleMenu} className="burger group">
        <div className="w-full h-2 bg-gray-700 group-hover:bg-rose-500 duration-300"></div>
        <div className="w-full h-2 bg-gray-700 group-hover:bg-rose-500 duration-300"></div>
        <div className="w-full h-2 bg-gray-700 group-hover:bg-rose-500 duration-300"></div>
      </button>

      <nav ref={menuRef} className="hidden sm:flex menu">
        <Link className="nav-link" href="/">Beranda</Link>
        <Link className="nav-link" href="/">Profil</Link>
        <Link className="nav-link sm:btn-primary" href="/project">Contact</Link>

        {/* <button
          onClick={toggleDark}
          className="far fa-lightbulb text-gray-500  text-xl w-8 h-8 rounded-full"
        /> */}
      </nav>
    </header>
  );
}