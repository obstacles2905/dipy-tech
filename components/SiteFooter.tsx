export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Ручний монтаж плат. B2B послуги для виробників
          електроніки.
        </p>
        <p className="text-sm text-muted">
          Відповідність міжнародним стандартам та протоколам контролю якості.
        </p>
      </div>
    </footer>
  );
}
