import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-[rgba(255,107,107,0.1)] bg-black/90">
      <div className="container-width grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <p className="font-display text-lg font-bold tracking-tight text-[#f0f0f0]">
            <span style={{ color: "#ffffff" }}>Club</span>
            <span style={{ color: "#FF6B6B" }}>r</span>
          </p>
          <p className="font-body max-w-xs text-sm text-[#888888]">
            Student-sourced club info for Berkeley—confirm details with each org.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-display text-sm font-semibold text-[#FF6B6B]">Explore</h4>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/clubs">Club directory</FooterLink>
          <FooterLink href="/saved">Saved</FooterLink>
          <FooterLink href="/compare">Compare</FooterLink>
          <FooterLink href="/guide">The Guide</FooterLink>
          <FooterLink href="/links">Club links</FooterLink>
          <FooterLink href="/your-path">Your Path</FooterLink>
        </div>

        <div className="space-y-2">
          <h4 className="font-display text-sm font-semibold text-[#FF6B6B]">More</h4>
          <FooterLink href="/community">Community tips</FooterLink>
          <FooterLink href="/guide?tab=resources">Resources</FooterLink>
          <FooterLink href="/your-path?tab=first-years">First years</FooterLink>
        </div>

        <div className="space-y-3">
          <h4 className="font-display text-sm font-semibold text-[#FF6B6B]">Contribute</h4>
          <FooterLink href="/community">Submit a tip</FooterLink>
          <Link
            href="/guide?tab=resources"
            className="font-mono inline-flex h-8 items-center justify-center rounded-md border border-[rgba(255,107,107,0.3)] bg-transparent px-3 text-xs font-medium tracking-widest uppercase text-[#FF6B6B] transition-all hover:-translate-y-0.5 hover:bg-[rgba(255,107,107,0.1)]"
          >
            Suggest a resource
          </Link>
        </div>
      </div>

      <div className="border-t border-[rgba(255,107,107,0.08)] bg-black py-4">
        <p className="container-width font-mono text-xs tracking-widest uppercase text-[#888888]">
          © {new Date().getFullYear()} Clubr. Built for Berkeley students.
        </p>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-mono block text-xs tracking-widest uppercase text-[#888888] transition hover:text-[#FF6B6B]"
    >
      {children}
    </Link>
  );
}
