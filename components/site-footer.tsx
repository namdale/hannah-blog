const MAIN = "https://www.hannahbeauty.co.nz";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center">
        <p className="font-display text-lg uppercase tracking-wider2">
          Hannah Beauty
        </p>
        <p className="mt-2 text-sm font-light tracking-wide text-muted">
          Mt Eden, Auckland 1024
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm uppercase tracking-wider2">
          <a
            href="https://www.instagram.com/hannah_beauty_nz/"
            className="underline underline-offset-4 hover:text-primary"
          >
            @hannah_beauty_nz
          </a>
          <a
            href="https://www.instagram.com/hannah_beauty_smp/"
            className="underline underline-offset-4 hover:text-primary"
          >
            @hannah_beauty_smp
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-wider2 text-muted">
          <a href={MAIN} className="hover:text-primary">
            Main site
          </a>
          <a href={`${MAIN}/academy`} className="hover:text-primary">
            Academy
          </a>
          <a href={`${MAIN}/book`} className="hover:text-primary">
            Book appointment
          </a>
        </div>
        <p className="mt-8 text-xs font-light text-muted">
          © {new Date().getFullYear()} Hannah Beauty Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
