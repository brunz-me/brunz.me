import PageLayout from '@/components/PageLayout'

const links = [
  {
    label: 'Twitter',
    href: 'https://x.com/brunz_____',
    description: '@brunz_____',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/danbrunsdon/',
    description: '/in/danbrunsdon',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/brunz-me',
    description: '@brunz-me',
  },
]

export default function Connect() {
  return (
    <PageLayout activeNav="about">
      <div className="space-y-6 text-[13px]">
        <p className="leading-relaxed">
          Feel free to reach out if you'd like to collaborate, have a question,
          or just want to say hello.
        </p>

        <ul className="space-y-4 pt-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <span className="font-semibold group-hover:underline">{link.label}</span>
                <p className="text-neutral-400">{link.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  )
}
