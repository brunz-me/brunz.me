import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen px-6 py-12 md:py-16">
      <div className="max-w-[500px] mx-auto">
        {/* Avatar */}
        <Link href="/" className="block w-8 h-8 mb-5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 overflow-hidden" />
        </Link>

        {/* Name */}
        <h1 className="text-[15px] font-semibold leading-snug">brunz</h1>

        {/* Title */}
        <p className="text-[15px] leading-snug mb-8">
          DevRel & Product Lead
        </p>

        {/* Navigation */}
        <nav className="flex gap-4 text-[15px] text-neutral-400 mb-10">
          <Link href="/about" className="text-black">About</Link>
          <Link href="/connect" className="hover:text-black transition-colors">Connect</Link>
          <Link href="/features" className="hover:text-black transition-colors">Features</Link>
        </nav>

        {/* Content */}
        <div className="space-y-6 text-[15px] leading-relaxed">
          <p>
            I&apos;m passionate about enabling developer communities and building great products.
            My work sits at the intersection of developer relations, product leadership,
            and community building.
          </p>

          <p>
            I focus on creating tools and experiences that help developers succeed,
            whether through documentation, SDKs, or community programs.
          </p>

          <p>
            When I&apos;m not working, you&apos;ll find me exploring new technologies,
            contributing to open source, or connecting with the developer community.
          </p>
        </div>
      </div>
    </main>
  )
}
