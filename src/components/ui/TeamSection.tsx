import * as React from "react";
import { useState, useEffect } from "react";
import { Users, Linkedin, Twitter, Mail, Github, ChevronLeft } from "lucide-react";

// بيانات فريق العمل (يمكنك تعديلها)
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "محمود الصلعاوى ",
    role: " رئيس مجلس الإدارة",
    description: "خبرة 15 عاماً في قيادة مشاريع التحول الرقمي.",
    avatar: 'import("@/assets/boos.png")',
    social: {
      linkedin: "#",
      twitter: "#",
      mail: "mailto:ahmed@example.com",
      github: "#",
    },
  },
  {
    id: 2,
    name: "محمود تاج الدين",
    role: "المدير التنفيذى",
    description: "متخصص في تطوير الأنظمة المعقدة وحلول الذكاء الاصطناعي.",
    avatar: "👩‍💻",
    social: {
      linkedin: "#",
      twitter: "#",
      mail: "mailto:sara@example.com",
      github: "#",
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
      github: "#",
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
      github: "#",
    },
  },
];

// ====== مكون بطاقة العضو ======
function TeamCard({ member }: { member: (typeof TEAM_MEMBERS)[0] }) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center p-6">
      {/* الصورة الرمزية */}
      <div className="relative w-28 h-28 mx-auto mb-4">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-5xl shadow-lg group-hover:scale-105 transition-transform duration-300">
          {member.avatar}
        </div>
        <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800"></div>
      </div>

      {/* الاسم والوظيفة */}
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
        {member.name}
      </h3>
      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
        {member.role}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
        {member.description}
      </p>

      {/* أيقونات التواصل */}
      <div className="flex items-center justify-center gap-2">
        <a
          href={member.social.linkedin}
          aria-label="LinkedIn"
          className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href={member.social.twitter}
          aria-label="Twitter"
          className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300"
        >
          <Twitter className="w-4 h-4" />
        </a>
        <a
          href={member.social.mail}
          aria-label="Email"
          className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
        >
          <Mail className="w-4 h-4" />
        </a>
        <a
          href={member.social.github}
          aria-label="GitHub"
          className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

// ====== مكون القسم الرئيسي ======
export default function TeamSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* رأس القسم */}
        <div className="text-right mb-10">
          <span className="text-blue-600 dark:text-blue-400 font-bold text-sm tracking-wider bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 rounded-full inline-block mb-3">
            فريقنا
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white flex items-center justify-start gap-3">
            <Users className="w-8 h-8 text-blue-600" />
            <span>فريق الخبراء</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mr-auto text-sm md:text-base leading-relaxed">
            نخبة من الكفاءات المتميزة تعمل بشغف لتقديم أفضل الحلول لعملائنا.
          </p>
          <div className="float-right w-20 h-1 bg-gradient-to-l from-blue-600 to-blue-300 rounded-full mr-auto mt-3"></div>
        </div>

        {/* شبكة الأعضاء */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* زر إضافي (اختياري) */}
        <div className="text-center mt-10">
          <a
            href="/teams"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-l from-blue-600 to-indigo-700 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <span>تعرف على الفريق كاملاً</span>
            <ChevronLeft className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
