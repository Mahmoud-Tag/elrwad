import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef, type ReactNode } from "react";
import {
  Globe,
  Smartphone,
  Database,
  ShoppingCart,
  Brain,
  Megaphone,
  Palette,
  Server,
  Code2,
  Layers,
  Shield,
  Rocket,
  Headphones,
  Sparkles,
  CheckCircle2,
  Star,
  ArrowLeft,
  Sun,
  Moon,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Quote,
  Check,
  Zap,
  Users,
  Award,
  Clock,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

// ====== استيراد صور فريق العمل ======
import bossImage from "@/assets/boos.png";
import tagImage from "@/assets/tag.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "شركة الرواد للبرمجيات وتكنولوجيا المعلومات | حلول رقمية متكاملة",
      },
      {
        name: "description",
        content:
          "شركة الرواد - تطوير مواقع، تطبيقات هاتف، أنظمة ERP، حلول ذكاء اصطناعي، تسويق رقمي، وتصميم هوية بصرية باحترافية عالمية.",
      },
      {
        property: "og:title",
        content: "شركة الرواد للبرمجيات وتكنولوجيا المعلومات",
      },
      {
        property: "og:description",
        content:
          "حلول رقمية متكاملة على مستوى عالمي: مواقع، تطبيقات، ERP، AI، وتسويق.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "شركة الرواد للبرمجيات وتكنولوجيا المعلومات",
          alternateName: "Al Rowad Software & IT",
          url: "/",
          telephone: "+201010028108",
          email: "info@alrowad-soft.com",
          sameAs: [],
        }),
      },
    ],
  }),
  component: Index,
});

/* ---------- Helpers ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), obs.disconnect()),
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity .8s ease ${delay}ms, transform .8s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Counter({
  to,
  suffix = "",
  duration = 1800,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, to, duration]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* ---------- Theme toggle ---------- */
function useTheme() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // Ignore storage failures in private browsing or restricted environments.
    }
  }, [dark]);
  return { dark, toggle: () => setDark((d) => !d) };
}

/* ---------- Navbar ---------- */
const NAV = [
  { href: "#home", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/services", label: "خدماتنا" },
  { href: "/portfolio", label: "أعمالنا" },
  { href: "#why", label: "لماذا الرواد" },
  { href: "#team", label: "فريقنا" },
  { href: "#tech", label: "التقنيات" },
  { href: "#pricing", label: "الباقات" },
  { href: "#contact", label: "تواصل معنا" },
];

function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl border border-border px-4 py-2.5 transition ${
            scrolled ? "glass shadow-card" : "bg-transparent border-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl gradient-primary-bg text-primary-foreground shadow-glow">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-extrabold leading-tight">
                الرواد
              </span>
              <span className="block text-[10px] text-muted-foreground">
                Al Rowad Software
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground hover:bg-accent"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="تبديل الوضع"
              className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-background/60 transition hover:bg-accent"
            >
              {dark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl gradient-primary-bg px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              اطلب عرض سعر
              <ArrowLeft className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden grid h-9 w-9 place-items-center rounded-xl border border-border"
              aria-label="القائمة"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass border border-border p-3 shadow-card animate-fade-up">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent"
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
const STATS = [
  { v: 100, s: "+", label: "مشروع ناجح", icon: Rocket },
  { v: 50, s: "+", label: "عميل سعيد", icon: Users },
  { v: 5, s: "+", label: "سنوات خبرة", icon: Award },
  { v: 24, s: "/7", label: "دعم فني", icon: Clock },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 gradient-hero-bg" />
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40 mix-blend-screen"
      />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-cyan/30 blur-3xl animate-blob" />
      <div className="absolute -bottom-24 -left-24 -z-10 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-blob" />

      {/* Floating code particles */}
      {["</>", "{ }", "( )", "AI", "ERP", "#"].map((c, i) => (
        <span
          key={i}
          className="pointer-events-none absolute hidden md:block text-cyan/40 font-mono font-bold select-none animate-float-slow"
          style={{
            top: `${10 + ((i * 13) % 70)}%`,
            left: `${(i * 17) % 90}%`,
            fontSize: `${14 + (i % 3) * 8}px`,
            animationDelay: `${i * 0.6}s`,
          }}
        >
          {c}
        </span>
      ))}

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center text-white">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold text-cyan">
              <Zap className="h-3.5 w-3.5" />
              شريكك في التحول الرقمي
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] tracking-tight">
              نحوّل أفكارك إلى{" "}
              <span className="relative inline-block">
                <span className="gradient-text">حلول رقمية متكاملة</span>
                <span className="absolute inset-x-0 -bottom-2 h-1 gradient-primary-bg rounded-full opacity-70" />
              </span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
              شركة الرواد للبرمجيات وتكنولوجيا المعلومات تقدّم حلولًا مبتكرة في
              تطوير المواقع الإلكترونية، تطبيقات الهاتف، الأنظمة الإدارية،
              الذكاء الاصطناعي، والتسويق الرقمي.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl gradient-primary-bg px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02] hover:opacity-95"
              >
                اطلب عرض سعر
                <ArrowLeft className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl glass-dark px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                تواصل معنا
              </a>
            </div>
          </Reveal>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={400 + i * 100}>
                <div className="glass-dark rounded-2xl p-5 text-right hover:scale-[1.03] transition">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl md:text-4xl font-extrabold text-white">
                      <Counter to={s.v} suffix={s.s} />
                    </div>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan/20 text-cyan">
                      <s.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-white/70">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section header ---------- */
function SectionHeader({
  tag,
  title,
  desc,
}: {
  tag: string;
  title: ReactNode;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          {tag}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={160}>
          <p className="mt-4 text-muted-foreground leading-relaxed">{desc}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- About ---------- */
const ABOUT_FEATURES = [
  {
    icon: Users,
    title: "فريق متخصص",
    desc: "خبراء بمهارات تقنية عالية ورؤية احترافية.",
  },
  {
    icon: Sparkles,
    title: "حلول مبتكرة",
    desc: "تصاميم وحلول رقمية تواكب أحدث التوجهات.",
  },
  {
    icon: Award,
    title: "جودة عالية",
    desc: "معايير صارمة في كل سطر نكتبه وكل بكسل نصممه.",
  },
  {
    icon: Headphones,
    title: "دعم مستمر",
    desc: "دعم فني متواصل حتى بعد إطلاق المشروع.",
  },
];

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          tag="من نحن"
          title={
            <>
              نبني المستقبل الرقمي <span className="gradient-text">معك</span>
            </>
          }
          desc="شركة الرواد للبرمجيات وتكنولوجيا المعلومات هي شركة متخصصة في تطوير الحلول البرمجية الحديثة ومساعدة الشركات على التحول الرقمي من خلال أحدث التقنيات العالمية."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ABOUT_FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
                <span className="grid h-12 w-12 place-items-center rounded-xl gradient-primary-bg text-primary-foreground shadow-glow">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Services (4 items only) ---------- */
const SERVICES = [
  {
    icon: Globe,
    title: "تطوير المواقع الإلكترونية",
    desc: "مواقع سريعة، آمنة، ومتجاوبة بأفضل ممارسات SEO.",
  },
  {
    icon: Smartphone,
    title: "تطوير تطبيقات الهاتف",
    desc: "تطبيقات iOS و Android بأداء عالٍ وتجربة مستخدم استثنائية.",
  },
  {
    icon: Database,
    title: "الأنظمة الإدارية ERP",
    desc: "أنظمة متكاملة لإدارة الموارد والعمليات في شركتك.",
  },
  {
    icon: ShoppingCart,
    title: "المتاجر الإلكترونية",
    desc: "متاجر احترافية مع بوابات دفع آمنة وإدارة كاملة.",
  },
  {
    icon: Brain,
    title: "حلول الذكاء الاصطناعي",
    desc: "أتمتة ذكية، تحليلات تنبؤية، وروبوتات محادثة متقدمة.",
  },
  {
    icon: Megaphone,
    title: "التسويق الرقمي",
    desc: "حملات إعلانية مدروسة تحقق نتائج قابلة للقياس.",
  },
  {
    icon: Palette,
    title: "تصميم الهوية البصرية",
    desc: "هويات بصرية مميزة تعكس قيم علامتك التجارية.",
  },
  {
    icon: Server,
    title: "استضافة وإدارة الخوادم",
    desc: "بنية تحتية موثوقة بأعلى معايير الأداء والأمان.",
  },
];

function Services() {
  const displayedServices = SERVICES.slice(0, 4);
  return (
    <section id="services" className="relative py-24 md:py-32 bg-muted/40">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-50" />
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          tag="خدماتنا"
          title={
            <>
              حلول <span className="gradient-text">شاملة</span> لكل احتياجاتك
            </>
          }
          desc="نقدم خدمات متكاملة لمساعدتك على بناء، توسيع، وإدارة أعمالك الرقمية بثقة."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedServices.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1.5 hover:shadow-glow">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:gradient-primary-bg group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <a
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all"
                >
                  المزيد <ArrowLeft className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl gradient-primary-bg px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            عرض المزيد
            <ArrowLeft className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Portfolio (4 items only) ---------- */
const PORTFOLIO = [
  {
    cat: "مواقع إلكترونية",
    title: "منصة شركة استشارات",
    color: "from-indigo-500 to-blue-500",
  },
  {
    cat: "تطبيقات",
    title: "تطبيق توصيل طلبات",
    color: "from-cyan-500 to-teal-500",
  },
  {
    cat: "أنظمة إدارة",
    title: "نظام ERP لمصنع",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    cat: "متاجر إلكترونية",
    title: "متجر أزياء راقي",
    color: "from-rose-500 to-orange-500",
  },
  {
    cat: "مواقع إلكترونية",
    title: "موقع عقاري ذكي",
    color: "from-emerald-500 to-cyan-500",
  },
  {
    cat: "تطبيقات",
    title: "تطبيق صحي بالذكاء",
    color: "from-sky-500 to-indigo-500",
  },
];
const CATS = [
  "الكل",
  "مواقع إلكترونية",
  "تطبيقات",
  "أنظمة إدارة",
  "متاجر إلكترونية",
];

function Portfolio() {
  const [active, setActive] = useState("الكل");
  const filtered =
    active === "الكل" ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === active);
  const displayedItems = filtered.slice(0, 4);

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          tag="أعمالنا"
          title={
            <>
              مشاريع <span className="gradient-text">نفخر</span> بتنفيذها
            </>
          }
          desc="مجموعة مختارة من المشاريع التي حققت نتائج استثنائية لعملائنا."
        />
        <Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === c
                    ? "gradient-primary-bg text-primary-foreground shadow-glow"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedItems.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 80}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-card">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-90`}
                />
                <div className="absolute inset-0 grid-pattern opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold backdrop-blur">
                    {p.cat}
                  </span>
                  <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                    عرض المشروع <ArrowLeft className="h-4 w-4" />
                  </div>
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl gradient-primary-bg px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            عرض المزيد
            <ArrowLeft className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why ---------- */
const WHY = [
  {
    icon: Layers,
    title: "حلول مخصصة",
    desc: "كل مشروع يُصمَّم خصيصًا لاحتياجات عميله.",
  },
  {
    icon: Zap,
    title: "أسعار تنافسية",
    desc: "قيمة عالية مقابل سعر يناسب حجم أعمالك.",
  },
  {
    icon: Rocket,
    title: "سرعة التنفيذ",
    desc: "نسلّم في الوقت المتفق عليه، دون تأخير.",
  },
  {
    icon: Headphones,
    title: "دعم فني دائم",
    desc: "فريق دعم جاهز على مدار الساعة.",
  },
  {
    icon: Code2,
    title: "أحدث التقنيات",
    desc: "نستخدم أفضل الأدوات والتقنيات العالمية.",
  },
  {
    icon: Shield,
    title: "أمان وحماية",
    desc: "بنية آمنة بأعلى معايير الحماية والتشفير.",
  },
];

function Why() {
  return (
    <section id="why" className="relative py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          tag="لماذا الرواد؟"
          title={
            <>
              أسباب تجعلنا <span className="gradient-text">خيارك الأول</span>
            </>
          }
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 grid h-12 w-12 place-items-center rounded-xl gradient-primary-bg text-primary-foreground shadow-glow">
                    <w.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{w.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {w.desc}
                    </p>
                  </div>
                </div>
                <CheckCircle2 className="absolute bottom-4 left-4 h-5 w-5 text-success opacity-0 transition group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Team ---------- */
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "محمود الصلعاوى",
    role: "رئيس مجلس الإدارة",
    description: "خبرة 15 عاماً في قيادة مشاريع التحول الرقمي.",
    avatar: bossImage,
    social: {
      linkedin: "#",
      twitter: "#",
      mail: "mailto:ahmed@example.com",
    },
  },
  {
    id: 2,
    name: "محمود تاج الدين",
    role: "المدير التنفيذي",
    description: "متخصص في تطوير الأنظمة المعقدة وحلول الذكاء الاصطناعي.",
    avatar: tagImage,
    social: {
      linkedin: "#",
      twitter: "#",
      mail: "mailto:linuex.0@gmail.com",
    },
  },
  {
    id: 3,
    name: "محمد علي",
    role: "مصمم واجهات المستخدم",
    description: "شغوف بتجربة المستخدم وتصميم الواجهات الجذابة.",
    avatar: "🎨",
    social: {
      linkedin: "#",
      twitter: "#",
      mail: "mailto:mohamed@example.com",
    },
  },
  {
    id: 4,
    name: "نورا يوسف",
    role: "مديرة التسويق الرقمي",
    description: "خبيرة في استراتيجيات التسويق وبناء العلامات التجارية.",
    avatar: "📈",
    social: {
      linkedin: "#",
      twitter: "#",
      mail: "mailto:nora@example.com",
    },
  },
];

function TeamCard({ member }: { member: (typeof TEAM_MEMBERS)[0] }) {
  const isImage =
    typeof member.avatar === "string" &&
    (member.avatar.startsWith("/") ||
      member.avatar.startsWith("http") ||
      member.avatar.startsWith("data:image") ||
      member.avatar.includes("boos") ||
      member.avatar.includes("tag"));

  return (
    <div className="group bg-card rounded-2xl border border-border p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-glow">
      <div className="relative w-28 h-28 mx-auto mb-4">
        {isImage ? (
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full rounded-full object-cover shadow-glow group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full rounded-full gradient-primary-bg flex items-center justify-center text-5xl shadow-glow group-hover:scale-105 transition-transform duration-300">
            {member.avatar}
          </div>
        )}
        <div className="absolute -bottom-1 -right-1 bg-success w-4 h-4 rounded-full border-2 border-card"></div>
      </div>
      <h3 className="text-xl font-bold">{member.name}</h3>
      <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {member.description}
      </p>
      <div className="flex items-center justify-center gap-2">
        {[
          { icon: Linkedin, href: member.social.linkedin, label: "LinkedIn" },
          { icon: Twitter, href: member.social.twitter, label: "Twitter" },
          { icon: Mail, href: member.social.mail, label: "Email" },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            aria-label={social.label}
            className="w-9 h-9 rounded-lg border border-border bg-background text-muted-foreground flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <social.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  );
}

function TeamSection() {
  return (
    <section id="team" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          tag="فريقنا"
          title={
            <>
              فريق <span className="gradient-text">الخبراء</span>
            </>
          }
          desc="نخبة من الكفاءات المتميزة تعمل بشغف لتقديم أفضل الحلول لعملائنا."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM_MEMBERS.map((member, i) => (
            <Reveal key={member.id} delay={i * 80}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl gradient-primary-bg px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            <span>انضم إلى فريقنا</span>
            <ArrowLeft className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Tech ---------- */
const TECH = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind", "Vue", "Angular"],
  },
  {
    group: "Backend",
    items: ["PHP", "Laravel", "Node.js", "Express", "NestJS"],
  },
  { group: "Database", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { group: "Cloud", items: ["AWS", "Vercel", "Cloudinary"] },
  { group: "DevOps", items: ["Docker", "Kubernetes", "CI/CD"] },
  { group: "Mobile", items: ["React Native", "Flutter"] },
  { group: "Design", items: ["Figma", "Adobe XD", "Sketch"] },
  { group: "Marketing", items: ["Google Ads", "Facebook Ads", "SEO"] },
  { group: "Automation", items: ["Zapier", "Integromat", "n8n"] },
  { group: "AI", items: ["OpenAI", "TensorFlow"] },
];

function Tech() {
  const all = TECH.flatMap((g) => g.items);
  const loop = [...all, ...all];
  return (
    <section id="tech" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          tag="التقنيات"
          title={
            <>
              نبني بأفضل{" "}
              <span className="gradient-text">التقنيات العالمية</span>
            </>
          }
          desc="نختار الأدوات المناسبة لكل مشروع، من React وNext.js إلى الذكاء الاصطناعي والحوسبة السحابية."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {TECH.map((g, i) => (
            <Reveal key={g.group} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="text-xs font-bold text-primary">{g.group}</div>
                <ul className="mt-3 space-y-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <Check className="h-4 w-4 text-success" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Marquee */}
        <div className="relative mt-14 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex w-max animate-marquee gap-4">
            {loop.map((t, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold shadow-card whitespace-nowrap"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
const TESTIMONIALS = [
  {
    name: "أحمد المنصور",
    role: "الرئيس التنفيذي - تك فيجن",
    rating: 5,
    text: "فريق محترف بمعنى الكلمة. سلّموا المشروع قبل الموعد بجودة فاقت توقعاتنا.",
  },
  {
    name: "نورة الزهراني",
    role: "مديرة التسويق - بلوم",
    rating: 5,
    text: "تجربة استثنائية، دعم متواصل، وتصميم يعكس هويتنا بشكل مذهل.",
  },
  {
    name: "خالد العتيبي",
    role: "مؤسس - دلتا ستور",
    rating: 5,
    text: "نظام إدارة متكامل وفّر علينا ساعات عمل يومية. شراكة ناجحة.",
  },
  {
    name: "ليلى صبري",
    role: "مالكة - استوديو لين",
    rating: 5,
    text: "احترافية عالية في التعامل، ودقّة في فهم متطلباتنا.",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setI((v) => (v + 1) % TESTIMONIALS.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          tag="آراء العملاء"
          title={
            <>
              ماذا يقول <span className="gradient-text">عملاؤنا</span>
            </>
          }
        />
        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {[0, 1, 2].map((off) => {
            const t = TESTIMONIALS[(i + off) % TESTIMONIALS.length];
            return (
              <Reveal key={off} delay={off * 100}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-7 shadow-card transition hover:shadow-glow">
                  <Quote className="absolute top-5 left-5 h-10 w-10 text-primary/15" />
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground">
                    "{t.text}"
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full gradient-primary-bg text-primary-foreground font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-bold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`الرأي ${k + 1}`}
              className={`h-2 rounded-full transition-all ${k === i ? "w-8 gradient-primary-bg" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
const PLANS = [
  {
    name: "Starter",
    label: "للمشاريع الناشئة",
    price: "499",
    features: [
      "موقع تعريفي حتى 5 صفحات",
      "تصميم متجاوب",
      "تحسين SEO أساسي",
      "دعم فني لمدة شهر",
    ],
  },
  {
    name: "Business",
    label: "الأكثر طلبًا",
    price: "1,499",
    features: [
      "موقع متقدم أو متجر إلكتروني",
      "لوحة تحكم مخصصة",
      "تحسين SEO احترافي",
      "تكامل بوابات الدفع",
      "دعم فني لمدة 6 أشهر",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    label: "للحلول المؤسسية",
    price: "حسب الطلب",
    features: [
      "نظام ERP أو تطبيق متكامل",
      "تكاملات API متقدمة",
      "ذكاء اصطناعي مخصص",
      "بنية تحتية سحابية",
      "دعم فني VIP 24/7",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          tag="باقاتنا"
          title={
            <>
              اختر الباقة <span className="gradient-text">المناسبة لك</span>
            </>
          }
          desc="باقات مرنة تناسب جميع أحجام الأعمال، مع إمكانية التخصيص الكامل."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className={`relative h-full rounded-3xl border p-8 transition hover:-translate-y-1 ${
                  p.featured
                    ? "border-transparent gradient-primary-bg text-primary-foreground shadow-glow scale-[1.02]"
                    : "border-border bg-card shadow-card hover:shadow-glow"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 right-6 rounded-full bg-success px-3 py-1 text-[10px] font-bold text-success-foreground shadow-card">
                    الأكثر طلبًا
                  </span>
                )}
                <div
                  className={`text-xs font-bold ${p.featured ? "text-white/80" : "text-primary"}`}
                >
                  {p.label}
                </div>
                <h3 className="mt-2 text-2xl font-extrabold">{p.name}</h3>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold">{p.price}</span>
                  {p.price !== "حسب الطلب" && (
                    <span
                      className={`text-sm ${p.featured ? "text-white/80" : "text-muted-foreground"}`}
                    >
                      $ / مشروع
                    </span>
                  )}
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`h-4 w-4 mt-0.5 ${p.featured ? "text-white" : "text-success"}`}
                      />
                      <span className={p.featured ? "text-white/90" : ""}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition ${
                    p.featured
                      ? "bg-white text-primary hover:bg-white/90"
                      : "gradient-primary-bg text-primary-foreground hover:opacity-90"
                  }`}
                >
                  ابدأ الآن
                  <ArrowLeft className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          tag="تواصل معنا"
          title={
            <>
              هل أنت <span className="gradient-text">مستعد للبدء؟</span>
            </>
          }
          desc="أخبرنا عن مشروعك وسنعود إليك خلال 24 ساعة بعرض مخصص."
        />
        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-card"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="الاسم" name="name" placeholder="اسمك الكامل" />
                <Field
                  label="البريد الإلكتروني"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
                <Field label="رقم الهاتف" name="phone" placeholder="+20 ..." />
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    نوع الخدمة
                  </label>
                  <select className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring">
                    {SERVICES.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-sm font-semibold">
                  الرسالة
                </label>
                <textarea
                  rows={5}
                  placeholder="اكتب تفاصيل مشروعك..."
                  className="w-full rounded-xl border border-input bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-primary-bg px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-glow transition hover:opacity-95"
              >
                {sent ? "تم الإرسال بنجاح ✓" : "أرسل الرسالة"}
                {!sent && <ArrowLeft className="h-4 w-4" />}
              </button>
            </form>
          </Reveal>

          {/* Info */}
          <Reveal className="lg:col-span-2" delay={100}>
            <div className="flex h-full flex-col gap-4">
              <InfoCard
                icon={Phone}
                label="اتصل بنا"
                value="01010028108"
                href="tel:01010028108"
              />
              <InfoCard
                icon={Mail}
                label="البريد الإلكتروني"
                value="info@alrowad-soft.com"
                href="mailto:info@alrowad-soft.com"
              />
              <InfoCard
                icon={MapPin}
                label="العنوان"
                value="سوهاج، جمهورية مصر العربية"
              />
              <a
                href="https://wa.me/201010028108"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-success px-5 py-4 text-sm font-bold text-success-foreground shadow-card transition hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" />
                راسلنا على واتساب
              </a>
              <div className="overflow-hidden rounded-2xl border border-border shadow-card aspect-[4/3]">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33952.45381242105!2d31.67403054799129!3d26.558304023326937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144f59375b0e09f1%3A0xa33bfcf664c5f2fe!2sSohag%2C%20El-Khouly%2C%20Sohag%201%2C%20Sohag%20Governorate!5e0!3m2!1sen!2seg!4v1782433264456!5m2!1sen!2seg"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid h-12 w-12 place-items-center rounded-xl gradient-primary-bg text-primary-foreground shadow-glow">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-bold" dir="ltr">
          {value}
        </div>
      </div>
    </>
  );

  return href ? (
    <a
      href={href}
      className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-glow"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-glow">
      {content}
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl gradient-primary-bg text-primary-foreground shadow-glow">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-extrabold">الرواد للبرمجيات</div>
                <div className="text-[10px] text-muted-foreground">
                  Al Rowad Software
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              شريكك في رحلة التحول الرقمي بحلول متكاملة وأحدث التقنيات العالمية.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition hover:text-primary hover:border-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="روابط سريعة"
            links={NAV.map((n) => ({ href: n.href, label: n.label }))}
          />
          <FooterCol
            title="خدماتنا"
            links={SERVICES.slice(0, 6).map((s) => ({
              href: "#services",
              label: s.title,
            }))}
          />

          <div>
            <h4 className="text-sm font-bold">تواصل معنا</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />{" "}
                <span dir="ltr">+201010028108</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> info@alrowad-soft.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> سوهاج، مصر
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
          <span>
            © 2026 شركة الرواد للبرمجيات وتكنولوجيا المعلومات. جميع الحقوق
            محفوظة.
          </span>
          <span>صُمم وطوّر بشغف ❤️ في الرواد</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-bold">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-muted-foreground transition hover:text-primary"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- WhatsApp floating ---------- */
function FloatingWhats() {
  return (
    <a
      href="https://wa.me/201010028108"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 left-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-success text-success-foreground shadow-glow animate-float hover:scale-110 transition"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

/* ---------- Page ---------- */
function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Why />
        <TeamSection />
        <Tech />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <FloatingWhats />
    </div>
  );
}