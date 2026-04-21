"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Language = "en" | "ar"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.insights": "Insights",
    "nav.investment": "Investment Environment",
    "nav.services": "Services",
    "nav.localization": "Industrial Localization",
    "nav.tax": "Tax Overview",
    "nav.projects": "Projects",
    "nav.media": "Media",
    "nav.interviews": "Interviews",
    "nav.contact": "Contact Us",
    
    // Hero
    "hero.badge": "Aligned with Vision 2030",
    "hero.title": "Your Gateway to Investment & Localization in Saudi Arabia",
    "hero.subtitle": "Helping global companies establish and grow in Saudi Arabia. Expert investment consulting, company setup, and industrial localization services.",
    "hero.cta.start": "Start Your Investment",
    "hero.cta.explore": "Explore Services",
    "hero.cta.contact": "Contact Us",
    
    // Stats
    "stats.tax": "Corporate Tax",
    "stats.tax.desc": "Competitive tax rate",
    "stats.ownership": "Foreign Ownership",
    "stats.ownership.desc": "Full ownership allowed",
    "stats.ownership.value": "100%",
    "stats.minerals": "Mineral Wealth",
    "stats.minerals.desc": "Untapped resources",
    "stats.minerals.value": "$2.5T",
    "stats.experience": "Years Experience",
    "stats.experience.desc": "Industry expertise",
    "stats.experience.value": "30+",
    "stats.timeline": "Company Setup",
    "stats.incentives": "Government Incentives",
    "stats.timeline.value": "2-4 Weeks",
    "stats.incentives.value": "Available",
    
    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive support for your business journey in Saudi Arabia",
    "services.company.title": "Company Setup Services",
    "services.company.desc": "MISA registration, Commercial Registration, Bank accounts, Government accounts setup",
    "services.business.title": "Business Support",
    "services.business.desc": "Accounting, Tax filing, License processing, Trademark registration, Compliance",
    "services.industrial.title": "Industrial Localization",
    "services.industrial.desc": "Factory setup, Industrial land, SIDF loan support, Government incentives",
    
    // Why Saudi
    "why.title": "Why Saudi Arabia?",
    "why.subtitle": "Strategic advantages for your business",
    "why.location": "Strategic Location",
    "why.location.desc": "Gateway between Asia, Europe, and Africa",
    "why.stability": "Political Stability",
    "why.stability.desc": "Stable government with strong economic policies",
    "why.incentives": "Government Incentives",
    "why.incentives.desc": "Tax benefits and support programs for investors",
    "why.ecosystem": "Financial Ecosystem",
    "why.ecosystem.desc": "Strong banking sector backed by PIF",
    
    // Vision 2030
    "vision.title": "Vision 2030 Alignment",
    "vision.subtitle": "Building a thriving future together",
    "vision.pillar1": "Vibrant Society",
    "vision.pillar1.desc": "Strong values, rich culture, and quality of life",
    "vision.pillar2": "Thriving Economy",
    "vision.pillar2.desc": "Diversified economy with investment opportunities",
    "vision.pillar3": "Ambitious Nation",
    "vision.pillar3.desc": "Effective government and responsible citizenship",
    
    // Investment Page
    "investment.title": "Saudi Investment Environment",
    "investment.subtitle": "Discover the opportunities in the Kingdom",
    "investment.advantages.title": "Investment Advantages",
    "investment.resources.title": "Key Resources",
    "investment.resources.oil": "Oil Reserves",
    "investment.resources.minerals": "Mineral Wealth",
    "investment.resources.minerals.value": "$2.5 Trillion",
    "investment.misa.title": "MISA - Ministry of Investment",
    "investment.misa.desc": "Your gateway to investment licensing and support in Saudi Arabia",
    "investment.process.title": "Company Setup Process",
    "investment.process.step1": "Submit Application",
    "investment.process.step2": "MISA Approval",
    "investment.process.step3": "Commercial Registration",
    "investment.process.step4": "Bank Account",
    "investment.process.step5": "Start Operations",
    
    // Services Page
    "services.page.title": "Our Services",
    "services.page.subtitle": "End-to-end support for your Saudi business journey",
    "services.setup.title": "Company Setup Services",
    "services.setup.misa": "Investment Registration (MISA)",
    "services.setup.cr": "Commercial Registration (CR)",
    "services.setup.bank": "Bank Account Opening",
    "services.setup.gov": "Government Accounts (GOSI, ZATCA, Qiwa)",
    "services.setup.iqama": "General Manager Iqama",
    "services.support.title": "Business Support",
    "services.support.accounting": "Accounting & Tax Filing",
    "services.support.license": "License Processing",
    "services.support.trademark": "Trademark Registration",
    "services.support.compliance": "Compliance Management",
    "services.localization.title": "Industrial Localization Services",
    "services.localization.factory": "Factory Setup",
    "services.localization.land": "Industrial Land Application",
    "services.localization.leasing": "Factory Leasing",
    "services.localization.sidf": "SIDF Loan Support",
    "services.localization.incentives": "Government Incentives Support",
    
    // Industrial Localization Page
    "localization.title": "Industrial Localization",
    "localization.subtitle": "Made in Saudi Initiative",
    "localization.madeinsaudi": "Made in Saudi",
    "localization.madeinsaudi.desc": "Join the national program to establish local manufacturing capabilities",
    "localization.timeline.title": "Factory Setup Timeline",
    "localization.authorities.title": "Key Authorities",
    "localization.authorities.mim": "Ministry of Industry & Mineral Resources",
    "localization.authorities.sidf": "Saudi Industrial Development Fund",
    "localization.authorities.lcgpa": "Local Content & Government Procurement Authority",
    "localization.authorities.hrdf": "Human Resources Development Fund",
    "localization.cities.title": "Industrial Cities",
    "localization.cities.riyadh": "Riyadh",
    "localization.cities.dammam": "Dammam",
    "localization.cities.jeddah": "Jeddah",
    "localization.modon": "MODON - Saudi Authority for Industrial Cities",
    "localization.modon.desc": "Developing integrated industrial cities across the Kingdom",
    "localization.sez.title": "Special Economic Zones Benefits",
    "localization.sez.tax": "0-5% Corporate Tax",
    "localization.sez.customs": "0% Customs Duties",
    "localization.sez.incentives": "Investment Incentives",
    
    // Tax Page
    "tax.title": "Tax Overview",
    "tax.subtitle": "Understanding Saudi Arabia's tax framework",
    "tax.corporate": "Corporate Tax",
    "tax.corporate.rate": "20%",
    "tax.withholding": "Withholding Tax",
    "tax.withholding.rate": "5%",
    "tax.vat": "VAT",
    "tax.vat.rate": "15%",
    "tax.customs": "Customs Duties",
    "tax.customs.rate": "5-15%",
    
    // Projects Page
    "projects.title": "Projects & Recognition",
    "projects.subtitle": "Our partnerships and success stories",
    "projects.partnerships": "Government Partnerships",
    "projects.modon": "MODON Collaboration",
    "projects.success": "Client Success Stories",
    "projects.gallery": "Project Gallery",
    
    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Start your business journey in Saudi Arabia",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.company": "Company Name",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Get in Touch",
    "contact.info.address": "Riyadh, Saudi Arabia",
    "contact.info.email": "info@wenx.sa",
    "contact.info.phone": "+966 11 XXX XXXX",
    "contact.cta": "Start Your Business in Saudi Arabia",
    
    // Media Page
    "media.title": "Media & Publications",
    "media.subtitle": "Stay updated with our latest insights and articles",
    "media.articles": "Featured Articles",
    "media.press": "Press Releases",
    "media.category": "Category",
    "media.date": "Date",
    "media.readmore": "Read More",
    
    // Interviews Page
    "interviews.title": "Executive Interviews",
    "interviews.subtitle": "Industry leaders share insights on Saudi investment",
    "interviews.featured": "Featured Interviews",
    "interviews.topics": "Topics",
    "interviews.duration": "Duration",
    "interviews.watch": "Watch Interview",
    
    // Footer
    "footer.rights": "All Rights Reserved",
    "footer.company": "WenX Investment Services",
    "footer.tagline": "Your Gateway to Saudi Investment",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.insights": "رؤى",
    "nav.investment": "بيئة الاستثمار",
    "nav.services": "خدماتنا",
    "nav.localization": "التوطين الصناعي",
    "nav.tax": "نظرة على الضرائب",
    "nav.projects": "المشاريع",
    "nav.media": "وسائل الإعلام",
    "nav.interviews": "المقابلات",
    "nav.contact": "اتصل بنا",
    
    // Hero
    "hero.badge": "متوافق مع رؤية 2030",
    "hero.title": "بوابتك للاستثمار والتوطين في المملكة العربية السعودية",
    "hero.subtitle": "نساعد الشركات العالمية على التأسيس والنمو في المملكة العربية السعودية. استشارات استثمارية خبيرة وخدمات تأسيس الشركات والتوطين الصناعي.",
    "hero.cta.start": "ابدأ استثمارك",
    "hero.cta.explore": "استكشف الخدمات",
    "hero.cta.contact": "اتصل بنا",
    
    // Stats
    "stats.tax": "ضريبة الشركات",
    "stats.tax.desc": "معدل ضريبي تنافسي",
    "stats.ownership": "الملكية الأجنبية",
    "stats.ownership.desc": "ملكية كاملة مسموحة",
    "stats.ownership.value": "100%",
    "stats.minerals": "الثروات المعدنية",
    "stats.minerals.desc": "موارد غير مستغلة",
    "stats.minerals.value": "$2.5T",
    "stats.experience": "سنوات من الخبرة",
    "stats.experience.desc": "خبرة صناعية",
    "stats.experience.value": "30+",
    "stats.timeline": "تأسيس الشركة",
    "stats.incentives": "الحوافز الحكومية",
    "stats.timeline.value": "2-4 أسابيع",
    "stats.incentives.value": "متاحة",
    
    // Services
    "services.title": "خدماتنا",
    "services.subtitle": "دعم شامل لرحلة عملك في المملكة العربية السعودية",
    "services.company.title": "خدمات تأسيس الشركات",
    "services.company.desc": "تسجيل وزارة الاستثمار، السجل التجاري، الحسابات البنكية، الحسابات الحكومية",
    "services.business.title": "دعم الأعمال",
    "services.business.desc": "المحاسبة، تقديم الضرائب، معالجة التراخيص، تسجيل العلامات التجارية، الامتثال",
    "services.industrial.title": "التوطين الصناعي",
    "services.industrial.desc": "إنشاء المصانع، الأراضي الصناعية، دعم قروض صندوق التنمية الصناعية، الحوافز الحكومية",
    
    // Why Saudi
    "why.title": "لماذا المملكة العربية السعودية؟",
    "why.subtitle": "مزايا استراتيجية لعملك",
    "why.location": "موقع استراتيجي",
    "why.location.desc": "بوابة بين آسيا وأوروبا وأفريقيا",
    "why.stability": "استقرار سياسي",
    "why.stability.desc": "حكومة مستقرة مع سياسات اقتصادية قوية",
    "why.incentives": "حوافز حكومية",
    "why.incentives.desc": "مزايا ضريبية وبرامج دعم للمستثمرين",
    "why.ecosystem": "منظومة مالية",
    "why.ecosystem.desc": "قطاع مصرفي قوي مدعوم من صندوق الاستثمارات العامة",
    
    // Vision 2030
    "vision.title": "التوافق مع رؤية 2030",
    "vision.subtitle": "نبني مستقبلاً مزدهراً معاً",
    "vision.pillar1": "مجتمع حيوي",
    "vision.pillar1.desc": "قيم راسخة وتراث غني وجودة حياة",
    "vision.pillar2": "اقتصاد مزدهر",
    "vision.pillar2.desc": "اقتصاد متنوع مع فرص استثمارية",
    "vision.pillar3": "وطن طموح",
    "vision.pillar3.desc": "حكومة فاعلة ومواطنة مسؤولة",
    
    // Investment Page
    "investment.title": "بيئة الاستثمار السعودية",
    "investment.subtitle": "اكتشف الفرص في المملكة",
    "investment.advantages.title": "مزايا الاستثمار",
    "investment.resources.title": "الموارد الرئيسية",
    "investment.resources.oil": "احتياطيات النفط",
    "investment.resources.minerals": "الثروة المعدنية",
    "investment.resources.minerals.value": "2.5 تريليون دولار",
    "investment.misa.title": "وزارة الاستثمار",
    "investment.misa.desc": "بوابتك لترخيص الاستثمار والدعم في المملكة العربية السعودية",
    "investment.process.title": "عملية تأسيس الشركة",
    "investment.process.step1": "تقديم الطلب",
    "investment.process.step2": "موافقة الوزارة",
    "investment.process.step3": "السجل التجاري",
    "investment.process.step4": "الحساب البنكي",
    "investment.process.step5": "بدء العمليات",
    
    // Services Page
    "services.page.title": "خدماتنا",
    "services.page.subtitle": "دعم شامل لرحلة عملك في المملكة",
    "services.setup.title": "خدمات تأسيس الشركات",
    "services.setup.misa": "تسجيل الاستثمار (وزارة الاستثمار)",
    "services.setup.cr": "السجل التجاري",
    "services.setup.bank": "فتح الحساب البنكي",
    "services.setup.gov": "الحسابات الحكومية (التأمينات، هيئة الزكاة، قوى)",
    "services.setup.iqama": "إقامة المدير العام",
    "services.support.title": "دعم الأعمال",
    "services.support.accounting": "المحاسبة وتقديم الضرائب",
    "services.support.license": "معالجة التراخيص",
    "services.support.trademark": "تسجيل العلامات التجارية",
    "services.support.compliance": "إدارة الامتثال",
    "services.localization.title": "خدمات التوطين الصناعي",
    "services.localization.factory": "إنشاء المصانع",
    "services.localization.land": "طلب الأراضي الصناعية",
    "services.localization.leasing": "تأجير المصانع",
    "services.localization.sidf": "دعم قروض صندوق التنمية الصناعية",
    "services.localization.incentives": "دعم الحوافز الحكومية",
    
    // Industrial Localization Page
    "localization.title": "التوطين الصناعي",
    "localization.subtitle": "مبادرة صنع في السعودية",
    "localization.madeinsaudi": "صنع في السعودية",
    "localization.madeinsaudi.desc": "انضم إلى البرنامج الوطني لإنشاء قدرات التصنيع المحلية",
    "localization.timeline.title": "جدول إنشاء المصنع",
    "localization.authorities.title": "الجهات الرئيسية",
    "localization.authorities.mim": "وزارة الصناعة والثروة المعدنية",
    "localization.authorities.sidf": "صندوق التنمية الصناعية السعودي",
    "localization.authorities.lcgpa": "هيئة المحتوى المحلي والمشتريات الحكومية",
    "localization.authorities.hrdf": "صندوق تنمية الموارد البشرية",
    "localization.cities.title": "المدن الصناعية",
    "localization.cities.riyadh": "الرياض",
    "localization.cities.dammam": "الدمام",
    "localization.cities.jeddah": "جدة",
    "localization.modon": "مدن - الهيئة السعودية للمدن الصناعية",
    "localization.modon.desc": "تطوير مدن صناعية متكاملة في جميع أنحاء المملكة",
    "localization.sez.title": "مزايا المناطق الاقتصادية الخاصة",
    "localization.sez.tax": "0-5% ضريبة الشركات",
    "localization.sez.customs": "0% رسوم جمركية",
    "localization.sez.incentives": "حوافز استثمارية",
    
    // Tax Page
    "tax.title": "نظرة على الضرائب",
    "tax.subtitle": "فهم الإطار الضريبي في المملكة العربية السعودية",
    "tax.corporate": "ضريبة الشركات",
    "tax.corporate.rate": "20%",
    "tax.withholding": "ضريبة الاستقطاع",
    "tax.withholding.rate": "5%",
    "tax.vat": "ضريبة القيمة المضافة",
    "tax.vat.rate": "15%",
    "tax.customs": "الرسوم الجمركية",
    "tax.customs.rate": "5-15%",
    
    // Projects Page
    "projects.title": "المشاريع والتقدير",
    "projects.subtitle": "شراكاتنا وقصص النجاح",
    "projects.partnerships": "الشراكات الحكومية",
    "projects.modon": "التعاون مع مدن",
    "projects.success": "قصص نجاح العملاء",
    "projects.gallery": "معرض المشاريع",
    
    // Contact Page
    "contact.title": "اتصل بنا",
    "contact.subtitle": "ابدأ رحلة عملك في المملكة العربية السعودية",
    "contact.form.name": "الاسم الكامل",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.phone": "رقم الهاتف",
    "contact.form.company": "اسم الشركة",
    "contact.form.message": "رسالتك",
    "contact.form.submit": "إرسال الرسالة",
    "contact.info.title": "تواصل معنا",
    "contact.info.address": "الرياض، المملكة العربية السعودية",
    "contact.info.email": "info@wenx.sa",
    "contact.info.phone": "+966 11 XXX XXXX",
    "contact.cta": "ابدأ عملك في المملكة العربية السعودية",
    
    // Media Page
    "media.title": "وسائل الإعلام والمنشورات",
    "media.subtitle": "ابقَ محدثاً مع رؤانا والمقالات الأخيرة",
    "media.articles": "المقالات المميزة",
    "media.press": "بيانات صحفية",
    "media.category": "الفئة",
    "media.date": "التاريخ",
    "media.readmore": "اقرأ المزيد",
    
    // Interviews Page
    "interviews.title": "مقابلات الأعمال التنفيذية",
    "interviews.subtitle": "يشاركك قادة الصناعة رؤاهم حول الاستثمار السعودي",
    "interviews.featured": "المقابلات المميزة",
    "interviews.topics": "المواضيع",
    "interviews.duration": "المدة",
    "interviews.watch": "مشاهدة المقابلة",
    
    // Footer
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.company": "وينكس لخدمات الاستثمار",
    "footer.tagline": "بوابتك للاستثمار في السعودية",
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }, [])

  const t = useCallback(
    (key: string) => {
      return translations[language][key as keyof (typeof translations)["en"]] || key
    },
    [language]
  )

  const dir = language === "ar" ? "rtl" : "ltr"

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
