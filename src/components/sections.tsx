import { useLanguage } from "@/lib/i18n";

export function Wave({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 12"
      aria-hidden="true"
      className={`h-3 w-24 text-ocean ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <path d="M2 8c6-6 12-6 18 0s12 6 18 0 12-6 18 0 12 6 18 0 12-6 18 0 12 6 18 0" />
    </svg>
  );
}

export function SectionTitle({
  kicker,
  title,
}: {
  kicker?: string;
  title: string;
}) {
  return (
    <header className="mb-8 text-center">
      {kicker && <p className="script-accent text-lg">{kicker}</p>}
      <h2 className="mt-1 text-3xl sm:text-4xl">{title}</h2>
      <div className="mt-3 flex justify-center">
        <Wave />
      </div>
    </header>
  );
}

type MenuItem = {
  readonly name: string;
  readonly description?: string;
  readonly price: string;
};
type MenuCategory = {
  readonly title: string;
  readonly note?: string;
  readonly items: readonly MenuItem[];
};

export function MenuSection({
  title,
  categories,
}: {
  title: string;
  categories: readonly MenuCategory[];
}) {
  return (
    <>
      <SectionTitle title={title} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="surface-card flex flex-col p-5 text-left sm:p-6"
          >
            <h3 className="mb-1 text-lg font-semibold tracking-wide">
              {cat.title}
            </h3>
            {cat.note && (
              <p className="mb-3 text-xs italic text-muted-foreground">
                {cat.note}
              </p>
            )}
            <ul className="space-y-3">
              {cat.items.map((item) => (
                <li key={item.name} className="flex flex-col gap-0.5">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-medium leading-snug">{item.name}</span>
                    {item.price && (
                      <span className="shrink-0 text-sm font-semibold text-champagne-deep">
                        {item.price}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <span className="text-sm leading-snug text-muted-foreground">
                      {item.description}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export function LangToggle({ scrolled = true }: { scrolled?: boolean }) {
  const { lang, setLang, t } = useLanguage();
  const base =
    "rounded-full px-2.5 py-1 text-xs font-semibold tracking-[0.12em] transition-colors";
  return (
    <div
      aria-label={t.langLabel}
      className={`flex items-center gap-0.5 rounded-full p-0.5 ${
        scrolled ? "bg-secondary" : "bg-white/20 backdrop-blur-sm"
      }`}
    >
      {(["el", "en"] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`${base} ${
              active
                ? "bg-ocean text-accent-foreground"
                : scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/90 hover:text-white"
            }`}
          >
            {code === "el" ? "ΕΛ" : "EN"}
          </button>
        );
      })}
    </div>
  );
}
