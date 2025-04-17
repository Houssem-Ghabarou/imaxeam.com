"use client";

import { Globe } from "lucide-react";
import { usePathname, useRouter } from "../../i18n/navigation";
import { Locale, routing } from "../../i18n/routing";

import { useParams } from "next/navigation";
import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [selectedLocale, setSelectedLocale] = useState(defaultValue);

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    setSelectedLocale(nextLocale);
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  return (
    <div className="relative inline-flex items-center">
      {/* <Globe className="absolute left-2 h-5 w-5 text-muted-foreground pointer-events-none" /> */}
      <img
        src="/languageselector.svg"
        alt="languageselector"
        className="absolute left-2 h-5 w-5 text-muted-foreground pointer-events-none"
      />
      <select
        id="locale-switcher"
        value={selectedLocale}
        onChange={onSelectChange}
        className="pl-8 w-[95px] rounded-2xl border border-[#222222] bg-transparent focus:ring-orange-100 focus:ring-offset-0"
        aria-label={label}
      >
        {routing.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
