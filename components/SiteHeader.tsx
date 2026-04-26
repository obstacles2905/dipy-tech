import Link from "next/link";

const nav = [
  { href: "#services", label: "Послуги" },
  { href: "#quality", label: "Якість" },
  { href: "#extras", label: "Додатково" },
  { href: "#gallery", label: "Галерея" },
  { href: "#contact", label: "Контакти" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          PCB<span className="text-accent">Assembly</span>
        </Link>
        <nav
          className="flex max-w-[min(100%,28rem)] flex-1 items-center gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:max-w-none md:flex-none [&::-webkit-scrollbar]:hidden"
          aria-label="Головна навігація"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-background hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
        >
          Заявка
        </Link>
      </div>
    </header>
  );
}
