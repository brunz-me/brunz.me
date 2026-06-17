"use client";

import { useState, useEffect, useCallback, useRef, FormEvent } from "react";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    setStatus("idle");
    setFormData({ name: "", email: "", message: "" });
    triggerRef.current?.focus();
  }, []);

  // Escape to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;
    firstInputRef.current?.focus();

    const modal = modalRef.current;
    const focusable = modal.querySelectorAll<HTMLElement>(
      'input, textarea, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        className="group block text-left"
      >
        <span className="font-semibold group-hover:underline">Contact</span>
        <p className="text-neutral-400">Send me a message</p>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Contact form"
        >
          <div
            ref={modalRef}
            className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute top-3 right-3 text-neutral-400 hover:text-black text-[18px] leading-none transition-colors"
              aria-label="Close"
            >
              &times;
            </button>

            {status === "sent" ? (
              <div className="text-center py-8 space-y-3">
                <p className="text-[14px] font-semibold">Message sent</p>
                <p className="text-[12px] text-neutral-500">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={close}
                  className="mt-4 text-[12px] text-neutral-400 hover:text-black transition-colors underline underline-offset-2"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-[14px] font-semibold">Get in touch</h2>

                <div className="space-y-3">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[12px] text-neutral-500 mb-1"
                    >
                      Name
                    </label>
                    <input
                      ref={firstInputRef}
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((d) => ({ ...d, name: e.target.value }))
                      }
                      className="w-full rounded border border-neutral-200 px-3 py-2 text-[13px] outline-none focus:border-neutral-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[12px] text-neutral-500 mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((d) => ({ ...d, email: e.target.value }))
                      }
                      className="w-full rounded border border-neutral-200 px-3 py-2 text-[13px] outline-none focus:border-neutral-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-[12px] text-neutral-500 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((d) => ({ ...d, message: e.target.value }))
                      }
                      className="w-full rounded border border-neutral-200 px-3 py-2 text-[13px] outline-none focus:border-neutral-400 transition-colors resize-none"
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-[12px] text-red-500">
                    Something went wrong. You can also reach me at{" "}
                    <a
                      href="mailto:dan.brunsdon@gmail.com"
                      className="underline"
                    >
                      dan.brunsdon@gmail.com
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded bg-black text-white py-2 text-[13px] font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>

                <p className="text-[11px] text-neutral-400 text-center">
                  Or email directly:{" "}
                  <a
                    href="mailto:dan.brunsdon@gmail.com"
                    className="underline underline-offset-2 hover:text-neutral-600 transition-colors"
                  >
                    dan.brunsdon@gmail.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
