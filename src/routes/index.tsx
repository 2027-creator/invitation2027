import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import cornerTL from "@/assets/fl-tl.png.asset.json";
import cornerTR from "@/assets/fl-tr.png.asset.json";
import cornerBL from "@/assets/fl-bl.png.asset.json";
import bouquet from "@/assets/fl-bouquet.png.asset.json";
import garland from "@/assets/fl-garland.png.asset.json";
import swag from "@/assets/fl-garland.png.asset.json";
import sprig from "@/assets/fl-sprig.png.asset.json";
import eucalyptus from "@/assets/fl-euc.png.asset.json";
import swagWide from "@/assets/fl-garland.png.asset.json";
import gyp from "@/assets/t-gyp.png.asset.json";
import gyp2 from "@/assets/t-gyp2.png.asset.json";
import leaf1 from "@/assets/t-leaf1.png.asset.json";
import leaf2 from "@/assets/t-leaf2.png.asset.json";
import leaf3 from "@/assets/t-leaf3.png.asset.json";
import blue from "@/assets/t-blue.png.asset.json";
import blue2 from "@/assets/t-blue2.png.asset.json";
import bell from "@/assets/t-bell.png.asset.json";
import white from "@/assets/t-white.png.asset.json";
import forget from "@/assets/t-forget.png.asset.json";
import bouquet2 from "@/assets/t-bouquet2.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marijana & Aleksa — 02. 10. 2027." },
      { name: "description", content: "Pozivnica za venčanje Marijane i Alekse, 2. oktobra 2027. u Novom Sadu." },
      { property: "og:title", content: "Marijana & Aleksa — Venčanje" },
      { property: "og:description", content: "Subota, 2. oktobar 2027. · Novi Sad" },
    ],
  }),
  component: Invitation,
});

// Replace with your real Formspree form ID to receive RSVPs by email.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/TVOJ_FORMSPREE_ID";

type Lang = "sr" | "en";
const t = {
  sr: {
    open: "Otvorite pozivnicu",
    together: "Zajedno sa svojim porodicama",
    invite: "s radošću vas pozivaju da podelite sa njima dan njihovog venčanja",
    weekday: "Subota",
    date: "drugi oktobar dve hiljade dvadeset sedme",
    city: "Novi Sad",
    letterTag: "Dragi naši",
    letter:
      "Radujemo se što ćemo naš dan podeliti sa ljudima koje najviše volimo. Ponesite dobro raspoloženje, osmeh i udobne cipele — biće plesa do kasno u noć.",
    month: "Oktobar 2027",
    days: ["P", "U", "S", "Č", "P", "S", "N"],
    remaining: "dana do venčanja",
    program: "Program dana",
    ceremony: "Crkveno venčanje",
    church: "Hram Svetog Georgija",
    churchAddr: "Saborna crkva · Nikole Pašića, Novi Sad",
    reception: "Svečana proslava",
    venue: "Restoran — naziv sale",
    venueAddr: "Adresa restorana, Novi Sad",
    map: "Pogledajte mapu",
    rsvp: "Potvrda dolaska",
    rsvpNote: "Molimo vas da dolazak potvrdite najkasnije do 1. septembra 2027.",
    first: "Ime", last: "Prezime", email: "Email",
    attend: "Da li dolazite?", yes: "Rado dolazim", no: "Nažalost, ne mogu",
    transport: "Prevoz", own: "Sopstveni", needed: "Potreban mi je",
    guests: "Pratnja", alone: "Dolazim sam/a", withGuests: "Dolazim u pratnji",
    guestNames: "Imena pratilaca", guestNamesPh: "Marko i Jelena Marković",
    kids: "Godine dece (ako dolaze)", kidsPh: "npr. 5 i 8",
    extras: "Za našu knjigu uspomena",
    extrasNote: "Želimo da ovo veče bude sastavljeno od vas. Pesme koje nam pošaljete ući će na listu muzičara, da svako bar jednom zaigra uz nešto svoje. Recepte ćemo sakupiti u malu knjigu koju ćemo čuvati i iz koje ćemo kuvati godinama — da nas svaki obrok podseti na ljude koji su bili uz nas.",
    extrasName: "Vaše ime", extrasSend: "Pošaljite", extrasThanks: "Hvala! Vaš doprinos je sačuvan u našoj knjizi.",
    song: "Pesma koja vas diže na podijum", songPh: "Izvođač — naziv pesme",
    recipe: "Vaš omiljeni recept, za našu knjigu uspomena", recipePh: "Naziv jela, sastojci, poneka reč…",
    send: "Pošaljite potvrdu", sending: "Šaljemo…",
    thanks: "Hvala vam!", thanksNote: "Vaša potvrda je stigla do nas. Vidimo se 2. oktobra.",
    error: "Slanje nije uspelo. Pokušajte ponovo ili nam se javite direktno.",
    photos: "Vaše fotografije",
    photosNote: "Na dan svadbe skenirajte kod i podelite sa nama trenutke koje ste zabeležili.",
    scan: "Skenirajte kamerom telefona",
    closing: "Radujemo se vašem dolasku",
  },
  en: {
    open: "Open the invitation",
    together: "Together with their families",
    invite: "joyfully invite you to celebrate their wedding day",
    weekday: "Saturday",
    date: "the second of October, two thousand twenty-seven",
    city: "Novi Sad, Serbia",
    letterTag: "Dear friends & family",
    letter:
      "We are overjoyed to share our day with the people we love most. Bring your best mood, a warm smile and comfortable shoes — there will be dancing late into the night.",
    month: "October 2027",
    days: ["M", "T", "W", "T", "F", "S", "S"],
    remaining: "days to go",
    program: "The Day",
    ceremony: "Church Ceremony",
    church: "St. George's Cathedral",
    churchAddr: "Nikole Pašića, Novi Sad",
    reception: "Reception",
    venue: "Restaurant — venue name",
    venueAddr: "Venue address, Novi Sad",
    map: "View map",
    rsvp: "Kindly Reply",
    rsvpNote: "Please let us know by September 1st, 2027.",
    first: "First name", last: "Last name", email: "Email",
    attend: "Will you attend?", yes: "Joyfully accepts", no: "Regretfully declines",
    transport: "Transport", own: "My own", needed: "I need a ride",
    guests: "Guests", alone: "Just me", withGuests: "Bringing guests",
    guestNames: "Guest names", guestNamesPh: "Marko & Jelena Marković",
    kids: "Children's ages (if attending)", kidsPh: "e.g. 5 and 8",
    extras: "For our keepsake book",
    extrasNote: "We want this night to be made of you. The songs you send go straight to the band's list, so everyone dances to something of their own at least once. The recipes we'll gather into a little book to keep and cook from for years — so every meal reminds us of the people who stood beside us.",
    extrasName: "Your name", extrasSend: "Send", extrasThanks: "Thank you! Your contribution is safe in our book.",
    song: "The song that gets you dancing", songPh: "Artist — title",
    recipe: "Your favourite recipe, for our keepsake book", recipePh: "Dish, ingredients, a few words…",
    send: "Send reply", sending: "Sending…",
    thanks: "Thank you!", thanksNote: "Your reply has reached us. See you on October 2nd.",
    error: "Something went wrong. Please try again or contact us directly.",
    photos: "Your Photos",
    photosNote: "On the day, scan the code and share the moments you captured with us.",
    scan: "Scan with your phone camera",
    closing: "We can't wait to celebrate with you",
  },
} as const;

const WEDDING = new Date("2027-10-02T14:00:00+02:00");

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (el.classList.add("in"), io.disconnect()), {
      threshold: 0.15,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function Deco({ src, className }: { src: string; className: string }) {
  return <img src={src} alt="" aria-hidden="true" className={`pointer-events-none select-none ${className}`} />;
}

function Invitation() {
  const [lang, setLang] = useState<Lang>("sr");
  const [opened, setOpened] = useState(false);
  const L = t[lang];
  const open = () => {
    setOpened(true);
    requestAnimationFrame(() => document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" }));
  };

  return (
    <div className={`relative overflow-x-hidden ${opened ? "" : "h-svh overflow-hidden"}`}>
      {/* Language */}
      <div className="fixed right-4 top-4 z-50 flex gap-3 eyebrow border border-border bg-card/90 px-4 py-2 backdrop-blur">
        {(["sr", "en"] as const).map((k) => (
          <button
            key={k}
            onClick={() => setLang(k)}
            className={lang === k ? "text-primary" : "opacity-60 hover:opacity-100"}
          >
            {k === "sr" ? "SRB" : "ENG"}
          </button>
        ))}
      </div>

      {/* Cover */}
      <section className="relative flex h-svh items-center justify-center overflow-hidden px-6 py-16">
        <Deco src={cornerTL.url} className="sway absolute -left-10 -top-10 w-56 sm:w-80 md:w-[26rem]" />
        <Deco src={cornerTR.url} className="absolute -right-10 -top-8 w-48 sm:w-72 md:w-[24rem]" />
        <Deco src={cornerBL.url} className="absolute -bottom-10 -left-8 w-44 sm:w-64 md:w-80" />
        <Deco src={eucalyptus.url} className="absolute -bottom-16 right-2 w-24 rotate-12 opacity-90 sm:w-32" />

        <div className="relative max-w-xl text-center">
          <p className="eyebrow rise" style={{ animationDelay: ".1s" }}>{L.together}</p>
          <h1 className="rise mt-6 font-[family-name:var(--font-script)] text-6xl leading-[0.9] text-primary sm:text-8xl" style={{ animationDelay: ".3s" }}>
            Marijana
            <span className="my-2 block font-[family-name:var(--font-display)] text-3xl italic font-light text-accent">&amp;</span>
            Aleksa
          </h1>
          <p className="rise mx-auto mt-8 max-w-sm text-xl italic font-light leading-relaxed text-muted-foreground" style={{ animationDelay: ".5s" }}>
            {L.invite}
          </p>
          <div className="rise mt-10 flex items-center justify-center gap-3 sm:gap-5 font-[family-name:var(--font-label)] tracking-[0.25em] text-foreground" style={{ animationDelay: ".7s" }}>
            <span className="text-xs uppercase sm:text-sm">{L.weekday}</span>
            <span className="h-10 w-px bg-border" />
            <span className="whitespace-nowrap text-2xl tracking-[0.12em] sm:text-4xl">02 · 10 · 27</span>
            <span className="h-10 w-px bg-border" />
            <span className="whitespace-nowrap text-xs uppercase sm:text-sm">14 h</span>
          </div>
          <p className="eyebrow rise mt-6" style={{ animationDelay: ".8s" }}>{L.city}</p>
          {!opened && (
            <button onClick={open} className="btn-ink rise mt-10 inline-block" style={{ animationDelay: "1s" }}>
              {L.open}
            </button>
          )}
        </div>
      </section>

      {opened && <main>
        {/* Letter */}
        <section id="letter" className="relative px-6 py-28">
          <Deco src={leaf1.url} className="absolute left-2 top-16 w-16 -rotate-12 opacity-80 sm:left-10 sm:w-24" />
          <Deco src={blue.url} className="absolute right-4 bottom-10 w-14 rotate-12 sm:right-12 sm:w-20" />
          <Reveal className="mx-auto max-w-2xl text-center">
            <Deco src={garland.url} className="mx-auto mb-10 w-72 sm:w-96" />
            <p className="font-[family-name:var(--font-script)] text-4xl text-accent">{L.letterTag},</p>
            <p className="mt-6 text-2xl font-light leading-relaxed sm:text-[1.7rem]">{L.letter}</p>
            <p className="mt-8 font-[family-name:var(--font-script)] text-3xl text-primary">Marijana &amp; Aleksa</p>
          </Reveal>
        </section>

        {/* Date */}
        <section className="relative px-6 py-24">
          <Deco src={gyp.url} className="absolute -left-4 top-10 w-24 -rotate-6 opacity-90 sm:left-12 sm:w-36" />
          <Deco src={leaf2.url} className="absolute -right-2 bottom-6 w-20 rotate-[20deg] opacity-90 sm:right-16 sm:w-28" />
          <Deco src={forget.url} className="absolute right-10 top-16 hidden w-10 sm:block" />
          <Reveal className="mx-auto max-w-md">
            <Calendar lang={lang} />
          </Reveal>
        </section>

        {/* Program */}
        <section className="relative px-6 py-24">
          <Deco src={bell.url} className="absolute left-0 top-4 w-28 opacity-90 sm:left-8 sm:w-36" />
          <Deco src={white.url} className="absolute bottom-8 right-6 w-10 sm:w-14" />
          <Deco src={blue2.url} className="absolute bottom-24 left-8 hidden w-16 -rotate-12 md:block" />
          <Reveal className="mx-auto max-w-4xl">
            <div className="rule mb-16"><span className="eyebrow">{L.program}</span></div>
            <div className="grid gap-16 md:grid-cols-2 md:gap-0">
              <Event time="14:00" title={L.ceremony} place={L.church} addr={L.churchAddr} map={L.map} q="Saborna crkva Svetog Georgija Novi Sad" />
              <div className="md:border-l md:border-border">
                <Event time="16:00" title={L.reception} place={L.venue} addr={L.venueAddr} map={L.map} q="Novi Sad" />
              </div>
            </div>
          </Reveal>
        </section>

        {/* RSVP */}
        <section id="rsvp" className="relative px-6 py-28">
          <Deco src={bouquet.url} className="absolute -left-16 top-10 hidden w-72 -rotate-12 opacity-90 lg:block" />
          <Deco src={sprig.url} className="absolute -right-6 bottom-20 hidden w-56 rotate-12 lg:block" />
          <Reveal className="mx-auto max-w-xl">
            <div className="frame px-7 py-14 sm:px-14">
              <Deco src={swag.url} className="absolute -top-12 left-1/2 w-64 -translate-x-1/2" />
              <h2 className="text-center font-[family-name:var(--font-script)] text-6xl text-primary">{L.rsvp}</h2>
              <p className="mt-3 text-center italic text-muted-foreground">{L.rsvpNote}</p>
              <Rsvp lang={lang} />
            </div>
          </Reveal>
        </section>

        {/* Keepsake */}
        <section className="relative px-6 py-24">
          <Deco src={gyp2.url} className="absolute -left-6 top-0 w-28 rotate-6 sm:left-6 sm:w-40" />
          <Deco src={leaf3.url} className="absolute -right-6 top-24 w-24 -rotate-12 opacity-90 sm:right-10 sm:w-32" />
          <Deco src={forget.url} className="absolute bottom-10 left-10 w-10" />
          <Reveal className="mx-auto max-w-xl text-center">
            <div className="rule mb-8"><span className="eyebrow">{L.extras}</span></div>
            <p className="text-xl font-light italic leading-relaxed text-muted-foreground">{L.extrasNote}</p>
            <Extras lang={lang} />
          </Reveal>
        </section>

        {/* Photos */}
        <section className="relative px-6 py-24">
          <Deco src={leaf1.url} className="absolute left-4 bottom-10 w-16 rotate-[30deg] sm:left-20 sm:w-20" />
          <Deco src={blue.url} className="absolute right-4 top-10 w-14 -rotate-6 sm:right-20 sm:w-20" />
          <Deco src={white.url} className="absolute right-24 bottom-16 hidden w-10 sm:block" />
          <Reveal className="mx-auto max-w-md text-center">
            <div className="rule mb-8"><span className="eyebrow">{L.photos}</span></div>
            <p className="text-xl font-light italic leading-relaxed text-muted-foreground">{L.photosNote}</p>
            <div className="frame mx-auto mt-10 inline-block p-5">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=360x360&margin=0&color=46607a&bgcolor=fbfbf7&data=https://marijanaialeksa.com"
                alt="QR"
                className="h-44 w-44"
              />
            </div>
            <p className="eyebrow mt-6">{L.scan}</p>
          </Reveal>
        </section>

        {/* Closing */}
        <footer className="relative overflow-hidden px-6 pb-20 pt-24 text-center">
          <Deco src={bouquet2.url} className="absolute -left-10 bottom-0 w-40 rotate-12 opacity-95 sm:left-4 sm:w-56" />
          <Deco src={bouquet.url} className="absolute -right-10 bottom-0 w-40 -rotate-12 opacity-95 sm:right-4 sm:w-56" />
          <Deco src={gyp.url} className="absolute left-1/4 top-6 hidden w-20 -rotate-12 md:block" />
          <Deco src={blue2.url} className="absolute right-1/4 top-10 hidden w-16 md:block" />
          <Reveal className="relative">
            <p className="text-2xl italic font-light text-muted-foreground">{L.closing}</p>
            <p className="mt-4 font-[family-name:var(--font-script)] text-6xl text-primary sm:text-7xl">Marijana &amp; Aleksa</p>
            <p className="eyebrow mt-6">02 · 10 · 2027</p>
            <Deco src={swagWide.url} className="mx-auto mt-12 w-80 sm:w-[28rem]" />
          </Reveal>
        </footer>
      </main>}
    </div>
  );
}

function Calendar({ lang }: { lang: Lang }) {
  const L = t[lang];
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => {
    setDays(Math.max(0, Math.ceil((WEDDING.getTime() - Date.now()) / 86400000)));
  }, []);
  // October 1, 2027 is a Friday → 4 empty cells in a Monday-first week.
  const cells: (number | null)[] = [...Array(4).fill(null), ...Array.from({ length: 31 }, (_, i) => i + 1)];
  return (
    <div className="text-center">
      <p className="eyebrow">{L.month}</p>
      <div className="mt-8 grid grid-cols-7 gap-y-3 text-lg">
        {L.days.map((d, i) => (
          <span key={i} className="eyebrow !tracking-[0.15em]">{d}</span>
        ))}
        {cells.map((d, i) =>
          d === 2 ? (
            <span key={i} className="relative flex items-center justify-center text-primary">
              <svg viewBox="0 0 60 50" className="absolute -inset-x-1 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+0.5rem)] text-primary" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M30 6C14 4 4 14 6 26c2 13 16 19 28 18 14-1 22-10 20-22C52 10 40 4 26 7" strokeLinecap="round" />
              </svg>
              <span className="relative font-medium">2</span>
            </span>
          ) : (
            <span key={i} className={d ? "text-foreground/80" : ""}>{d ?? ""}</span>
          ),
        )}
      </div>
      {days !== null && (
        <p className="mt-12">
          <span className="block font-[family-name:var(--font-label)] text-5xl text-primary">{days}</span>
          <span className="eyebrow mt-2 block">{L.remaining}</span>
        </p>
      )}
    </div>
  );
}

function Event(p: { time: string; title: string; place: string; addr: string; map: string; q: string }) {
  return (
    <div className="px-4 text-center">
      <p className="font-[family-name:var(--font-label)] text-4xl tracking-[0.1em] text-accent">{p.time}</p>
      <h3 className="mt-4 font-[family-name:var(--font-script)] text-4xl text-primary">{p.title}</h3>
      <p className="mt-4 text-xl">{p.place}</p>
      <p className="mt-1 italic text-muted-foreground">{p.addr}</p>
      <a
        className="btn-line mt-6 inline-block"
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.q)}`}
        target="_blank"
        rel="noreferrer"
      >
        {p.map}
      </a>
    </div>
  );
}

function Rsvp({ lang }: { lang: Lang }) {
  const L = t[lang];
  const [attend, setAttend] = useState(true);
  const [ride, setRide] = useState(false);
  const [guests, setGuests] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = new FormData(e.currentTarget);
    data.set("Dolazak", attend ? "Da" : "Ne");
    data.set("Prevoz", ride ? "Potreban" : "Sopstveni");
    data.set("Pratnja", guests ? "Da" : "Ne");
    try {
      const r = await fetch(FORMSPREE_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
      setState(r.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done")
    return (
      <div className="py-12 text-center">
        <p className="font-[family-name:var(--font-script)] text-5xl text-accent">{L.thanks}</p>
        <p className="mt-4 text-xl italic">{L.thanksNote}</p>
      </div>
    );

  const Label = ({ children }: { children: ReactNode }) => <span className="eyebrow block">{children}</span>;
  const Toggle = ({ v, set, a, b }: { v: boolean; set: (x: boolean) => void; a: string; b: string }) => (
    <div className="mt-3 grid grid-cols-2 gap-3">
      <button type="button" className="choice" data-on={v} onClick={() => set(true)}>{a}</button>
      <button type="button" className="choice" data-on={!v} onClick={() => set(false)}>{b}</button>
    </div>
  );

  return (
    <form onSubmit={submit} className="mt-12 space-y-9">
      <div className="grid gap-9 sm:grid-cols-2">
        <label><Label>{L.first}</Label><input className="field" name="Ime" required /></label>
        <label><Label>{L.last}</Label><input className="field" name="Prezime" required /></label>
      </div>
      <label className="block"><Label>{L.email}</Label><input className="field" type="email" name="Email" required /></label>

      <div><Label>{L.attend}</Label><Toggle v={attend} set={setAttend} a={L.yes} b={L.no} /></div>

      {attend && (
        <>
          <div><Label>{L.transport}</Label><Toggle v={!ride} set={(x) => setRide(!x)} a={L.own} b={L.needed} /></div>
          <div><Label>{L.guests}</Label><Toggle v={!guests} set={(x) => setGuests(!x)} a={L.alone} b={L.withGuests} /></div>
          {guests && (
            <div className="space-y-9">
              <label className="block"><Label>{L.guestNames}</Label><input className="field" name="Imena_Pratnje" placeholder={L.guestNamesPh} /></label>
              <label className="block"><Label>{L.kids}</Label><input className="field" name="Godine_Dece" placeholder={L.kidsPh} /></label>
            </div>
          )}
        </>
      )}

      {state === "error" && <p className="text-center italic text-destructive">{L.error}</p>}
      <div className="pt-2 text-center">
        <button type="submit" className="btn-ink" disabled={state === "sending"}>
          {state === "sending" ? L.sending : L.send}
        </button>
      </div>
    </form>
  );
}

function Extras({ lang }: { lang: Lang }) {
  const L = t[lang];
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = new FormData(e.currentTarget);
    data.set("Tip", "Knjiga uspomena");
    try {
      const r = await fetch(FORMSPREE_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
      setState(r.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }
  if (state === "done") return <p className="mt-10 font-[family-name:var(--font-script)] text-4xl text-accent">{L.extrasThanks}</p>;
  return (
    <form onSubmit={submit} className="mt-10 space-y-8 text-left">
      <label className="block"><span className="eyebrow block">{L.extrasName}</span><input className="field" name="Ime" required /></label>
      <label className="block"><span className="eyebrow block">{L.song}</span><input className="field" name="Muzicka_Zelja" placeholder={L.songPh} /></label>
      <label className="block"><span className="eyebrow block">{L.recipe}</span><textarea className="field resize-none" rows={4} name="Omiljeni_Recept" placeholder={L.recipePh} /></label>
      {state === "error" && <p className="text-center italic text-destructive">{L.error}</p>}
      <div className="text-center"><button type="submit" className="btn-ink" disabled={state === "sending"}>{state === "sending" ? L.sending : L.extrasSend}</button></div>
    </form>
  );
}
