"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const menuRef = useRef(null);
  const navbarRef = useRef(null);
  const burgerRef = useRef(null);

  const isBelowLg = () => window.innerWidth < 1024; // < lg

  const toggleMenu = () => {
    if (!isBelowLg()) return;
    menuRef.current?.classList.toggle("hidden"); // ❌ HANYA toggle hidden
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;

      if (window.scrollY >= 10) {
        navbarRef.current.classList.add("nav-scrolled");
      } else {
        navbarRef.current.classList.remove("nav-scrolled");
      }
    };

    const handleClickOutside = (e) => {
      if (!isBelowLg()) return;

      if (!menuRef.current || !burgerRef.current) return;

      const menu = menuRef.current;

      const klikDiLuar =
        !menu.contains(e.target) &&
        !burgerRef.current.contains(e.target);

      const menuTerbuka = !menu.classList.contains("hidden");

      if (klikDiLuar && menuTerbuka) {
        menu.classList.add("hidden");
      }
    };

    const handleResize = () => {
      if (!menuRef.current) return;

      if (isBelowLg()) {
        // mobile → pastikan menu default hidden
        menuRef.current.classList.add("hidden");
      } else {
        // lg+ → pastikan menu tampil
        menuRef.current.classList.remove("hidden");
      }
    };

    // jalankan sekali saat mount
    handleResize();

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header ref={navbarRef} className="nav-bar">
      <div>
        <Link href={"/"} className="lg:text-xl tracking-wider hover:text-rose-500 duration-300">Lorem Florist</Link>
      </div>

      {/* Burger aktif < lg */}
      <button
        ref={burgerRef}
        onClick={toggleMenu}
        className="burger group lg:hidden"
      >
        <div className="w-full h-2 bg-gray-700 group-hover:bg-rose-500 duration-300"></div>
        <div className="w-full h-2 bg-gray-700 group-hover:bg-rose-500 duration-300"></div>
        <div className="w-full h-2 bg-gray-700 group-hover:bg-rose-500 duration-300"></div>
      </button>

      {/* Menu */}
      <nav
        ref={menuRef}
        className="menu hidden sm:flex lg:flex"
      >
        <Link className="nav-link" href="/">
          Beranda
        </Link>
        <Link className="nav-link" href="/blog">
          Blog
        </Link>
        <Link className="nav-link" href="/katalog">
          Katalog
        </Link>
        <Link
          className="nav-link sm:btn-primary hover:text-rose-500 sm:hover:text-white"
          href="/"
        >
          Hubungi Kami
        </Link>
      </nav>
    </header>
  );
}