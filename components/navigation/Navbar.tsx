"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fade-in-up sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <Container className="relative">
        <div className="flex h-14 items-center justify-between sm:h-16">
          <Link href="#hero" className="flex items-center gap-2 text-xs font-medium text-zinc-100 sm:text-sm">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
            <span>{siteConfig.name}</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-300 transition-colors hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="#contact"
              className="rounded-full border border-cyan-400/50 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-colors hover:bg-cyan-400/20"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-200 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className="text-xl leading-none">{menuOpen ? "×" : "≡"}</span>
          </button>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-nav"
            className="absolute left-0 right-0 top-14 rounded-b-2xl border border-white/10 bg-[#080d1f]/95 p-4 shadow-2xl sm:top-16 md:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-zinc-200 transition-colors hover:bg-white/5 hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block rounded-lg border border-cyan-400/50 bg-cyan-500/10 px-3 py-2 text-center text-sm font-medium text-cyan-200"
            >
              Let&apos;s Talk
            </Link>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
