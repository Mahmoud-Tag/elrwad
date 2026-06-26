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
  Server,
  Palette,
  Megaphone,
  Bot,
  CheckCircle,
  Cpu,
  Globe,
  Shield,
  Zap,
  ShoppingCart,
  Smartphone,
  Layers,
} from "lucide-react";

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

// ====== بيانات الخدمات ======
const SERVICE_DATA = [
  {
    id: 1,
    title: "المتاجر الإلكترونية",
    description:
      "متاجر احترافية مع بيانات دفع آمنة وإدارة كاملة لتجربة تسوق استثنائية.",
    icon: ShoppingCart,
    color: "blue",
    features: [
      "بوابات دفع آمنة",
      "إدارة منتجات متكاملة",
      "تقارير مبيعات لحظية",
    ],
    extraTitle: "أمان متقدم",
    extraDescription: "حماية بيانات العملاء وتشفير المعاملات المالية",
  },
  {
    id: 2,
    title: "الاستضافة وإدارة الخوادم",
    description:
      "بنية تحتية موثوقة بأعلى معايير الأداء والأمان لتضمن استقرار واستمرارية خدماتك.",
    icon: Server,
    color: "purple",
    features: ["خوادم عالية الأداء", "أمان متكامل", "دعم فني 24/7"],
    extraTitle: "حماية متقدمة",
    extraDescription: "نسخ احتياطي يومي وتشفير كامل",
  },
  {
    id: 3,
    title: "الأنظمة الإدارية ERP",
    description:
      "أنظمة متكاملة لإدارة الموارد والعمليات في شركاتك بكفاءة عالية.",
    icon: Layers,
    color: "orange",
    features: ["إدارة الموارد البشرية", "المحاسبة والمالية", "سلسلة التوريد"],
    extraTitle: "تكامل شامل",
    extraDescription: "ربط جميع الإدارات في منصة واحدة",
  },
  {
    id: 4,
    title: "تصميم الهوية البحرية",
    description:
      "هويات بحرية مميزة تعكس قيم عالمات التجارية وتعزز حضورها في السوق.",
    icon: Palette,
    color: "green",
    features: ["شعارات احترافية", "هوية متكاملة", "تصاميم عصرية"],
    extraTitle: "تميز بصري",
    extraDescription: "ألوان وخطوط تعكس شخصية علامتك التجارية",
  },
  {
    id: 5,
    title: "التسويق الرقمي",
    description:
      "حملات إعلانية مدروسة وتحليلات دقيقة لتحقيق نتائج قابلة للقياس.",
    icon: Megaphone,
    color: "blue",
    features: ["استراتيجيات تسويقية", "تحليلات دقيقة", "إعلانات مستهدفة"],
    extraTitle: "تحليل الأداء",
    extraDescription: "تقارير دورية لقياس عائد الاستثمار",
  },
  {
    id: 6,
    title: "تطوير تطبيقات الهاتف",
    description: "تطبيقات Android و iOS بأداء عالٍ وتجربة مستخدم استثنائية.",
    icon: Smartphone,
    color: "purple",
    features: [
      "تطبيقات أصلية",
      "تجربة مستخدم سلسة",
      "تكامل مع الخدمات السحابية",
    ],
    extraTitle: "تجربة متفوقة",
    extraDescription: "واجهات سريعة وتفاعلية تناسب جميع الأجهزة",
  },
  {
    id: 7,
    title: "حلول الذكاء الاصطناعي",
    description:
      "أتمتة ذكية، تحليلات تنبؤية، وبروتوكولات محادثة متقدمة لتحسين عملك.",
    icon: Bot,
    color: "orange",
    features: ["أتمتة العمليات", "تحليلات تنبؤية", "روبوتات محادثة"],
    extraTitle: "ذكاء متقدم",
    extraDescription: "نماذج تعلم آلي مخصصة لاحتياجاتك",
  },
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

// ====== مكون بطاقة الخدمة (مع زر طلب الخدمة) ======
function ServiceCard({ service }: { service: (typeof SERVICE_DATA)[0] }) {
  const colorMap = {
    blue: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-500",
      hover: "hover:border-blue-400 dark:hover:border-blue-500",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      btnBg: "bg-blue-600 hover:bg-blue-700",
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-900/20",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-500",
      hover: "hover:border-purple-400 dark:hover:border-purple-500",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
      btnBg: "bg-purple-600 hover:bg-purple-700",
    },
    orange: {
      bg: "bg-orange-50 dark:bg-orange-900/20",
      text: "text-orange-600 dark:text-orange-400",
      border: "border-orange-500",
      hover: "hover:border-orange-400 dark:hover:border-orange-500",
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
      btnBg: "bg-orange-600 hover:bg-orange-700",
    },
    green: {
      bg: "bg-green-50 dark:bg-green-900/20",
      text: "text-green-600 dark:text-green-400",
      border: "border-green-500",
      hover: "hover:border-green-400 dark:hover:border-green-500",
      iconBg: "bg-green-100 dark:bg-green-900/30",
      btnBg: "bg-green-600 hover:bg-green-700",
    },
  };

  const colors = colorMap[service.color as keyof typeof colorMap];
  const Icon = service.icon;

  const handleRequest = () => {
    window.location.href = "/#contact";
  };

  return (
    <div
      className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-t-4 ${colors.border} hover:-translate-y-2 flex flex-col`}
    >
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        {/* العنوان والأيقونة */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`w-12 h-12 rounded-2xl ${colors.iconBg} ${colors.text} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white flex-1">
            {service.title}
          </h3>
        </div>

        {/* الوصف */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* قائمة الميزات */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
            >
              <CheckCircle className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* القسم الإضافي */}
        <div
          className={`bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 mb-6 border-r-4 ${colors.border}`}
        >
          <h4 className={`font-bold text-sm ${colors.text} mb-1`}>
            {service.extraTitle}
          </h4>
          <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
            {service.extraDescription}
          </p>
        </div>

        {/* زر طلب الخدمة */}
        <button
          onClick={handleRequest}
          className={`w-full py-3 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${colors.btnBg} shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm`}
        >
          <span>🚀 اطلب الخدمة الآن</span>
        </button>
      </div>
    </div>
  );
}

// ====== صفحة الخدمات الرئيسية ======
const ServicesPage: React.FC = () => {
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
          {/* الهيدر */}
          <div className="text-right mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white mt-3">
              خدماتنا
            </h1>

            <div className="float-right w-20 h-1 bg-gradient-to-l from-blue-600 to-blue-400 mt-3 rounded-full mr-auto"></div>
          </div>

          {/* قسم طلب عرض سعر */}
          <div className="bg-gradient-to-l from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 mb-16 text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              اطلب عرض سعر
            </h2>
            <p className="text-blue-100 text-sm md:text-base mb-6 max-w-2xl mx-auto">
              احصل على عرض سعر مخصص يناسب احتياجات مشروعك، تواصل مع فريقنا
              الخبير اليوم.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-full text-base shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 inline-flex items-center justify-center gap-2"
            >
              <span>اطلب عرض سعر الآن</span>
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          {/* شبكة الخدمات */}
          <div className="mb-16">
            <div className="text-right mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white flex items-center justify-start gap-2">
                <Settings className="w-7 h-7 text-blue-600" />
                <span>خدماتنا المتكاملة</span>
              </h3>
              <div className="float-right w-20 h-1 bg-gradient-to-l from-blue-600 to-blue-300 rounded-full mr-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICE_DATA.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          {/* المميزات الإضافية */}
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

          {/* الإحصائيات */}
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

          {/* زر طلب عرض سعر أسفل الصفحة */}
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

export default ServicesPage;
