"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/lib/profile";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("Work");
  const [hovered, setHovered] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let prevY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      // Section tracking for active nav item
      const scrollPos = currentY + 140;
      for (const item of [...navigation].reverse()) {
        const el = document.getElementById(item.toLowerCase());
        if (el && el.offsetTop <= scrollPos) {
          setActive(item);
          break;
        }
      }

      // Hide when scrolling down, show when scrolling up
      if (currentY <= 60) {
        setVisible(true);
      } else if (currentY > prevY && currentY - prevY > 6) {
        // Scrolling down
        setVisible(false);
      } else if (currentY < prevY && prevY - currentY > 6) {
        // Scrolling up
        setVisible(true);
      }

      prevY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentPill = hovered || active;

  return (
    <header className={`header ${visible || open ? "is-visible" : "is-hidden"}`}>
      <a href="#home" aria-label="Mahadi Hasan home" className="wordmark">
        mahadi<span>.</span>
      </a>
      <nav
        aria-label="Main navigation"
        className={open ? "nav is-open" : "nav"}
        onMouseLeave={() => setHovered(null)}
      >
        {navigation.map((item) => {
          const isSelected = currentPill === item;
          return (
            <a
              key={item}
              href={"#" + item.toLowerCase()}
              className={`nav-link ${active === item ? "is-active" : ""}`}
              onMouseEnter={() => setHovered(item)}
              onClick={() => {
                setActive(item);
                setOpen(false);
              }}
            >
              {isSelected && (
                <motion.span
                  layoutId="nav-pill"
                  className="nav-pill"
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 34,
                  }}
                />
              )}
              <span className="nav-text">{item}</span>
            </a>
          );
        })}
      </nav>
      <div className="header-actions">
        <ThemeToggle />
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
      </div>
    </header>
  );
}
