import { BadgeCheck } from "lucide-react";

const standards = [
  { code: "IPC-A-610", label: "Приймальність монтажу" },
  { code: "J-STD-001", label: "Вимоги до паяння" },
  { code: "IPC/WHMA-A-620", label: "Жгути та кабелі" },
] as const;

export function ComplianceBadges() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-titanium-dim">
        Відповідність та стандарти
      </p>
      <ul className="flex flex-wrap gap-2">
        {standards.map((s) => (
          <li
            key={s.code}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white/90 px-3 py-1.5 text-[11px] font-medium text-zinc-800 shadow-sm dark:border-titanium/15 dark:bg-obsidian-soft/80 dark:text-titanium-bright"
          >
            <BadgeCheck
              className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-amber-highlight"
              strokeWidth={1.5}
              aria-hidden
            />
            <span className="font-mono tracking-tight">{s.code}</span>
            <span className="hidden text-zinc-500 sm:inline dark:text-titanium-dim">
              · {s.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
