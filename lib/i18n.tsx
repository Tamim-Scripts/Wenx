"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

export type Language = "en" | "ar" | "zh"

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
    "nav.partners": "Partners",
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

    // Industrial Timeline
    "timeline.badge": "Industrial Localization Roadmap",
    "timeline.title": "Estimated Timeline for Industrial Localization in Saudi Arabia",
    "timeline.subtitle": "A streamlined view of the core registration, licensing, site selection, and facility approval milestones.",
    "timeline.step1.title": "Company Registration",
    "timeline.step1.duration": "Approx. 1.5 months",
    "timeline.step1.detail": "Obtain the Commercial Registration (CR).",
    "timeline.step2.title": "Initial Industrial License",
    "timeline.step2.duration": "Within 72 hours",
    "timeline.step2.detail": "After confirming the site option, products, and project investment, the application can be submitted. If the product is not restricted by MIM, the license can be issued within 72 hours.",
    "timeline.step3.title": "Industrial Site Selection",
    "timeline.step3.duration": "Site option confirmed",
    "timeline.step3.detail": "Choose between leasing an existing factory or leasing government industrial land and building a factory.",
    "timeline.step4.title": "Facility Licenses",
    "timeline.step4.duration": "4 to 9 months",
    "timeline.step4.detail": "Existing factory leases typically take around 4 months to obtain the license and start production. Government land typically takes 4 to 9 months to obtain the construction permit.",
    "timeline.stat1.value": "3-3.5 months",
    "timeline.stat1.label": "Approximate full setup process",
    "timeline.stat2.value": "4 months",
    "timeline.stat2.label": "Typical existing factory path",
    "timeline.stat3.value": "4-9 months",
    "timeline.stat3.label": "Typical government land path",
    
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
    
    // Partners Page
    "partners.title": "Our Partners",
    "partners.subtitle": "Strategic partnerships driving success",
    "partners.badge": "Strategic Partnerships",
    "partners.section.title": "Strategic Partners",
    "partners.section.desc": "We collaborate with leading institutions and government bodies to provide comprehensive investment solutions",
    "partners.government": "Government Partners",
    "partners.misa": "Ministry of Investment",
    "partners.misa.desc": "Investment licensing and regulatory support for business establishment",
    "partners.modon": "MODON",
    "partners.modon.desc": "Industrial cities infrastructure and industrial zone management",
    "partners.sidf": "Saudi Industrial Development Fund",
    "partners.sidf.desc": "Industrial financing and development support for manufacturing projects",
    "partners.lcgpa": "Local Content & Government Procurement Authority",
    "partners.lcgpa.desc": "Supporting local content development and government procurement programs",
    "partners.corporate": "Corporate Partners",
    "partners.financial": "Financial Institutions",
    "partners.financial.desc": "Banks and financial services for business funding and operations",
    "partners.consulting": "Consulting Firms",
    "partners.consulting.desc": "Strategic consulting and business advisory services",
    "partners.cta": "Become a Partner",
    "partners.cta.desc": "Join our network of strategic partners",
    
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
    "nav.partners": "شركاؤنا",
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

    // Industrial Timeline
    "timeline.badge": "خارطة طريق التوطين الصناعي",
    "timeline.title": "الجدول الزمني التقديري للتوطين الصناعي في المملكة العربية السعودية",
    "timeline.subtitle": "عرض مبسط لأهم مراحل التسجيل والترخيص واختيار الموقع واعتمادات المنشأة.",
    "timeline.step1.title": "تسجيل الشركة",
    "timeline.step1.duration": "حوالي 1.5 شهر",
    "timeline.step1.detail": "الحصول على السجل التجاري.",
    "timeline.step2.title": "الرخصة الصناعية الأولية",
    "timeline.step2.duration": "خلال 72 ساعة",
    "timeline.step2.detail": "بعد تأكيد خيار الموقع والمنتجات واستثمار المشروع يمكن تقديم الطلب. وإذا لم يكن المنتج ضمن الفئات المقيدة لدى وزارة الصناعة والثروة المعدنية، يمكن إصدار الرخصة خلال 72 ساعة.",
    "timeline.step3.title": "اختيار الموقع الصناعي",
    "timeline.step3.duration": "تأكيد خيار الموقع",
    "timeline.step3.detail": "الاختيار بين استئجار مصنع قائم أو استئجار أرض صناعية حكومية وبناء مصنع.",
    "timeline.step4.title": "تراخيص المنشأة",
    "timeline.step4.duration": "من 4 إلى 9 أشهر",
    "timeline.step4.detail": "في حال استئجار مصنع قائم، تستغرق العملية عادة حوالي 4 أشهر للحصول على الترخيص وبدء الإنتاج. أما في حال استئجار أرض حكومية، فتستغرق عادة من 4 إلى 9 أشهر للحصول على تصريح البناء.",
    "timeline.stat1.value": "3-3.5 أشهر",
    "timeline.stat1.label": "المدة التقريبية لإكمال عملية التأسيس",
    "timeline.stat2.value": "4 أشهر",
    "timeline.stat2.label": "المسار المعتاد لاستئجار مصنع قائم",
    "timeline.stat3.value": "4-9 أشهر",
    "timeline.stat3.label": "المسار المعتاد للأرض الحكومية",
    
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
    
    // Partners Page
    "partners.title": "شركاؤنا",
    "partners.subtitle": "شراكات استراتيجية تدفع النجاح",
    "partners.badge": "شراكات استراتيجية",
    "partners.section.title": "الشركاء الاستراتيجيون",
    "partners.section.desc": "نتعاون مع المؤسسات الرائدة والجهات الحكومية لتقديم حلول استثمارية شاملة",
    "partners.government": "الشركاء الحكوميون",
    "partners.misa": "وزارة الاستثمار",
    "partners.misa.desc": "ترخيص الاستثمار والدعم التنظيمي لتأسيس الشركات",
    "partners.modon": "مدن",
    "partners.modon.desc": "البنية التحتية للمدن الصناعية وإدارة المناطق الصناعية",
    "partners.sidf": "صندوق التنمية الصناعية السعودي",
    "partners.sidf.desc": "تمويل التنمية الصناعية والدعم لمشاريع التصنيع",
    "partners.lcgpa": "هيئة المحتوى المحلي والمشتريات الحكومية",
    "partners.lcgpa.desc": "دعم تطوير المحتوى المحلي وبرامج المشتريات الحكومية",
    "partners.corporate": "الشركاء الماليون",
    "partners.financial": "المؤسسات المالية",
    "partners.financial.desc": "البنوك والخدمات المالية لتمويل الأعمال والعمليات",
    "partners.consulting": "شركات الاستشارات",
    "partners.consulting.desc": "خدمات الاستشارات الاستراتيجية والاستشارات التجارية",
    "partners.cta": "كن شريكاً معنا",
    "partners.cta.desc": "انضم إلى شبكة شركائنا الاستراتيجيين",
    
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
  zh: {
    // Navigation
    "nav.home": "主页",
    "nav.insights": "洞察",
    "nav.investment": "投资环境",
    "nav.services": "服务",
    "nav.localization": "工业本地化",
    "nav.tax": "税收概览",
    "nav.partners": "合作伙伴",
    "nav.projects": "项目",
    "nav.media": "媒体",
    "nav.interviews": "访谈",
    "nav.contact": "联系我们",
    
    // Hero
    "hero.badge": "符合 2030 年愿景",
    "hero.title": "您在沙特阿拉伯投资与本地化的门户",
    "hero.subtitle": "帮助全球公司在沙特阿拉伯建立和发展。专业投资咨询、公司设立和工业本地化服务。",
    "hero.cta.start": "开始投资",
    "hero.cta.explore": "探索服务",
    "hero.cta.contact": "联系我们",
    
    // Stats
    "stats.tax": "企业税",
    "stats.tax.desc": "具竞争力的税率",
    "stats.ownership": "外资所有权",
    "stats.ownership.desc": "允许100%所有权",
    "stats.ownership.value": "100%",
    "stats.minerals": "矿产资源",
    "stats.minerals.desc": "未开发资源",
    "stats.minerals.value": "$2.5T",
    "stats.experience": "年经验",
    "stats.experience.desc": "行业专业知识",
    "stats.experience.value": "30+",
    "stats.timeline": "公司设立",
    "stats.incentives": "政府激励",
    "stats.timeline.value": "2-4 周",
    "stats.incentives.value": "可获得",
    
    // Services
    "services.title": "我们的服务",
    "services.subtitle": "为您在沙特阿拉伯的业务之旅提供全面支持",
    "services.company.title": "公司设立服务",
    "services.company.desc": "投资部注册、商业登记、银行账户、政府账户设置",
    "services.business.title": "业务支持",
    "services.business.desc": "会计、税务申报、许可证处理、商标注册、合规管理",
    "services.industrial.title": "工业本地化",
    "services.industrial.desc": "工厂设立、工业用地、工业发展基金贷款支持、政府激励",

    // Industrial Timeline
    "timeline.badge": "工业本地化路线图",
    "timeline.title": "沙特阿拉伯工业本地化预估时间表",
    "timeline.subtitle": "清晰呈现注册、许可、选址和设施审批等核心里程碑。",
    "timeline.step1.title": "公司注册",
    "timeline.step1.duration": "约 1.5 个月",
    "timeline.step1.detail": "取得商业登记证（CR）。",
    "timeline.step2.title": "初始工业许可证",
    "timeline.step2.duration": "72 小时内",
    "timeline.step2.detail": "确认场地方案、产品和项目投资后即可提交申请。如产品不属于工业和矿产资源部（MIM）的限制类别，许可证可在 72 小时内签发。",
    "timeline.step3.title": "工业场地选择",
    "timeline.step3.duration": "确认场地方案",
    "timeline.step3.detail": "可选择租赁现有工厂，或租赁政府工业用地并建设工厂。",
    "timeline.step4.title": "设施许可证",
    "timeline.step4.duration": "4 至 9 个月",
    "timeline.step4.detail": "租赁现有工厂通常约需 4 个月即可取得许可证并开始生产。租赁政府土地通常需 4 至 9 个月取得施工许可。",
    "timeline.stat1.value": "3-3.5 个月",
    "timeline.stat1.label": "完成整体设立流程的预估时间",
    "timeline.stat2.value": "4 个月",
    "timeline.stat2.label": "现有工厂租赁路径的通常时间",
    "timeline.stat3.value": "4-9 个月",
    "timeline.stat3.label": "政府土地路径的通常时间",
    
    // Why Saudi
    "why.title": "为什么选择沙特阿拉伯?",
    "why.subtitle": "您业务的战略优势",
    "why.location": "战略位置",
    "why.location.desc": "亚洲、欧洲和非洲之间的门户",
    "why.stability": "政治稳定",
    "why.stability.desc": "稳定政府和强有力的经济政策",
    "why.incentives": "政府激励",
    "why.incentives.desc": "税收优惠和投资者支持计划",
    "why.ecosystem": "金融生态系统",
    "why.ecosystem.desc": "由公共投资基金支持的强大银行业",
    
    // Vision 2030
    "vision.title": "2030 年愿景一致性",
    "vision.subtitle": "共同建设繁荣未来",
    "vision.pillar1": "充满活力的社会",
    "vision.pillar1.desc": "强大的价值观、丰富的文化和生活质量",
    "vision.pillar2": "繁荣经济",
    "vision.pillar2.desc": "具有投资机会的多元化经济",
    "vision.pillar3": "雄心勃勃的国家",
    "vision.pillar3.desc": "有效的政府和负责任的公民",
    
    // Investment Page
    "investment.title": "沙特投资环境",
    "investment.subtitle": "探索王国中的机遇",
    "investment.advantages.title": "投资优势",
    "investment.resources.title": "关键资源",
    "investment.resources.oil": "石油储备",
    "investment.resources.minerals": "矿产财富",
    "investment.resources.minerals.value": "2.5 万亿美元",
    "investment.misa.title": "投资部",
    "investment.misa.desc": "您在沙特阿拉伯投资许可证和支持的门户",
    "investment.process.title": "公司设立流程",
    "investment.process.step1": "提交申请",
    "investment.process.step2": "投资部批准",
    "investment.process.step3": "商业登记",
    "investment.process.step4": "银行账户",
    "investment.process.step5": "开始运营",
    
    // Services Page
    "services.page.title": "我们的服务",
    "services.page.subtitle": "为您的沙特业务之旅提供端到端支持",
    "services.setup.title": "公司设立服务",
    "services.setup.misa": "投资注册(投资部)",
    "services.setup.cr": "商业登记",
    "services.setup.bank": "开设银行账户",
    "services.setup.gov": "政府账户(社会保险、天课、Qiwa)",
    "services.setup.iqama": "总经理居住证",
    "services.support.title": "业务支持",
    "services.support.accounting": "会计和税务申报",
    "services.support.license": "许可证处理",
    "services.support.trademark": "商标注册",
    "services.support.compliance": "合规管理",
    "services.localization.title": "工业本地化服务",
    "services.localization.factory": "工厂设立",
    "services.localization.land": "工业用地申请",
    "services.localization.leasing": "工厂租赁",
    "services.localization.sidf": "工业发展基金贷款支持",
    "services.localization.incentives": "政府激励支持",
    
    // Industrial Localization Page
    "localization.title": "工业本地化",
    "localization.subtitle": "沙特制造倡议",
    "localization.madeinsaudi": "沙特制造",
    "localization.madeinsaudi.desc": "加入国家计划，建立本地制造能力",
    "localization.timeline.title": "工厂设立时间表",
    "localization.authorities.title": "关键机构",
    "localization.authorities.mim": "工业和矿产资源部",
    "localization.authorities.sidf": "沙特工业发展基金",
    "localization.authorities.lcgpa": "本地内容和政府采购委员会",
    "localization.authorities.hrdf": "人力资源发展基金",
    "localization.cities.title": "工业城市",
    "localization.cities.riyadh": "利雅得",
    "localization.cities.dammam": "达曼",
    "localization.cities.jeddah": "吉达",
    "localization.modon": "MODON - 沙特工业城市管理局",
    "localization.modon.desc": "在整个王国开发综合工业城市",
    "localization.sez.title": "特殊经济区优势",
    "localization.sez.tax": "0-5% 企业税",
    "localization.sez.customs": "0% 关税",
    "localization.sez.incentives": "投资激励",
    
    // Tax Page
    "tax.title": "税收概览",
    "tax.subtitle": "了解沙特阿拉伯的税收框架",
    "tax.corporate": "企业税",
    "tax.corporate.rate": "20%",
    "tax.withholding": "预扣税",
    "tax.withholding.rate": "5%",
    "tax.vat": "增值税",
    "tax.vat.rate": "15%",
    "tax.customs": "关税",
    "tax.customs.rate": "5-15%",
    
    // Partners Page
    "partners.title": "我们的合作伙伴",
    "partners.subtitle": "推动成功的战略伙伴关系",
    "partners.badge": "战略伙伴关系",
    "partners.section.title": "战略合作伙伴",
    "partners.section.desc": "我们与领先机构和政府部门合作，提供全面的投资解决方案",
    "partners.government": "政府合作伙伴",
    "partners.misa": "投资部",
    "partners.misa.desc": "为企业设立提供投资许可证和监管支持",
    "partners.modon": "MODON",
    "partners.modon.desc": "工业城市基础设施和工业区管理",
    "partners.sidf": "沙特工业发展基金",
    "partners.sidf.desc": "为制造项目提供工业融资和发展支持",
    "partners.lcgpa": "本地内容和政府采购委员会",
    "partners.lcgpa.desc": "支持本地内容发展和政府采购计划",
    "partners.corporate": "企业合作伙伴",
    "partners.financial": "金融机构",
    "partners.financial.desc": "为业务融资和运营提供银行和金融服务",
    "partners.consulting": "咨询公司",
    "partners.consulting.desc": "战略咨询和业务顾问服务",
    "partners.cta": "成为合作伙伴",
    "partners.cta.desc": "加入我们的战略伙伴网络",
    
    // Projects Page
    "projects.title": "项目与认可",
    "projects.subtitle": "我们的伙伴关系和成功案例",
    "projects.partnerships": "政府伙伴关系",
    "projects.modon": "MODON 合作",
    "projects.success": "客户成功案例",
    "projects.gallery": "项目库",
    
    // Contact Page
    "contact.title": "联系我们",
    "contact.subtitle": "开始您在沙特阿拉伯的业务之旅",
    "contact.form.name": "全名",
    "contact.form.email": "电子邮箱",
    "contact.form.phone": "电话号码",
    "contact.form.company": "公司名称",
    "contact.form.message": "您的信息",
    "contact.form.submit": "发送信息",
    "contact.info.title": "联系我们",
    "contact.info.address": "利雅得，沙特阿拉伯",
    "contact.info.email": "info@wenx.sa",
    "contact.info.phone": "+966 11 XXX XXXX",
    "contact.cta": "在沙特阿拉伯开始您的业务",
    
    // Media Page
    "media.title": "媒体和出版物",
    "media.subtitle": "随时了解我们的最新见解和文章",
    "media.articles": "特色文章",
    "media.press": "新闻稿",
    "media.category": "分类",
    "media.date": "日期",
    "media.readmore": "阅读更多",
    
    // Interviews Page
    "interviews.title": "高管访谈",
    "interviews.subtitle": "业界领袖分享沙特投资见解",
    "interviews.featured": "特色访谈",
    "interviews.topics": "主题",
    "interviews.duration": "时长",
    "interviews.watch": "观看访谈",
    
    // Footer
    "footer.rights": "版权所有",
    "footer.company": "WenX 投资服务",
    "footer.tagline": "您在沙特投资的门户",
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)
const LANGUAGE_STORAGE_KEY = "wenx-language"

function applyDocumentLanguage(lang: Language) {
  document.documentElement.lang = lang
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
    applyDocumentLanguage(lang)
  }, [])

  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)

    if (savedLanguage === "en" || savedLanguage === "ar" || savedLanguage === "zh") {
      setLanguageState(savedLanguage)
      applyDocumentLanguage(savedLanguage)
      return
    }

    applyDocumentLanguage(language)
  }, [language])

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
