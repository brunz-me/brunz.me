import PageLayout from "@/components/PageLayout";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <PageLayout activeNav="about">
      <div className="space-y-6 text-[13px] leading-relaxed">
        <p>
          I am a Product and DevRel leader building human.tech, currently
          shipping agentic identity. Previously at Gitcoin and Twitter.
        </p>

        <p>
          From developer ecosystems around public conversation to
          privacy-preserving identity and now infrastructure for AI agents—I
          keep asking the same question: how can we build a more human internet
          without sacrificing privacy, security, and agency?
        </p>

        <p>
          When I'm not working, I'm vibe-coding agents that handle the boring
          stuff so I can spend more time biking, skiing, making music, rafting,
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
