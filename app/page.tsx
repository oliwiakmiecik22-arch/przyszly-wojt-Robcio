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
      bullets: ["Remonty dróg lokalnych", "Chodniki", "Oświetlenie"],
    },
    {
      title: "Rodziny i edukacja",
      bullets: ["Szkoły", "Zajęcia", "Wsparcie rodzin"],
    },
    {
      title: "Seniorzy",
      bullets: ["Dostęp do usług", "Integracja", "Wsparcie"],
    },
    {
      title: "Dialog",
      bullets: ["Spotkania", "Komunikacja", "Dostępność"],
    },
  ];

  const updates = [
    {
      date: "Maj 2026",
      title: "Spotkania",
      text: "Rozmowy z mieszkańcami.",
    },
    {
      date: "Czerwiec 2026",
      title: "Program",
      text: "Prezentacja programu.",
    },
    {
      date: "Lipiec 2026",
      title: "Konsultacje",
      text: "Otwarte konsultacje.",
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <header className="fixed top-0 w-full bg-black text-white p-4 z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <span>Twój przyszły wójt</span>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="pt-20 max-w-6xl mx-auto px-4">

        {/* HERO */}
        <section id="start" className="py-10 grid md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-4xl font-bold">
              Tokarnia może więcej
            </h1>
            <p className="mt-4">
              Chcę gminy, która działa sprawnie i słucha mieszkańców.
            </p>
          </div>

          <div>
            <img
              src="/Robcio.JPG"
              alt="Kandydat"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* PRIORYTETY */}
        <section className="grid md:grid-cols-3 gap-4">
          {priorities.map((item) => (
            <div key={item.title} className="bg-white p-4 rounded">
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </section>

        {/* PROGRAM */}
        <section id="program" className="mt-10 grid md:grid-cols-2 gap-4">
          {programCards.map((card) => (
            <div key={card.title} className="bg-white p-4 rounded">
              <h3 className="font-bold">{card.title}</h3>
              <ul>
                {card.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* AKTUALNOŚCI */}
        <section id="aktualnosci" className="mt-10 grid md:grid-cols-3 gap-4">
          {updates.map((item) => (
            <div key={item.title} className="bg-white p-4 rounded">
              <p>{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </section>

        {/* KONTAKT */}
        <section id="kontakt" className="mt-10">
          <form className="bg-white p-4 rounded flex flex-col gap-4">
            <input placeholder="Imię" className="border p-2" />
            <input placeholder="Email" className="border p-2" />
            <textarea placeholder="Wiadomość" className="border p-2" />
            <button className="bg-black text-white p-2 rounded">
              Wyślij
            </button>
          </form>
        </section>

      </main>
    </div>
  );
}