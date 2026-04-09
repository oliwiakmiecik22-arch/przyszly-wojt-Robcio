"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Start", href: "#start" },
    { label: "O mnie", href: "#o-mnie" },
    { label: "Program", href: "#program" },
    { label: "Dla mieszkańców", href: "#mieszkancy" },
    { label: "Aktualności", href: "#aktualnosci" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  const priorities = [
    {
      title: "Lepsze drogi i bezpieczeństwo",
      text: "Więcej chodników, lepsze oświetlenie i plan remontów oparte na realnych potrzebach mieszkańców.",
    },
    {
      title: "Wsparcie rodzin i młodych",
      text: "Silniejsze szkoły, rozwój zajęć dla dzieci i konkretne rozwiązania, które pomagają młodym zostać w gminie.",
    },
    {
      title: "Rozwój lokalny bez pustych obietnic",
      text: "Mądre inwestycje, skuteczne pozyskiwanie środków i większa przejrzystość działań samorządu.",
    },
  ];

  const programCards = [
    {
      title: "Infrastruktura",
      bullets: [
        "Remonty dróg lokalnych",
        "Chodniki przy newralgicznych odcinkach",
        "Więcej oświetlenia i bezpieczeństwa",
      ],
    },
    {
      title: "Rodziny i edukacja",
      bullets: [
        "Wsparcie szkół i przedszkoli",
        "Zajęcia dodatkowe dla dzieci",
        "Większa dostępność oferty dla rodzin",
      ],
    },
    {
      title: "Seniorzy",
      bullets: [
        "Łatwiejszy dostęp do usług",
        "Lokalne inicjatywy i integracja",
        "Większa troska o codzienne potrzeby",
      ],
    },
    {
      title: "Dialog z mieszkańcami",
      bullets: [
        "Regularne spotkania w sołectwach",
        "Jasna komunikacja decyzji",
        "Większa dostępność wójta i urzędu",
      ],
    },
  ];

  const residentPoints = [
    "Szybszy kontakt z urzędem i lepszy przepływ informacji",
    "Jasny harmonogram najważniejszych inwestycji",
    "Większa obecność władz w każdej miejscowości",
    "Decyzje oparte na potrzebach mieszkańców, nie na polityce",
  ];

  const updates = [
    {
      date: "Maj 2026",
      title: "Spotkania z mieszkańcami w każdej miejscowości",
      text: "Rozmowy o najpilniejszych potrzebach i zbieranie konkretnych pomysłów do planu działania.",
    },
    {
      date: "Czerwiec 2026",
      title: "Prezentacja programu dla rodzin i seniorów",
      text: "Rozwiązania skupione na jakości życia, codziennym komforcie i większym bezpieczeństwie.",
    },
    {
      date: "Lipiec 2026",
      title: "Otwarte konsultacje programu inwestycyjnego",
      text: "Priorytety ustalane wspólnie z mieszkańcami, transparentnie i bez zbędnych obietnic.",
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-slate-900">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <header className="fixed inset-x-0 top-0 z-[100] border-b border-black/5 bg-[#111315]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#start"
            onClick={closeMenu}
            className="text-base font-semibold tracking-tight text-white sm:text-lg"
          >
            Twój przyszły wójt - Robert Rychlicki
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/75 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#kontakt"
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:inline-flex"
            >
              Napisz do mnie
            </a>

            <button
              type="button"
              aria-label="Otwórz menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white md:hidden"
            >
              <span className="text-2xl leading-none">{menuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t border-white/10 bg-[#111315] transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={closeMenu}
              className="mt-2 inline-flex justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-900"
            >
              Napisz do mnie
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-24 sm:pt-28">
        <section id="start" className="px-4 pb-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] bg-[#c8dbe5]">
            <div className="grid items-stretch gap-0 lg:grid-cols-2">
              <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
                <div className="mb-6 inline-flex w-fit rounded-full bg-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white sm:text-[11px]">
                  Twój przyszły wójt
                </div>

                <h1 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Tokarnia może więcej.
                </h1>

                <p className="mt-5 max-w-lg text-sm leading-7 text-slate-700 sm:text-base">
                  Chcę gminy, która działa sprawnie, słucha mieszkańców i inwestuje tam,
                  gdzie naprawdę trzeba. Bez pustych sloganów. Z konkretnym planem,
                  spokojnym stylem działania i realnym kontaktem z ludźmi.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#program"
                    className="flex h-12 min-w-[190px] items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Poznaj mój program
                  </a>

                  <a
                    href="#o-mnie"
                    className="flex h-12 min-w-[190px] items-center justify-center rounded-full border border-slate-400 px-6 text-sm font-semibold text-slate-900 transition hover:bg-black/5"
                  >
                    Dowiedz się więcej
                  </a>
                </div>
              </div>

<div className="grid lg:grid-cols-[1fr_1.3fr] items-stretch">
  
  {/* LEWA STRONA */}
  <div className="flex flex-col justify-center px-10 py-14">
    ...
  </div>

  {/* PRAWA STRONA */}
  <div className="flex">
    <img
      src="/Robcio.JPG"
      alt="Kandydat na wójta"
      className="h-full w-full object-cover object-[10%_center]"
    />
  </div>

</div>
            </div>
          </div>
        </section>
        <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {priorities.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="o-mnie" className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.25rem] bg-white px-6 py-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  O mnie
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Samorząd zaczyna się od słuchania ludzi.
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-700">
                  Jestem kandydatem, który stawia na uczciwy dialog, przejrzyste decyzje
                  i skuteczne działanie. Chcę być wójtem obecnym wśród mieszkańców —
                  nie tylko w czasie kampanii, ale każdego dnia.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Ta strona ma pokazać prosty styl działania: mniej chaosu, więcej
                  konkretów, większy porządek w inwestycjach i prawdziwy kontakt z ludźmi.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-slate-50 p-5">
                  <p className="text-sm font-medium text-slate-500">Priorytet</p>
                  <p className="mt-3 text-lg font-semibold text-slate-900">
                    Mieszkańcy na pierwszym miejscu
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-slate-50 p-5">
                  <p className="text-sm font-medium text-slate-500">Styl działania</p>
                  <p className="mt-3 text-lg font-semibold text-slate-900">
                    Spokojnie i konkretnie
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-slate-50 p-5 sm:col-span-2">
                  <p className="text-sm font-medium text-slate-500">Cel</p>
                  <p className="mt-3 text-lg font-semibold text-slate-900">
                    Nowoczesna, uporządkowana i dobrze zarządzana gmina
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="program" className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.25rem] bg-white px-6 py-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Program
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Plan dla gminy oparty na codziennych potrzebach.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                Program powinien być jasny, spokojny i wiarygodny. Bez przeładowania.
                Bez wielkich haseł. Z konkretnymi obszarami działań, które mieszkańcy
                rozumieją od razu.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {programCards.map((card) => (
                <div key={card.title} className="rounded-[1.75rem] bg-slate-50 p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mieszkancy" className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.25rem] bg-[#111315] px-6 py-8 text-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                  Dla mieszkańców
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Gmina, która jest bliżej ludzi.
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-white/75">
                  Ta sekcja pokazuje, że rozumiesz codzienne sprawy mieszkańców:
                  drogi, bezpieczeństwo, kontakt z urzędem, edukację, sprawy seniorów,
                  młodych rodzin i lokalnych inicjatyw.
                </p>
              </div>

              <div className="rounded-[1.75rem] bg-white/5 p-6">
                <ul className="space-y-4 text-sm leading-7 text-white/85">
                  {residentPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-white" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="aktualnosci" className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.25rem] bg-white px-6 py-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Aktualności
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Bądźmy w stałym kontakcie.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                Tutaj możesz dodawać relacje ze spotkań, krótkie podsumowania działań
                i informacje o kolejnych wydarzeniach kampanii.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {updates.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] bg-slate-50 p-6"
                >
                  <p className="text-sm font-semibold text-slate-500">{item.date}</p>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="px-4 py-8 pb-12 sm:px-6 sm:py-10 sm:pb-14 lg:px-8 lg:pb-16">
          <div className="mx-auto max-w-7xl rounded-[2.25rem] bg-white px-6 py-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Kontakt
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Masz pytania? Chcesz dowiedzieć się więcej o mnie? Pisz śmiało.
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-600">
                  To nie jest chatbot. To miejsce na prawdziwy kontakt z mieszkańcami.
                </p>
              </div>

              <form className="rounded-[1.75rem] bg-slate-50 p-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      placeholder="Wpisz swoje imię"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-slate-400"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Adres e-mail
                    </label>
                    <input
                      type="email"
                      placeholder="twoj@email.pl"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-slate-400"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Temat
                  </label>
                  <input
                    type="text"
                    placeholder="O czym chcesz napisać?"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-slate-400"
                  />
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Wiadomość
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Napisz swoją wiadomość..."
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}