"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#003580] text-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-[1165px] mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold ">
          <Link href="/">HotelStay</Link>
        </div>

        <nav className="hidden md:flex gap-6 font-medium">
          <Link href="/" className="hover:text-amber-400">Home</Link>
          <Link href="/room" className="hover:text-amber-400">Rooms</Link>
          <Link href="/blog" className="hover:text-amber-400">Blog</Link>
          <Link href="/about" className="hover:text-amber-400">About</Link>
          <Link href="/contact" className="hover:text-amber-400">Contact</Link>
        </nav>

        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md">
          <nav className="flex flex-col gap-4 text-gray-800 font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/room" onClick={() => setMenuOpen(false)}>Rooms</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

