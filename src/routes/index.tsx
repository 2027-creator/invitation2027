import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from "react";

import waxSeal from "@/assets/wax.png";
import naslovna from "@/assets/naslovna.png";
import naslovnaMobile from "@/assets/naslovna-mobile0.png";

import openingDesktop from "@/assets/invitation-desktop2.png";
import openingMobile from "@/assets/invitation2.png";

import sectionBackground from "@/assets/section-background.png"
import sectionBackgroundDesktop from "@/assets/section-background-desktop.png"

import wishesGar1 from "@/assets/wishes-garland1.png"
import wishesGar2 from "@/assets/wishes-garland2.png"
import wishesGar5 from "@/assets/wishes-garland5.png"
import wishesGar7 from "@/assets/wishes-garland7.png"

import photoRope from "@/assets/photo-garland0.png";
import calendarGarland from "@/assets/calendar-garland.png"

import photo1 from "@/assets/photo-garland1.png";
import photo2 from "@/assets/photo-garland2.png";
import photo3 from "@/assets/photo-garland3.png";
import photo4 from "@/assets/photo-garland4.png";

import clip1 from "@/assets/photo-stipaljka1.png";
import clip2 from "@/assets/photo-stipaljka2.png";
import clip3 from "@/assets/photo-stipaljka3.png";
import clip4 from "@/assets/photo-stipaljka4.png";

import weddingQR from "@/assets/qrcode-ivory2.png";

import closingLandscape from "@/assets/san-sebastian-footer2.png"

import weddingMusic from "@/assets/wedding-music.mp3";

import { Music2, VolumeX } from "lucide-react";

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

type Lang = "sr" | "en";
const t = {
  sr: {
    volume: "Jačina muzike",
    muteMusic: "Isključite muziku",
    unmuteMusic: "Uključite muziku",
    openingPromptLine1: "Otvorite",
    openingPromptLine2: "pozivnicu",
    phoneOptional: "Broj telefona (opciono)",
    additionalGuests: "Osobe koje dolaze sa vama",
    guestNumber: "Osoba",
    removeGuest: "Ukloni",
    isChild: "Da li je osoba dete?",
    adult: "Odrasla osoba",
    child: "Dete",
    childAge: "Godine deteta",
    addGuest: "Dodaj osobu",
    attendingTitle: "Vidimo se na slavlju!",
    decliningTitle: "Hvala što ste nam javili!",
    attendingNote: "Jedva čekamo da zajedno stvaramo nove uspomene!",
    decliningNote: "Žao nam je što nećete biti sa nama, ali se nadamo da ćemo uskoro imati priliku da se vidimo.",
    anotherRsvp: "Pošaljite još jednu potvrdu",
    swingPhoto: "Zaljuljajte fotografiju",
    qrAlt: "QR kod za album sa fotografijama",
    open: "Otvorite pozivnicu",
    heroLine1: "Iza nas su godine zajedničkih avantura, a ona najveća tek počinje...",
    heroLine2: "Pozivamo vas da budete deo njenog početka!",
    month: "Oktobar 2027",
    days: ["P", "U", "S", "Č", "P", "S", "N"],
    remaining: "dan do venčanja",
    remaining2: "dana do venčanja",
    program: "Tok svečanosti",
    ceremony: "Crkveno venčanje",
    church: "Hram Svetog Georgija",
    churchAddr: "Saborna crkva · Nikole Pašića, Novi Sad",
    venue: "Vidikovac Restoran Kompleks",
    venueAddr: "Samarski put BB, Ledinci",
    gathering: "Okupljanje gostiju",
    civilWedding: "Građansko venčanje",
    map: "Pogledajte mapu",
    rsvp: "Potvrda dolaska",
    rsvpNote: "Molimo vas da dolazak potvrdite najkasnije do 1. septembra 2027.",
    first: "Ime",
    last: "Prezime",
    email: "Email",
    attend: "Da li dolazite?",
    yes: "Rado dolazim",
    no: "Nažalost, ne mogu",
    transport: "Prevoz",
    own: "Sopstveni",
    needed: "Potreban mi je",
    extras: "Za našu knjigu uspomena",
    extrasNote:
      "Želimo da ovo veče bude sastavljeno od vas. Pesme koje nam pošaljete ući će na listu muzičara, da svako bar jednom zaigra uz nešto svoje. Recepte ćemo sakupiti u malu knjigu koju ćemo čuvati i iz koje ćemo kuvati godinama — da nas svaki obrok podseti na ljude koji su bili uz nas.",
    extrasName: "Vaše ime i prezime",
    extrasSend: "Pošaljite",
    extrasThanks: "Hvala!",
    extrasThanksNote: "Vaš doprinos je sačuvan u našoj knjizi.",
    song: "Pesma koja vas diže na podijum",
    songPh: "Izvođač — naziv pesme",
    recipe: "Vaš omiljeni recept, za našu knjigu uspomena",
    recipePh: "Naziv jela, sastojci, poneka reč…",
    send: "Pošaljite potvrdu",
    sending: "Šaljemo…",
    error: "Slanje nije uspelo. Pokušajte ponovo ili nam se javite direktno.",
    photos: "Vaše fotografije",
    photosNote: "Na dan svadbe skenirajte kod i podelite sa nama trenutke koje ste zabeležili.",
    album: "Otvorite album sa fotografijama",
    scan: "Skenirajte QR kod ili kliknite na njega",
    closing: "Radujemo se vašem dolasku",
  },

  en: {
    volume: "Music volume",
    muteMusic: "Mute music",
    unmuteMusic: "Unmute music",
    openingPromptLine1: "Open the",
    openingPromptLine2: "invitation",
    phoneOptional: "Phone number (optional)",
    additionalGuests: "Additional guests",
    guestNumber: "Guest",
    removeGuest: "Remove",
    isChild: "Is this guest a child?",
    adult: "Adult",
    child: "Child",
    childAge: "Child's age",
    addGuest: "Add a guest",
    attendingTitle: "See you at the celebration!",
    decliningTitle: "Thank you for letting us know!",
    attendingNote: "We can't wait to make new memories together!",
    decliningNote: "We're sorry you won't be joining us, but we hope to see you soon.",
    anotherRsvp: "Submit another RSVP",
    swingPhoto: "Swing photo",
    qrAlt: "QR code for wedding photo album",
    open: "Open the invitation",
    heroLine1: "After years of adventures together, our greatest one is only beginning...",
    heroLine2: "We invite you to be part of its beginning!",
    month: "October 2027",
    days: ["M", "T", "W", "T", "F", "S", "S"],
    remaining: "day till the wedding",
    remaining2: "days till the wedding",
    program: "The itinerary",
    ceremony: "Church Ceremony",
    church: "St. George's Cathedral",
    churchAddr: "Nikole Pašića, Novi Sad",
    venue: "Vidikovac Restaurant Complex",
    venueAddr: "Samarski put BB, Ledinci",
    gathering: "Guest Arrival",
    civilWedding: "Civil Ceremony",
    map: "View map",
    rsvp: "Kindly Reply",
    rsvpNote: "Please let us know by September 1st, 2027.",
    first: "First name",
    last: "Last name",
    email: "Email",
    attend: "Will you attend?",
    yes: "Joyfully accepts",
    no: "Regretfully declines",
    transport: "Transport",
    own: "My own",
    needed: "I need a ride",
    extras: "For our keepsake book",
    extrasNote:
      "We want this night to be made of you. The songs you send go straight to the band's list, so everyone dances to something of their own at least once. The recipes we'll gather into a little book to keep and cook from for years — so every meal reminds us of the people who stood beside us.",
    extrasName: "Your name",
    extrasSend: "Send",
    extrasThanks: "Thank you!",
    extrasThanksNote: "Your contribution has been saved in our book.",
    song: "The song that gets you dancing",
    songPh: "Artist — title",
    recipe: "Your favourite recipe, for our keepsake book",
    recipePh: "Dish, ingredients, a few words…",
    send: "Send reply",
    sending: "Sending…",
    error: "Something went wrong. Please try again or contact us directly.",
    photos: "Your Photos",
    photosNote: "On the day, scan the code and share the moments you captured with us.",
    album: "Open wedding photo album",
    scan: "Scan the QR code or tap to open",
    closing: "We can't wait to celebrate with you",
  },
} as const;


function WetInkReveal({
  desktop,
  mobile,
  onReady,
  onFinish,
}: {
  desktop: string;
  mobile: string;
  onReady: () => void;
  onFinish: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const callbacks = useRef({ onReady, onFinish });
  callbacks.current = { onReady, onFinish };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      callbacks.current.onFinish();
      return;
    }

    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const image = new Image();

    let frame = 0;
    let cancelled = false;

    image.onload = () => {
      if (cancelled) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Limit resolution for smoother animation.
      const scale = Math.min(1, 1100 / Math.max(width, height));

      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);

      const w = canvas.width;
      const h = canvas.height;

      // Predetermined, irregularly spaced pigment patches.
      const spots = Array.from({ length: 38 }, (_, i) => ({
        x: (0.08 + ((i * 0.6180339) % 0.84)) * w,
        y: (0.07 + ((i * 0.4142135) % 0.86)) * h,
        start: 0.12 + i * 0.073,
        duration: 0.75 + (i % 5) * 0.16,
        radius: Math.min(w, h) * (0.075 + (i % 7) * 0.013),
        seed: i * 2.47,
      }));

      const DURATION = 3800;

      function drawBackground() {
        if (!ctx) return;

        const ratio = Math.max(
          w / image.naturalWidth,
          h / image.naturalHeight
        );

        const iw = image.naturalWidth * ratio;
        const ih = image.naturalHeight * ratio;

        ctx.drawImage(
          image,
          (w - iw) / 2,
          (h - ih) / 2,
          iw,
          ih
        );
      }

      // Each spot is made from overlapping, soft, irregular
      // pigment fragments rather than a single ellipse.
      function eraseSpot(
        x: number,
        y: number,
        radius: number,
        seed: number
      ) {
        if (!ctx || radius <= 0) return;

        for (let j = 0; j < 13; j++) {
          const angle = (j / 13) * Math.PI * 2;
          const variation =
            0.65 + 0.35 * Math.sin(seed + j * 3.7);

          const offset = radius * 0.43 * variation;

          const px = x + Math.cos(angle) * offset;
          const py = y + Math.sin(angle) * offset;

          const r =
            radius *
            (0.48 + 0.16 * Math.sin(seed * 1.6 + j * 2.3));

          const gradient = ctx.createRadialGradient(
            px, py, r * 0.2,
            px, py, r
          );

          gradient.addColorStop(0, "rgba(0,0,0,1)");
          gradient.addColorStop(0.55, "rgba(0,0,0,0.92)");
          gradient.addColorStop(0.82, "rgba(0,0,0,0.45)");
          gradient.addColorStop(1, "rgba(0,0,0,0)");

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      let started = 0;

      function render(now: number) {
        if (!ctx || cancelled) return;

        if (!started) started = now;

        const time = (now - started) / 1000;
        const progress = Math.min(1, (now - started) / DURATION);

        ctx.clearRect(0, 0, w, h);

        // Keep pigment opaque initially.
        // Fade only the last small fragments near the end.
        const finishing =
          progress < 0.84
            ? 1
            : Math.max(0, 1 - (progress - 0.84) / 0.16);

        ctx.globalAlpha = finishing;
        drawBackground();
        ctx.globalAlpha = 1;

        // Erase pigment in different places at different times.
        ctx.globalCompositeOperation = "destination-out";

        for (const spot of spots) {
          const local = Math.max(
            0,
            Math.min(1, (time - spot.start) / spot.duration)
          );

          if (local <= 0) continue;

          const eased = 1 - Math.pow(1 - local, 3);

          eraseSpot(
            spot.x,
            spot.y,
            spot.radius * eased,
            spot.seed
          );
        }

        ctx.globalCompositeOperation = "source-over";

        if (progress < 1) {
          frame = requestAnimationFrame(render);
        } else {
          callbacks.current.onFinish();
        }
      }

      // Paint the first frame before hiding the original image.
      drawBackground();
      callbacks.current.onReady();
      frame = requestAnimationFrame(render);
    };

    image.onerror = () => {
      if (!cancelled) callbacks.current.onFinish();
    };

    image.src = isMobile ? mobile : desktop;

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      image.onload = null;
      image.onerror = null;
    };
  }, [desktop, mobile]);

  return (
    <canvas
      ref={canvasRef}
      className="wet-ink-canvas"
      aria-hidden="true"
    />
  );
}


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


function Deco({
  src,
  className = "",
  style,
}: {
  src: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={style}
    />
  );
}


type BirdFlight = {
  id: number;
  height: number;
  duration: number;
  delay: number;
  size: number;
};

function FlyingBirds() {
  const [birds, setBirds] = useState<BirdFlight[]>([]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let nextId = 0;
    let stopped = false;
    const removals = new Set<ReturnType<typeof setTimeout>>();

    function launchFlight() {
      if (stopped) return;

      // Sometimes one bird, sometimes two
      const random = Math.random();

      const count =
        random < 0.4 ? 1 :
          random < 0.8 ? 2 :
            3;
      const flight: BirdFlight[] = [];

      for (let i = 0; i < count; i++) {
        flight.push({
          id: nextId++,

          // Slightly different flying heights
          height: 65 + Math.random() * 30,

          // Some birds fly slower than others
          duration: 19 + Math.random() * 9,

          // Birds follow each other at irregular intervals
          delay: i * (0.5 + Math.random() * 1.5),

          // Different sizes suggest different distances
          size: 0.65 + Math.random() * 0.5,
        });
      }

      setBirds((current) => [...current, ...flight]);

      flight.forEach((bird) => {
        const removal = setTimeout(() => {
          setBirds((current) =>
            current.filter((b) => b.id !== bird.id)
          );
          removals.delete(removal);
        }, (bird.duration + bird.delay + 1) * 1000);

        removals.add(removal);
      });

      // Next flight after 8–13 seconds
      timeout = setTimeout(
        launchFlight,
        (7 + Math.random() * 8) * 1000
      );
    }

    launchFlight();

    return () => {
      stopped = true;
      clearTimeout(timeout);
      removals.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="closing-birds" aria-hidden="true">
      {birds.map((bird) => (
        <div
          key={bird.id}
          className="flying-bird"
          style={{
            top: `${bird.height}%`,
            width: `${18 * bird.size}px`,
            height: `${10 * bird.size}px`,
            animationDuration: `${bird.duration}s`,
            animationDelay: `${bird.delay}s`,
          }}
        >
          <svg viewBox="0 0 28 14" fill="none">
            <path
              className="bird-left-wing"
              d="M14 8 Q10 3 4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              className="bird-right-wing"
              d="M14 8 Q18 3 24 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}


function HangingPhotos({ lang }: { lang: Lang }) {
  const [swinging, setSwinging] = useState<number[]>([]);

  const photos = [
    {
      image: photo1,
      left: "5.4%",
      top: "19.5%",
      width: "19%",
      pivot: "50% 19%",
      rotation: 16,
    },
    {
      image: photo2,
      left: "19.3%",
      top: "27.5%",
      width: "19%",
      pivot: "55% 15%",
      rotation: 10,
    },
    {
      image: photo3,
      left: "61.5%",
      top: "25.5%",
      width: "19%",
      pivot: "50% 25%",
      rotation: -10,
    },
    {
      image: photo4,
      left: "77.3%",
      top: "23.9%",
      width: "18.16%",
      pivot: "50% 15%",
      rotation: -16,
    },
  ];

  const clips = [
    { image: clip1, left: "15.1%", top: "19.7%", width: "2.5%" },
    { image: clip2, left: "27.3%", top: "27.8%", width: "3.3%" },
    { image: clip3, left: "68.2%", top: "27.7%", width: "3.2%" },
    { image: clip4, left: "85.4%", top: "21.5%", width: "3%" },
  ];

  return (
    <div className="hanging-photos">

      {/* BACK: rope and watercolor flowers */}
      <img
        src={photoRope}
        alt=""
        className="hanging-rope"
        draggable={false}
      />

      {/* MIDDLE: independently swinging Polaroids */}
      {photos.map((photo, i) => (


        <button
          key={i}
          type="button"
          className={`hanging-photo ${swinging.includes(i) ? "is-swinging" : ""
            }`}
          style={{
            left: photo.left,
            top: photo.top,
            width: photo.width,
            transformOrigin: photo.pivot,
            "--photo-rotation": `${photo.rotation}deg`,
          } as CSSProperties}
          aria-label={`${t[lang].swingPhoto} ${i + 1}`}

          onMouseEnter={() => {
            setSwinging((current) =>
              current.includes(i) ? current : [...current, i]
            );
          }}

          onClick={() => {
            setSwinging((current) =>
              current.includes(i) ? current : [...current, i]
            );
          }}

          onAnimationEnd={(e) => {
            if (e.target !== e.currentTarget) return;

            setSwinging((current) =>
              current.filter((id) => id !== i)
            );
          }}
        >
          <img
            src={photo.image}
            alt=""
            draggable={false}
          />
        </button>


      ))}

      {/* FRONT: clothespins that hold the photos */}
      {clips.map((clip, i) => (
        <img
          key={i}
          src={clip.image}
          alt=""
          aria-hidden="true"
          className="hanging-clip"
          draggable={false}
          style={{
            left: clip.left,
            top: clip.top,
            width: clip.width,
          }}
        />
      ))}

    </div>
  );
}



function Invitation() {
  const [lang, setLang] = useState<Lang>("sr");
  const [wetReady, setWetReady] = useState(false);
  const [opened, setOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [qrSwinging, setQrSwinging] = useState(false);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  
  const L = t[lang];

  const MAX_VOLUME = 0.2;
  const MUSIC_START = 48;
  const MUSIC_END = 150;
  const INITIAL_VOLUME = 0.02;

  const [volume, setVolume] = useState(INITIAL_VOLUME);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);


  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
  
    try {
      audio.volume = volume;
      audio.muted = muted;
      audio.currentTime = MUSIC_START;
  
      await audio.play();
    } catch (error) {
      console.error("Music playback failed:", error);
    }
  };

  useEffect(() => {
    if (!isOpening) return;
  
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
  
    // Prevent scrolling while the invitation opens
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  
    return () => {
      // Restore scrolling after the animation finishes
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [isOpening]);

  const open = () => {
    if (isOpening || opened) return;
  
    setOpened(true);
    setIsOpening(true);
  
    window.scrollTo({ top: 0, behavior: "instant" });
    void startMusic();
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextMuted = !audio.muted;
    audio.muted = nextMuted;
    setMuted(nextMuted);
  };

  const changeVolume = (value: number) => {
    const actualVolume = value * MAX_VOLUME;
  
    setVolume(actualVolume);
  
    const audio = audioRef.current;
    if (!audio) return;
  
    audio.volume = actualVolume;
  
    if (actualVolume > 0 && audio.muted) {
      audio.muted = false;
      setMuted(false);
    }
  };

  return (
    <div className={`relative overflow-x-clip ${opened ? "" : "h-svh overflow-hidden"}`}>
      {/* Music and language controls */}

      <div className="invitation-top-controls">
        {/* MUSIC CONTROL */}
        <div className="music-control">
          <button
            type="button"
            className="music-mute-button"
            onClick={toggleMute}
            aria-label={muted ? L.unmuteMusic : L.muteMusic}
          >
            {muted ? <VolumeX size={18} /> : <Music2 size={18} />}
          </button>

          <div className="music-slider-wrap">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume / MAX_VOLUME}
              onChange={(e) => changeVolume(Number(e.target.value))}
              className="music-volume-slider"
              aria-label={L.volume}
            />
          </div>
        </div>

        {/* Language switcher */}
        <div className="language-switcher">
          <button
            type="button"
            onClick={() => setLang("sr")}
            className={`language-option ${lang === "sr" ? "active" : ""}`}
            aria-pressed={lang === "sr"}
          >
            SR
          </button>

          <span className="language-divider">·</span>

          <button
            type="button"
            onClick={() => setLang("en")}
            className={`language-option ${lang === "en" ? "active" : ""}`}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
        </div>
      </div>

      {/* ENVELOPE — visible only before opening */}
      {(!opened || isOpening) && (
        <section
          className={`opening-screen ${
            isOpening ? "opening-screen--wet" : ""
          } ${
            wetReady ? "opening-screen--wet-ready" : ""
          }`}
        >
        
          {/* Responsive watercolor backgrounds */}
          <picture className="opening-background">
            <source
              media="(max-width: 640px)"
              srcSet={openingMobile}
            />
            <img
              src={openingDesktop}
              alt=""
              aria-hidden="true"
              className="opening-background-image"
            />
          </picture>

          {isOpening && (
            <WetInkReveal
              desktop={openingDesktop}
              mobile={openingMobile}
              onReady={() => setWetReady(true)}
              onFinish={() => setIsOpening(false)}
            />
          )}

          {/* Names */}
          <div className="opening-heading">
            <h1 className="opening-names">
              <span className="opening-first-name">Marijana</span>
              <span className="opening-ampersand">&amp;</span>
              <span className="opening-second-name">Aleksa</span>
            </h1>
          </div>

          {/* Open invitation */}
          <p className="opening-prompt">
            {L.openingPromptLine1} <span className="mobile-line-break" />
            {L.openingPromptLine2}
          </p>

          {/* Clickable envelope */}
          <div className="opening-envelope">
            <button
              type="button"
              className="opening-wax-seal"
              onClick={open}
              aria-label={L.open}
              style={{
                "--wax-image": `url("${waxSeal}")`,
              } as CSSProperties}
            >
              <img
                src={waxSeal}
                alt=""
                className="wax-seal-image"
                draggable={false}
              />
              <span className="wax-shine" aria-hidden="true" />
            </button>
          </div>
        </section>
      )}

      {/* AUDIO — always mounted */}
      <audio
        ref={audioRef}
        src={weddingMusic}
        preload="auto"
        onTimeUpdate={(e) => {
          const audio = e.currentTarget;

          if (audio.currentTime >= MUSIC_END) {
            audio.currentTime = MUSIC_START;
          }
        }}
        onError={(e) => {
          console.error("Audio error:", e.currentTarget.error);
        }}
      />

      {opened && (
        <>
          {/* MAIN INVITATION — Dancing couple */}
          <div className={`invitation-content ${isOpening ? "invitation-content--revealing" : ""}`}>
            <section className="invitation-hero">
              {/* Watercolor illustration */}
              <picture className="invitation-hero-picture">
                <source
                  media="(max-width: 640px)"
                  srcSet={naslovnaMobile}
                />

                <img
                  src={naslovna}
                  alt=""
                  aria-hidden="true"
                  className="invitation-hero-image"
                />
              </picture>

              {/* Text in the open sky */}
              <div className="invitation-hero-content">

                <p className="invitation-hero-intro">
                  {L.heroLine1}
                </p>

                <h1 className="invitation-hero-names">
                  <span>Marijana</span>
                  <span className="invitation-hero-ampersand">&amp;</span>
                  <span>Aleksa</span>
                </h1>

                <p className="invitation-hero-sub">
                  {L.heroLine2}
                </p>
              </div>

            </section>
          </div>

          <main>
            {/* CALENDAR + TIMELINE + RSVP — shared background */}
            <div
              className="details-sections"
              style={{
                "--details-bg-mobile": `url("${sectionBackground}")`,
                "--details-bg-desktop": `url("${sectionBackgroundDesktop}")`,
              } as CSSProperties}
            >
              {/* CALENDAR */}
              <section className="details-section details-calendar px-6 py-24">
                <Reveal className="relative z-10 mx-auto max-w-md">
                  <Calendar lang={lang} />
                </Reveal>
              </section>



              {/* TIMELINE */}
              <section className="details-section timeline-section">
                <Reveal className="relative z-10 mx-auto w-full max-w-6xl">

                  <div className="timeline-heading">
                    <span>{L.program}</span>
                  </div>

                  <div className="timeline-grid">

                    {/* 14:00 — Church ceremony */}
                    <div className="timeline-item">
                      <Event
                        time="14:00"
                        title={L.ceremony}
                        place={L.church}
                        addr={L.churchAddr}
                        map={L.map}
                        q="Saborna crkva Svetog Georgija Novi Sad"
                      />
                    </div>

                    {/* 16:00 — Guest arrival */}
                    <div className="timeline-item">
                      <Event
                        time="16:00"
                        title={L.gathering}
                        place={L.venue}
                        addr={L.venueAddr}
                        map={L.map}
                        q="Vidikovac Restoran Kompleks Ledinci"
                      />
                    </div>

                    {/* 17:00 — Civil ceremony */}
                    <div className="timeline-item">
                      <Event
                        time="17:00"
                        title={L.civilWedding}
                        place={L.venue}
                      />
                    </div>

                  </div>

                </Reveal>
              </section>



              {/* RSVP */}
              <section
                id="rsvp"
                className={`details-section details-rsvp px-6 ${rsvpSubmitted ? "rsvp-completed" : "py-28"
                  }`}
              >
                <Reveal className="relative z-10 mx-auto w-full max-w-xl">
                  <div
                    className={`frame rsvp-card px-7 sm:px-14 ${rsvpSubmitted
                      ? "rsvp-card-completed"
                      : "py-14"
                      }`}
                  >
                    {/* Decorative inner border */}
                    <div
                      className="rsvp-inner-border"
                      aria-hidden="true"
                    />

                    <div className="relative z-10">

                      {/* Hide title and deadline after submission */}
                      {!rsvpSubmitted && (
                        <>
                          <h2 className="text-center font-[family-name:var(--font-script)] text-6xl text-primary sm:text-7xl">
                            {L.rsvp}
                          </h2>

                          <p className="mt-2 text-center text-lg italic text-muted-foreground">
                            {L.rsvpNote}
                          </p>
                        </>
                      )}

                      <Rsvp
                        lang={lang}
                        onSuccess={() => setRsvpSubmitted(true)}
                        onReset={() => setRsvpSubmitted(false)}
                      />
                    </div>
                  </div>
                </Reveal>
              </section>

            </div>



            {/* Keepsake */}
            <section className="keepsake-section relative isolate overflow-visible px-6 py-24">

              {/* BACK LAYER — transparent floral extensions */}
              <Deco
                src={wishesGar5}
                className="wishes-garland wishes-garland-5"
              />

              <Deco
                src={wishesGar7}
                className="wishes-garland wishes-garland-7"
              />

              {/* FRONT LAYER */}
              <Deco
                src={wishesGar1}
                className="wishes-garland wishes-garland-1"
              />

              <Deco
                src={wishesGar2}
                className="wishes-garland wishes-garland-2"
              />


              {/* CONTENT */}
              <Reveal className="relative z-10 mx-auto max-w-xl text-center">
                <div className="rule mb-8">
                  <span className="eyebrow">{L.extras}</span>
                </div>

                <p className="text-base font-light italic leading-relaxed text-muted-foreground md:text-[1.4rem] md:leading-[1.8]">
                  {L.extrasNote}
                </p>

                <Extras lang={lang} />
              </Reveal>

            </section>


            {/* Photos */}
            <section
              className="relative isolate overflow-hidden pb-28"
              style={{ marginTop: "220px" }}
            >
              {/* Heading and description */}
              <Reveal className="relative z-10 mx-auto max-w-md px-6 text-center">
                <div className="rule mb-8">
                  <span className="eyebrow">{L.photos}</span>
                </div>

                <p className="text-base font-light italic leading-relaxed text-muted-foreground md:text-[1.4rem] md:leading-[1.8]">
                  {L.photosNote}
                </p>
              </Reveal>

              {/* Polaroids + QR composition */}
              <div className="photos-composition relative mt-12">

                {/* Rope, flowers, hanging photos */}
                <div className="relative z-0">
                  <HangingPhotos lang={lang} />
                </div>



                {/* QR code — hanging from the rope */}
                <div
                  className="absolute z-10"
                  style={{
                    left: "50%",
                    top: "43%",
                    width: "18%",
                    transform: "translateX(-50%)",
                  }}
                >
                  {/* Clickable hanging QR code */}


                  <a
                    href="https://photos.app.goo.gl/hzwWPbFzXwzcm12y8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hanging-qr ${qrSwinging ? "qr-swinging" : ""}`}
                    onMouseEnter={() => setQrSwinging(true)}
                    onClick={() => setQrSwinging(true)}
                    onAnimationEnd={(e) => {
                      if (e.target === e.currentTarget) {
                        setQrSwinging(false);
                      }
                    }}
                    aria-label={L.album}
                  >
                    <span
                      className="frame block bg-[#fffdf7]">
                      <img
                        src={weddingQR}
                        alt={L.qrAlt}
                        draggable={false}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
                    </span>
                  </a>


                  {/* Clothespin — stays in front of the QR */}
                  <img
                    src={clip3}
                    alt=""
                    aria-hidden="true"
                    className="hanging-qr-clip"
                    draggable={false}
                  />
                </div>



              </div>

              {/* Scan instruction */}
              <p className="relative z-10 mt-8 px-6 text-center text-base font-light italic leading-relaxed text-muted-foreground md:text-[1.4rem] md:leading-[1.8]">
                {L.scan}
              </p>
            </section>


            {/* Closing */}
            <footer className="relative w-full overflow-hidden pt-24 text-center sm:pt-32 lg:pt-36">
              {/* Closing text */}
              <Reveal className="mx-auto max-w-5xl px-6">
                <p className="text-2xl italic font-light text-primary sm:text-3xl">
                  {L.closing}
                </p>

                <p className="mt-6 font-[family-name:var(--font-script)] text-6xl text-primary sm:text-8xl lg:text-[8rem]">
                  Marijana &amp; Aleksa
                </p>

                <p className="eyebrow mt-8">
                  02 · 10 · 2027
                </p>
              </Reveal>

              {/* Landscape and birds — scale together */}
              <div className="closing-landscape-wrap">

                {/* Birds flying above mountains */}
                <div className="closing-sky" aria-hidden="true">
                  <FlyingBirds />
                </div>

                {/* Watercolor landscape */}
                <img
                  src={closingLandscape}
                  alt=""
                  aria-hidden="true"
                  className="closing-landscape"
                />

              </div>
            </footer>

          </main>
        </>
      )}
    </div>
  );
}

function getDaysUntilWedding(): number {
  const todayInSerbia = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Belgrade",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const getPart = (type: string) =>
    Number(todayInSerbia.find((part) => part.type === type)?.value);

  const year = getPart("year");
  const month = getPart("month");
  const day = getPart("day");

  // Treat dates as UTC midnight for calendar-day arithmetic.
  // This avoids problems caused by daylight-saving changes.
  const today = Date.UTC(year, month - 1, day);
  const wedding = Date.UTC(2027, 9, 2);

  return Math.max(
    0,
    Math.round((wedding - today) / 86400000)
  );
}


function Calendar({ lang }: { lang: Lang }) {
  const L = t[lang];
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(getDaysUntilWedding());
  }, []);

  // October 1, 2027 is Friday — four empty cells.
  const cells: (number | null)[] = [
    ...Array(4).fill(null),
    ...Array.from({ length: 31 }, (_, i) => i + 1),
  ];

  return (
    <div className="calendar-block text-center">

      {/* Month */}
      <p className="calendar-month eyebrow">
        {L.month}
      </p>

      {/* Golden botanical divider */}
      <div className="calendar-ornament" aria-hidden="true">
        <span className="calendar-ornament-line" />

        <svg
          viewBox="0 0 24 24"
          className="calendar-ornament-icon"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <path d="M12 19V8" strokeLinecap="round" />
          <path d="M12 13C8.4 13 5.5 10.4 5.5 6.8C9.1 6.8 12 9.4 12 13Z" />
          <path d="M12 13C15.6 13 18.5 10.4 18.5 6.8C14.9 6.8 12 9.4 12 13Z" />
        </svg>

        <span className="calendar-ornament-line" />
      </div>

      {/* Calendar grid */}
      <div className="calendar-grid mt-8 grid grid-cols-7 gap-y-4 text-lg sm:gap-y-5">

        {L.days.map((d, i) => (
          <span
            key={`weekday-${i}`}
            className="eyebrow !tracking-[0.15em]"
          >
            {d}
          </span>
        ))}

        {cells.map((d, i) =>
          d === 2 ? (
            <span
              key={`date-${i}`}
              className="calendar-special-day relative flex items-center justify-center text-primary"
            >
              {/* Multiple imperfect handwritten circles */}
              <svg
                viewBox="0 0 100 80"
                className="calendar-handdrawn-ring"
                fill="none"
                aria-hidden="true"
              >
                <path
                  className="calendar-ring-stroke stroke-1"
                  d="M19 41 C15 26 30 14 49 13 C71 12 84 23 83 41 C82 59 65 68 47 66 C28 64 18 54 19 41"
                />

                <path
                  className="calendar-ring-stroke stroke-2"
                  d="M22 46 C17 32 27 19 48 17 C68 15 81 25 80 43 C79 58 65 64 45 62 C30 61 21 52 22 46"
                />

                <path
                  className="calendar-ring-stroke stroke-3"
                  d="M23 35 C26 20 40 14 57 17 C76 20 84 34 78 50 C72 65 53 69 38 63 C22 57 17 45 23 35"
                />

                <path
                  className="calendar-ring-stroke stroke-4"
                  d="M29 22 C43 11 65 15 77 28 C87 40 80 57 64 63"
                />
              </svg>

              {/* Watercolor flower attached to the circle */}
              <img
                src={calendarGarland}
                alt=""
                aria-hidden="true"
                className="calendar-date-flower"
                draggable={false}
              />

              {/* Date */}
              <span className="calendar-date-number relative z-10 font-medium">
                2
              </span>
            </span>
          ) : (
            <span
              key={`date-${i}`}
              className={d ? "text-foreground/80" : ""}
            >
              {d ?? ""}
            </span>
          )
        )}
      </div>

      {/* Countdown */}
      {days !== null && (
        <div className="mt-14">

          <div
            className="calendar-ornament mb-6"
            aria-hidden="true"
          >
            <span className="calendar-ornament-line" />

            <svg
              viewBox="0 0 24 24"
              className="calendar-ornament-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <path d="M12 19V8" strokeLinecap="round" />
              <path d="M12 13C8.4 13 5.5 10.4 5.5 6.8C9.1 6.8 12 9.4 12 13Z" />
              <path d="M12 13C15.6 13 18.5 10.4 18.5 6.8C14.9 6.8 12 9.4 12 13Z" />
            </svg>

            <span className="calendar-ornament-line" />
          </div>

          <p>
            <span className="block font-[family-name:var(--font-label)] text-5xl text-primary sm:text-6xl">
              {days}
            </span>

            <span className="eyebrow mt-3 block">
              {lang === "sr"
                ? days % 10 === 1 && days % 100 !== 11
                  ? L.remaining
                  : L.remaining2
                : days === 1
                  ? L.remaining
                  : L.remaining2}
            </span>

          </p>
        </div>
      )}
    </div>
  );
}


function Event(p: {
  time: string;
  title: string;
  place: string;
  addr?: string;
  map?: string;
  q?: string;
}) {
  return (
    <div className="text-center">
      <p className="timeline-time">{p.time}</p>

      <h3 className="timeline-title">{p.title}</h3>

      <p className="timeline-place">{p.place}</p>

      {p.addr && (
        <p className="timeline-address">{p.addr}</p>
      )}

      {p.q && p.map && (
        <a
          className="timeline-link"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.q)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {p.map}
        </a>
      )}
    </div>
  );
}
const RSVP_SHEETS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwDmGtVHXsX7m3Z83pYr9CRxhpJ59vk74189xVOAYWGtyTme9-x7StOlw4oYqWX6O6m/exec";


type AdditionalGuest = {
  id: number;
  first: string;
  last: string;
  isChild: boolean;
  age: string;
};

function Rsvp({
  lang,
  onSuccess,
  onReset,
}: {
  lang: Lang;
  onSuccess?: () => void;
  onReset?: () => void;
}) {
  const L = t[lang];

  const [attend, setAttend] = useState(true);
  const [ride, setRide] = useState(false);
  const [guests, setGuests] = useState<AdditionalGuest[]>([]);
  const [state, setState] = useState<
    "idle" | "sending" | "done" | "error"
  >("idle");

  const nextGuestId = useRef(1);
  const [formVersion, setFormVersion] = useState(0);

  function resetRsvp() {
    setFormVersion((version) => version + 1);
    setAttend(true);
    setRide(false);
    setGuests([]);
    setState("idle");
    onReset?.();
  }

  const addGuest = () => {
    if (guests.length >= 10) return;

    setGuests((current) => [
      ...current,
      {
        id: nextGuestId.current++,
        first: "",
        last: "",
        isChild: false,
        age: "",
      },
    ]);
  };

  const updateGuest = (
    id: number,
    changes: Partial<AdditionalGuest>
  ) => {
    setGuests((current) =>
      current.map((guest) =>
        guest.id === id
          ? { ...guest, ...changes }
          : guest
      )
    );
  };

  const removeGuest = (id: number) => {
    setGuests((current) =>
      current.filter((guest) => guest.id !== id)
    );
  };

  async function submit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (state === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      lang,
      first: String(data.get("Ime") || "").trim(),
      last: String(data.get("Prezime") || "").trim(),
      email: String(data.get("Email") || "").trim(),
      phone: String(data.get("Telefon") || "").trim(),
      attend,
      ride: attend ? ride : false,

      guests: attend
        ? guests.map((guest) => ({
          first: guest.first.trim(),
          last: guest.last.trim(),
          isChild: guest.isChild,
          age: guest.isChild
            ? Number(guest.age)
            : null,
        }))
        : [],
    };

    setState("sending");

    try {
      await fetch(RSVP_SHEETS_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      // The browser cannot read the Apps Script response
      // in no-cors mode. This confirms dispatch only,
      // not that Google Sheets successfully saved it.
      setState("done");
      onSuccess?.();
    } catch {
      setState("error");
    }
  }

  const Label = ({
    children,
  }: {
    children: ReactNode;
  }) => (
    <span className="eyebrow block">
      {children}
    </span>
  );

  const Toggle = ({
    value,
    onChange,
    yes,
    no,
  }: {
    value: boolean;
    onChange: (value: boolean) => void;
    yes: string;
    no: string;
  }) => (
    <div className="mt-3 grid grid-cols-2 gap-3">
      <button
        type="button"
        className="choice"
        data-on={value}
        aria-pressed={value}
        onClick={() => onChange(true)}
      >
        {yes}
      </button>

      <button
        type="button"
        className="choice"
        data-on={!value}
        aria-pressed={!value}
        onClick={() => onChange(false)}
      >
        {no}
      </button>
    </div>
  );


  if (state === "done") {
    return (
      <div className="rsvp-success py-12 text-center">
        <p className="font-[family-name:var(--font-script)] text-5xl text-primary sm:text-6xl">
          {attend ? L.attendingTitle : L.decliningTitle}
        </p>

        <p className="mt-5 text-xl italic text-muted-foreground">
          {attend ? L.attendingNote : L.decliningNote}
        </p>

        {/* Submit another RSVP */}
        <button
          type="button"
          className="rsvp-again"
          onClick={resetRsvp}
        >
          {L.anotherRsvp}
        </button>
      </div>
    );
  }


  return (
    <form
      key={formVersion}
      onSubmit={submit}
      className="mt-12 space-y-9"
    >
      {/* Main guest */}
      <div className="grid gap-9 sm:grid-cols-2">
        <label>
          <Label>{L.first}</Label>
          <input
            className="field"
            name="Ime"
            autoComplete="given-name"
            required
          />
        </label>

        <label>
          <Label>{L.last}</Label>
          <input
            className="field"
            name="Prezime"
            autoComplete="family-name"
            required
          />
        </label>
      </div>

      <label className="block">
        <Label>
          {L.phoneOptional}
        </Label>

        <input
          className="field"
          type="tel"
          name="Telefon"
          autoComplete="tel"
          placeholder="+381 6..."
        />
      </label>

      <label className="block">
        <Label>{L.email}</Label>
        <input
          className="field"
          type="email"
          name="Email"
          autoComplete="email"
          required
        />
      </label>

      {/* Attendance */}
      <div>
        <Label>{L.attend}</Label>
        <Toggle
          value={attend}
          onChange={setAttend}
          yes={L.yes}
          no={L.no}
        />
      </div>

      {attend && (
        <>
          {/* Transport */}
          <div>
            <Label>{L.transport}</Label>
            <Toggle
              value={!ride}
              onChange={(value) => setRide(!value)}
              yes={L.own}
              no={L.needed}
            />
          </div>

          {/* Additional guests */}
          <div className="space-y-5">
            <Label>
              {L.additionalGuests}
            </Label>

            {guests.map((guest, index) => (
              <div
                key={guest.id}
                className="rsvp-guest space-y-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="eyebrow">
                    {`${L.guestNumber} ${index + 1}`}
                  </span>

                  <button
                    type="button"
                    className="rsvp-remove"
                    onClick={() => removeGuest(guest.id)}
                  >
                    {L.removeGuest}
                  </button>
                </div>

                {/* First + last name */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <Label>{L.first}</Label>
                    <input
                      className="field"
                      value={guest.first}
                      onChange={(e) =>
                        updateGuest(guest.id, {
                          first: e.target.value,
                        })
                      }
                      required
                    />
                  </label>

                  <label className="block">
                    <Label>{L.last}</Label>
                    <input
                      className="field"
                      value={guest.last}
                      onChange={(e) =>
                        updateGuest(guest.id, {
                          last: e.target.value,
                        })
                      }
                      required
                    />
                  </label>
                </div>

                {/* Adult or child */}
                <div>
                  <Label>
                    {L.isChild}
                  </Label>

                  <Toggle
                    value={!guest.isChild}
                    onChange={(adult) =>
                      updateGuest(guest.id, {
                        isChild: !adult,
                        age: "",
                      })
                    }
                    yes={L.adult}
                    no={L.child}
                  />
                </div>

                {/* Age only for children */}
                {guest.isChild && (
                  <label className="block">
                    <Label>
                      {L.childAge}
                    </Label>

                    <input
                      className="field"
                      type="number"
                      min="0"
                      max="17"
                      step="1"
                      value={guest.age}
                      onChange={(e) =>
                        updateGuest(guest.id, {
                          age: e.target.value,
                        })
                      }
                      required
                    />
                  </label>
                )}
              </div>
            ))}

            {/* Add guest */}
            {guests.length < 10 && (
              <button
                type="button"
                className="rsvp-add"
                onClick={addGuest}
              >
                <span aria-hidden="true">+</span>

                {L.addGuest}
              </button>
            )}
          </div>
        </>
      )}

      {state === "error" && (
        <p className="text-center italic text-destructive">
          {L.error}
        </p>
      )}

      <div className="pt-2 text-center">
        <button
          type="submit"
          className="btn-ink"
          disabled={state === "sending"}
        >
          {state === "sending"
            ? L.sending
            : L.send}
        </button>
      </div>
    </form>
  );
}


function Extras({ lang }: { lang: Lang }) {
  const L = t[lang];
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (state === "sending") return;

    const data = new FormData(e.currentTarget);

    const name = String(data.get("Ime") || "").trim();
    const song = String(data.get("Muzicka_Zelja") || "").trim();
    const recipe = String(data.get("Omiljeni_Recept") || "").trim();

    if (!song && !recipe) {
      setState("error");
      return;
    }

    setState("sending");

    try {
      await fetch(RSVP_SHEETS_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
          type: "extras",
          name,
          song,
          recipe
        })
      });

      setState("done");
    } catch {
      setState("error");
    }
  }

  if (state === "done")
    return (
      <div className="mt-10 text-center">
        <p className="font-[family-name:var(--font-script)] text-5xl text-primary">
          {L.extrasThanks}
        </p>
        <p className="font-[family-name:var(--font-script)] text-2xl text-primary">
          {L.extrasThanksNote}
        </p>
      </div>
    );
  return (
    <form onSubmit={submit} className="mt-10 space-y-8 text-left">
      <label className="block"><span className="eyebrow block">{L.extrasName}</span><input className="field" name="Ime" required /></label>
      <label className="block"><span className="eyebrow block">{L.song}</span><input className="field" name="Muzicka_Zelja" placeholder={L.songPh} /></label>
      <label className="block"><span className="eyebrow block">{L.recipe}</span>
      <textarea
        className="field recipe-textarea"
        name="Omiljeni_Recept"
        placeholder={L.recipePh}
        rows={5}
      />
      </label>
      {state === "error" && <p className="text-center italic text-destructive">{L.error}</p>}
      <div className="text-center"><button type="submit" className="btn-ink" disabled={state === "sending"}>{state === "sending" ? L.sending : L.extrasSend}</button></div>
    </form>
  );
}
