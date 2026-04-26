import Link from "next/link";

const nav = [
  { href: "#services", label: "Послуги" },
  { href: "#quality", label: "Якість" },
  { href: "#extras", label: "Додатково" },
  { href: "#gallery", label: "Галерея" },
  { href: "#contact", label: "Контакти" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-surface">
      <div className="mx-auto max-w-[980px] px-4 py-8 lg:px-0">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Link
            href="#hero"
            className="text-sm font-semibold text-foreground transition-opacity hover:opacity-70"
          >
            PCB Assembly
          </Link>
          
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/40">
          <p className="text-center text-xs text-muted">
            &copy; {new Date().getFullYear()} PCB Assembly. B2B послуги для виробників електроніки.
          </p>
        </div>
      </div>
    </footer>
  );
}
