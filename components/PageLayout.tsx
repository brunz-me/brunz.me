"use client";

import Link from "next/link";
import AvatarPopup from "./AvatarPopup";

type NavItem = "about" | "work" | "music";

interface PageLayoutProps {
  activeNav: NavItem;
  children: React.ReactNode;
}

export default function PageLayout({ activeNav, children }: PageLayoutProps) {
  const navItems: { href: string; label: string; key: NavItem }[] = [
    { href: "/", label: "About", key: "about" },
    { href: "/work", label: "Work", key: "work" },
    { href: "/music", label: "Music", key: "music" },
  ];

  const navLinkClass = (key: NavItem) =>
    key === activeNav
      ? "text-black"
      : "transition-all duration-200 hover:text-black hover:tracking-wide";

  return (
    <main className="min-h-screen md:h-screen flex flex-col px-6">
      <div className="max-w-[900px] w-full mx-auto flex flex-col md:h-full">
        {/* Header */}
        <header className="pt-8 md:pt-16 pb-4 md:pb-6">
          <div className="flex items-center gap-3">
            <AvatarPopup />
            <div>
              <h1 className="text-[13px] font-semibold leading-snug">
                Daniel Brunsdon
              </h1>
              <p className="text-[13px] leading-snug text-neutral-400">
                Strategic Operator — AI, Developer Platforms, Growth
              </p>
            </div>
          </div>
        </header>

        <hr className="border-neutral-200" />

        {/* Mobile nav */}
        <nav className="flex md:hidden gap-4 text-[13px] text-neutral-400 py-4 border-b border-neutral-200">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={navLinkClass(item.key)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Sidenav and Content */}
        <div className="flex-1 flex md:gap-16 md:overflow-hidden">
          {/* Sidenav (desktop) */}
          <nav className="hidden md:flex md:flex-col gap-2 text-[13px] text-neutral-400 pt-6 md:w-[100px] flex-shrink-0">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={navLinkClass(item.key)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Content */}
          <div className="flex-1 md:overflow-y-auto pt-6 pb-16">{children}</div>
        </div>
      </div>
    </main>
  );
}
