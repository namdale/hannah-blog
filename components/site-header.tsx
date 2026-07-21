import Link from "next/link";

const MAIN = "https://www.hannahbeauty.co.nz";

const nav = [
  { label: "Home", href: MAIN },
  { label: "Services", href: `${MAIN}/services` },
  { label: "Academy", href: `${MAIN}/academy` },
  { label: "Blog", href: "/" },
];

export default function SiteHeader() {
  return (
    <header>
      {/* Red announcement banner — mirrors the main site */}
      <div className="bg-primary px-4 py-3 text-center text-white">
        <p className="text-sm font-bold uppercase tracking-wider2 sm:text-base">
          Hannah Beauty Academy
        </p>
        <p className="mt-1 text-sm font-light tracking-wide sm:text-base">
          Looking for an exciting new career in beauty?{" "}
          <a
            href={`${MAIN}/#book`}
            className="underline underline-offset-4 hover:opacity-80"
          >
            Contact us
          </a>{" "}
          to learn more.
        </p>
      </div>

      {/* Navigation */}
      <nav className="border-b border-ink/10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-4 sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-wider2 text-ink transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href={`${MAIN}/#book`}
            className="bg-primary px-6 py-2.5 text-sm uppercase tracking-wider2 text-white transition duration-300 hover:opacity-90 active:scale-95"
          >
            Book
          </a>
        </div>
      </nav>
    </header>
  );
}
