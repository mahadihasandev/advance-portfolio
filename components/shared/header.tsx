"use client";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/lib/profile";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a href="#home" aria-label="Mahadi Hasan home" className="wordmark">
        mahadi<span>.</span>
      </a>
      <nav
        aria-label="Main navigation"
        className={open ? "nav is-open" : "nav"}
      >
        {navigation.map((item) => (
          <a
            key={item}
            href={"#" + item.toLowerCase()}
            onClick={() => setOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">
        Let’s talk <ArrowUpRight size={16} />
      </a>
      <button
        className="menu-button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
