import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <PageLayout activeNav="about">
      <div className="space-y-6 text-[13px] leading-relaxed">
        <p>
          I&apos;m a Strategic Operator — the person companies bring in to turn
          a messy, undefined problem into a working system. Over 13 years:
          built developer platforms serving 5.9M users at Twitter, grew
          Gitcoin Passport 2,000% through a company spinout, and took
          human.tech from $0 to $1M ARR while stepping into a de facto Chief
          of Staff role during an acquisition.
        </p>

        <p>
          Most recently I&apos;ve been building production AI agent
          infrastructure hands-on — not prompts, actual agent systems with
          persistent memory, tool orchestration, and autonomous workflows —
          and using it to redesign how an entire company operates. That&apos;s
          the throughline: developer ecosystems, then privacy-preserving
          identity, now AI transformation. Same question every time — how do
          you build the system that makes the hard thing work.
        </p>

        <p className="text-neutral-400">
          <strong className="text-black">Open to new roles</strong> — product,
          ops, or AI transformation leadership at Series B–D companies.
          Reach out below or see{" "}
          <Link href="/work" className="underline hover:text-black">
            recent work
          </Link>
          .
        </p>

        <p>
          Outside of work: vibe-coding agents that handle the boring stuff so
          I have more time for biking, skiing, making music, rafting,
          climbing, hanging out with my girlfriend and cat, and adventuring
          around the Western USA and Canada in my truck camper.
        </p>

        <ul className="space-y-4 pt-4">
          <li>
            <ContactForm />
          </li>
          <li>
            <a
              href="https://x.com/brunz_____"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <span className="font-semibold group-hover:underline">
                Twitter
              </span>
              <p className="text-neutral-400">@brunz_____</p>
            </a>
          </li>
          <li>
            <a
              href="https://t.me/brunz_me"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <span className="font-semibold group-hover:underline">
                Telegram
              </span>
              <p className="text-neutral-400">@brunz_me</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/danbrunsdon/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <span className="font-semibold group-hover:underline">
                LinkedIn
              </span>
              <p className="text-neutral-400">/in/danbrunsdon</p>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/brunz-me"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <span className="font-semibold group-hover:underline">
                GitHub
              </span>
              <p className="text-neutral-400">@brunz-me</p>
            </a>
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}
