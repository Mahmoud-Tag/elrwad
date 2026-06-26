import * as React from "react";
import { useState, useEffect } from "react";
import {
  Award,
  Headphones,
  Lightbulb,
  Users,
  Eye,
  Target,
  BarChart3,
  ChevronLeft,
  Search,
  ClipboardList,
  PieChart,
  Paintbrush,
  Code,
  Bug,
  Rocket,
  Settings,
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
} from "lucide-react";

// تعريف روابط القائمة
const NAV = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/services", label: "الخدمات" },
  { href: "/#contact", label: "تواصل معنا" },
];

// تعريف الخدمات (للفوتر)
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

// Hook للوضع الداكن
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

// مكون الـ Navbar
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

// مكون عمود الفوتر
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

// مكون الفوتر
function Footer() {
  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid md:grid-cols-4 gap-8">
          {/* العمود الأول: معلومات الشركة */}
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

          {/* عمود الروابط السريعة */}
          <FooterCol
            title="روابط سريعة"
            links={NAV.map((n) => ({ href: n.href, label: n.label }))}
          />

          {/* عمود الخدمات */}
          <FooterCol
            title="خدماتنا"
            links={SERVICES.slice(0, 6).map((s) => ({
              href: "/services",
              label: s.title,
            }))}
          />

          {/* عمود التواصل */}
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

        {/* حقوق النشر */}
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

// مكون AboutUs الرئيسي
const AboutUs: React.FC = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <>
      <Navbar />

      <div
        dir="rtl"
        className="min-h-screen bg-slate-50/50 dark:bg-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans"
      >
        <div className="max-w-7xl mx-auto">
          {/* ====== العنوان الرئيسي ====== */}
          <div className="text-right mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white mt-3">
              من نحن
            </h1>
            <div className="float-right w-20 h-1 bg-gradient-to-l from-blue-600 to-blue-400 mt-3 rounded-full mr-auto"></div>
          </div>

          {/* ====== المقدمة التعريفية ====== */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10 mb-12 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-start gap-3 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                نبني المستقبل الرقمي
              </h2>
              <span className="text-3xl">🚀</span>
            </div>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-[1.8] max-w-4xl text-right">
              شركة الرؤية للبرمجيات وتكنولوجيًا المعلومات هي شركة متخصصة في
              تطوير الحلول الرقمية الحديثة ومساعدة الشركات على التحول الرقمي من
              خلال أحدث التقنيات العالمية. نؤمن بأن التكنولوجيا هي المحرك
              الأساسي للتغيير، وننصح دائماً لتقديم قيمة حقيقية لعمالئنا.
            </p>
          </div>

          {/* ====== الرسالة والرؤية ====== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-7 shadow-md border-r-4 border-purple-500 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-start gap-3 mb-3">
                <Target className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  رسالتنا
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-right text-sm md:text-base">
                تمكين الأعمال من خلال حلول برمجية ذكية، سهلة الاستخدام، وقابلة
                للتطوير، مع الالتزام بأعلى معايير الجودة والأمان.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-7 shadow-md border-r-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-start gap-3 mb-3">
                <Eye className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  رؤيتنا
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-right text-sm md:text-base">
                أن نكون الشريك الرقمي الأول للشركات في المنطقة، ونقود مسيرة
                التحول الرقمي بمعايير عالمية وحلول متكاملة.
              </p>
            </div>
          </div>

          {/* ====== إحصائيات سريعة ====== */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-black text-blue-600">+50</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                عميل راض
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-black text-green-600">+100</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                مشروع منفذ
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-black text-orange-600">+5</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                سنوات خبرة
              </div>
            </div>
          </div>

          {/* ====== بطاقات "لماذا نحن؟" ====== */}
          <div className="mb-14">
            <div className="text-right mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white flex items-center justify-start gap-2">
                <BarChart3 className="w-7 h-7 text-blue-600" />
                <span>لماذا نحن؟</span>
              </h3>
              <div className="float-right w-20 h-1 bg-gradient-to-l from-blue-600 to-blue-300 rounded-full mr-auto mt-2"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 text-right border-b-4 border-purple-500 hover:-translate-y-1">
                <div className="flex items-center justify-start gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                    حلول مبتكرة
                  </h4>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  نطوّر حلولًا رقمية مبتكرة تعتمد على أحدث التقنيات وأفضل
                  الممارسات العالمية، لمساعدة عملائنا على تحقيق النمو والتميز في
                  عالم الأعمال الرقمي.{" "}
                </p>
              </div>

              <div className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 text-right border-b-4 border-orange-500 hover:-translate-y-1">
                <div className="flex items-center justify-start gap-3 mb-3">
                  <Users className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                    فريق متخصص
                  </h4>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  فريق من المحترفين يجمع بين الخبرة التقنية والإبداع، لتطوير
                  حلول رقمية حديثة تحقق أهداف عملائنا بكفاءة واحترافية.{" "}
                </p>
              </div>

              <div className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 text-right border-b-4 border-blue-500 hover:-translate-y-1">
                <div className="flex items-center justify-start gap-3 mb-3">
                  <Headphones className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                    دعم مستمر
                  </h4>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  لا تنتهي علاقتنا مع العميل عند تسليم المشروع، بل نستمر في
                  تقديم الدعم الفني والصيانة والتحديثات اللازمة لضمان استقرار
                  النظام وتحقيق أفضل أداء على المدى الطويل.{" "}
                </p>
              </div>

              <div className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 text-right border-b-4 border-green-500 hover:-translate-y-1">
                <div className="flex items-center justify-start gap-3 mb-3">
                  <Award className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                    جودة إستثنائية
                  </h4>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  نلتزم بتطبيق أفضل الممارسات العالمية ومعايير التطوير الحديثة
                  في كل مرحلة من مراحل العمل، لنقدم حلولًا رقمية موثوقة وعالية
                  الأداء تحقق أعلى مستويات الجودة والاحترافية.{" "}
                </p>
              </div>
            </div>
          </div>

          {/* ====== رحلة بناء الحلول الرقمية ====== */}
          <div className="mb-14">
            <div className="text-right mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white flex items-center justify-start gap-2">
                <Settings className="w-7 h-7 text-blue-600" />
                <span>رحلة بناء الحلول الرقمية</span>
              </h3>
              <div className="float-right w-20 h-1 bg-gradient-to-l from-blue-600 to-blue-300 rounded-full mr-auto mt-2"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-gray-800 dark:text-white text-sm">
                  الاكشاف
                </h5>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 leading-relaxed">
                  فهم الاحتياجات وتحليل السوق
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center mx-auto mb-3">
                  <ClipboardList className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-gray-800 dark:text-white text-sm">
                  التخطيط
                </h5>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 leading-relaxed">
                  وضع الاستراتيجية والحلول الزمنية
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center mx-auto mb-3">
                  <PieChart className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-gray-800 dark:text-white text-sm">
                  التحليل
                </h5>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 leading-relaxed">
                  دراسة الجدوى والمتطلبات التقنية
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-pink-200 dark:hover:border-pink-800 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-pink-50 dark:bg-pink-900/20 text-pink-600 flex items-center justify-center mx-auto mb-3">
                  <Paintbrush className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-gray-800 dark:text-white text-sm">
                  التصميم
                </h5>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 leading-relaxed">
                  واجهات مستخدم (UX/UI) احترافية
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 flex items-center justify-center mx-auto mb-3">
                  <Code className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-gray-800 dark:text-white text-sm">
                  التطوير
                </h5>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 leading-relaxed">
                  برمجة وبناء الأنظمة الأساسية
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-red-200 dark:hover:border-red-800 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 flex items-center justify-center mx-auto mb-3">
                  <Bug className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-gray-800 dark:text-white text-sm">
                  الاختبار
                </h5>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 leading-relaxed">
                  فحص الجودة وضمان عدم وجود أخطاء
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-green-200 dark:hover:border-green-800 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center mx-auto mb-3">
                  <Rocket className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-gray-800 dark:text-white text-sm">
                  النشر
                </h5>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 leading-relaxed">
                  إطلاق المشروع في بيئة الإنتاج
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-yellow-200 dark:hover:border-yellow-800 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 flex items-center justify-center mx-auto mb-3">
                  <Settings className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-gray-800 dark:text-white text-sm">
                  الصيانة
                </h5>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 leading-relaxed">
                  دعم مستمر وتحسينات دورية
                </p>
              </div>
            </div>
          </div>

          {/* ====== زر طلب عرض السعر ====== */}
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

      {/* ====== الفوتر ====== */}
      <Footer />
    </>
  );
};

export default AboutUs;
