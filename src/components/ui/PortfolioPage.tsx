import * as React from "react";
import { useState, useEffect } from "react";
import {
  Sparkles,
  Sun,
  Moon,
  ArrowLeft,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  Settings,
  CheckCircle,
  Cpu,
  Globe,
  Shield,
  Zap,
  ExternalLink,
  Filter,
} from "lucide-react";

// استيراد الصورة
import backgroundImage from "@/assets/Gemini_Generated_Image_qrruwnqrruwnqrru.png";

// ====== تعريف الروابط ======
const NAV = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/services", label: "الخدمات" },
  { href: "/#contact", label: "تواصل معنا" },
];

const SERVICES = [
  { title: "تطوير تطبيقات الويب" },
  { title: "تطبيقات الجوال" },
  { title: "التحول الرقمي" },
  { title: "تصميم واجهات المستخدم" },
  { title: "استشارات تقنية" },
  { title: "حلول الذكاء الاصطناعي" },
  { title: "أمن المعلومات" },
  { title: "الحوسبة السحابية" },
];

// ====== بيانات المشاريع ======
const PROJECTS = [
  {
    id: 1,
    title: "منصة التجارة الإلكترونية",
    category: "تطبيقات",
    image: "🛒",
    description: "منصة متكاملة للبيع عبر الإنترنت مع بوابات دفع متعددة.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "تطبيق الخدمات الطبية",
    category: "تطبيقات",
    image: "🏥",
    description: "تطبيق لحجز المواعيد ومتابعة المرضى للأطباء والعيادات.",
    tags: ["Flutter", "Firebase", "AI"],
  },
  {
    id: 3,
    title: "نظام ERP للصناعة",
    category: "نظم ERP",
    image: "🏭",
    description: "نظام متكامل لإدارة الإنتاج والمخزون والموارد البشرية.",
    tags: ["Odoo", "Python", "PostgreSQL"],
  },
  {
    id: 4,
    title: "موقع الشركة الرسمي",
    category: "مواقع إلكترونية",
    image: "🌐",
    description: "موقع يعكس هوية الشركة ويقدم خدماتها بشكل احترافي.",
    tags: ["Next.js", "Tailwind", "Framer"],
  },
  {
    id: 5,
    title: "حلول الذكاء الاصطناعي للتحليلات",
    category: "أفضل إدارة",
    image: "🤖",
    description: "منصة تحليلات تنبؤية تعتمد على الذكاء الاصطناعي.",
    tags: ["TensorFlow", "Python", "Docker"],
  },
  {
    id: 6,
    title: "تطبيق توصيل الطعام",
    category: "تطبيقات",
    image: "🍔",
    description: "تطبيق لتوصيل الطعام بين المطاعم والعملاء.",
    tags: ["React Native", "Node.js", "Socket.io"],
  },
  {
    id: 7,
    title: "نظام إدارة المدارس",
    category: "نظم ERP",
    image: "📚",
    description: "نظام شامل لإدارة الطلاب والمعلمين والجداول الدراسية.",
    tags: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    id: 8,
    title: "موقع إخباري تفاعلي",
    category: "مواقع إلكترونية",
    image: "📰",
    description: "موقع يعرض الأخبار بتصنيفات متعددة وتجربة مستخدم مميزة.",
    tags: ["WordPress", "React", "GraphQL"],
  },
  {
    id: 9,
    title: "منصة التسويق الرقمي",
    category: "مشارك إلكترونية",
    image: "📊",
    description: "منصة متكاملة لإدارة الحملات الإعلانية وتحليل الأداء.",
    tags: ["Django", "Angular", "PostgreSQL"],
  },
  {
    id: 10,
    title: "تطبيق البنك الرقمي",
    category: "تطبيقات",
    image: "🏦",
    description: "تطبيق مصرفي آمن يوفر خدمات مالية متكاملة.",
    tags: ["Swift", "Java", "Spring Boot"],
  },
  {
    id: 11,
    title: "نظام إدارة المستودعات",
    category: "نظم ERP",
    image: "📦",
    description: "نظام لإدارة المخزون والمستودعات بكفاءة عالية.",
    tags: ["C#", ".NET", "SQL Server"],
  },
  {
    id: 12,
    title: "موقع حجز الفنادق",
    category: "مواقع إلكترونية",
    image: "🏨",
    description: "منصة لحجز الفنادق والغرف مع نظام تقييم متقدم.",
    tags: ["React", "Node.js", "MongoDB"],
  },
];

// ====== تصنيفات المشاريع ======
const CATEGORIES = [
  "الكل",
  "تطبيقات",
  "مواقع إلكترونية",
  "نظم ERP",
  "أفضل إدارة",
  "مشارك إلكترونية",
];

// ====== Hook للوضع الداكن ======
function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  const toggle = () => {
    setDark((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return { dark, toggle };
}

// ====== مكون Navbar ======
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
            scrolled
              ? "glass shadow-card bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
              : "bg-transparent border-transparent"
          }`}
        >
          <a href="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-extrabold leading-tight text-gray-800 dark:text-white">
                الرواد
              </span>
              <span className="block text-[10px] text-gray-500 dark:text-gray-400">
                Al Rowad Software
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 transition hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="تبديل الوضع"
              className="grid h-9 w-9 place-items-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 transition hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {dark ? (
                <Sun className="h-4 w-4 text-yellow-500" />
              ) : (
                <Moon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            <a
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
            >
              اطلب عرض سعر
              <ArrowLeft className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden grid h-9 w-9 place-items-center rounded-xl border border-gray-200 dark:border-gray-700"
              aria-label="القائمة"
            >
              {open ? (
                <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 p-3 shadow-lg animate-fade-up">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
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

// ====== مكونات الفوتر ======
function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-bold text-gray-800 dark:text-white">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-gray-500 dark:text-gray-400 transition hover:text-blue-600 dark:hover:text-blue-400"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-extrabold text-gray-800 dark:text-white">
                  الرواد للبرمجيات
                </div>
                <div className="text-[10px] text-gray-500 dark:text-gray-400">
                  Al Rowad Software
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              شريكك في رحلة التحول الرقمي بحلول متكاملة وأحدث التقنيات العالمية.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 transition hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400"
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
              href: "/services",
              label: s.title,
            }))}
          />

          <div>
            <h4 className="text-sm font-bold text-gray-800 dark:text-white">
              تواصل معنا
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />{" "}
                <span dir="ltr">01278587980</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />{" "}
                info@alrowad-soft.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />{" "}
                القاهرة، مصر
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-gray-200 dark:border-gray-800 pt-6 text-xs text-gray-500 dark:text-gray-400">
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

// ====== مكون بطاقة المشروع ======
function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  const handleRequest = () => {
    window.location.href = "/#contact";
  };

  const colors = [
    "from-blue-500 to-cyan-400",
    "from-purple-500 to-pink-400",
    "from-orange-500 to-red-400",
    "from-green-500 to-teal-400",
    "from-indigo-500 to-purple-400",
    "from-rose-500 to-orange-400",
  ];
  const gradient = colors[project.id % colors.length];

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-gray-100 dark:border-gray-700 flex flex-col">
      <div
        className={`relative h-48 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
      >
        <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
          {project.image}
        </span>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href="#"
            className="bg-white/90 text-gray-900 rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
          >
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <div className="flex gap-1">
            {project.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
          {project.description}
        </p>

        <button
          onClick={handleRequest}
          className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
        >
          <span>🚀 اطلب الخدمة الآن</span>
        </button>
      </div>
    </div>
  );
}

// ====== صفحة الأعمال الرئيسية (مع الخلفية الجديدة) ======
const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState("الكل");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  useEffect(() => {
    if (filter === "الكل") {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.filter((p) => p.category === filter));
    }
  }, [filter]);

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const stats = [
    { value: "+50", label: "عميل راض" },
    { value: "+100", label: "مشروع منفذ" },
    { value: "+5", label: "سنوات خبرة" },
  ];

  return (
    <>
      <Navbar />

      <div
        dir="rtl"
        className="min-h-screen bg-slate-50/50 dark:bg-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans"
      >
        <div className="max-w-7xl mx-auto">
          {/* ====== الهيدر الجديد بالصورة ====== */}
          <div
            className="relative rounded-2xl overflow-hidden mb-12 p-8 md:p-12 text-white shadow-xl"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* طبقة شفافة لتعتيم الصورة وتحسين وضوح النص */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

            <div className="relative z-10 text-right">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-4">
                أعمالنا
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
                مشاريعـنا
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mr-auto mb-6 leading-relaxed">
                مجموعة مختارة من المشاريع التي حققت نتائج استثنائية لعملائنا.
              </p>
              <button
                onClick={scrollToContact}
                className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-full text-base shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 inline-flex items-center justify-center gap-2"
              >
                <span>اطلب عرض سعر الآن</span>
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ====== الفلاتر ====== */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 justify-end">
              <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400 ml-2" />
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* ====== شبكة المشاريع ====== */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  لا توجد مشاريع في هذا التصنيف.
                </p>
              </div>
            )}
          </div>

          {/* ====== المميزات الإضافية ====== */}
          <div className="mb-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 dark:border-gray-700">
            <div className="text-right mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                لماذا تختار خدماتنا؟
              </h3>
              <div className="float-right w-20 h-1 bg-gradient-to-l from-blue-600 to-blue-300 rounded-full mr-auto mt-2"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white text-sm">
                  تقنيات حديثة
                </h4>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  أحدث التقنيات العالمية
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white text-sm">
                  أمان عالي
                </h4>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  معايير أمان متقدمة
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white text-sm">
                  أداء متميز
                </h4>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  سرعة وكفاءة عالية
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white text-sm">
                  دعم عالمي
                </h4>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  خدماتنا متاحة عالمياً
                </p>
              </div>
            </div>
          </div>

          {/* ====== إحصائيات سريعة ====== */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl font-black text-blue-600">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* ====== زر طلب عرض سعر أسفل الصفحة ====== */}
          <div className="text-center mt-8 pb-4">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-l from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3.5 px-12 rounded-full text-base shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 inline-flex items-center justify-center gap-2"
            >
              <span>اطلب عرض سعر</span>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
              تواصل مع خبراتنا للحصول على استشارة مجانية
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PortfolioPage;
