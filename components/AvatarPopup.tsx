"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function AvatarPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-[38px] h-[38px] flex-shrink-0 rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-neutral-300 transition-all duration-200"
        aria-label="View full profile photo"
      >
        <Image
          src="/avatar-web.webp"
          alt="Daniel Brunsdon"
          width={38}
          height={38}
          className="rounded-full object-cover"
          priority
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute top-3 right-3 text-neutral-400 hover:text-black text-[18px] leading-none transition-colors"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="flex flex-col items-center text-center gap-4">
              <Image
                src="/avatar-full.webp"
                alt="Daniel Brunsdon"
                width={240}
                height={240}
                className="rounded-full object-cover"
              />

              <div className="space-y-1">
                <h2 className="text-[14px] font-semibold">Daniel Brunsdon</h2>
                <p className="text-[12px] text-neutral-500 leading-relaxed max-w-[260px]">
                  Product and DevRel leader building agentic identity at
                  human.tech. Previously Twitter and Gitcoin. Based in Denver.
                </p>
              </div>

              <a
                href="/avatar-full.webp"
                download="daniel-brunsdon.webp"
                className="text-[12px] text-neutral-400 hover:text-black transition-colors underline underline-offset-2"
              >
                Download full-res photo
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
