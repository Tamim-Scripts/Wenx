"use client"

import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"
import { 
  Building2, 
  FileCheck, 
  CreditCard, 
  Users2, 
  Users,
  IdCard,
  Calculator,
  FileText,
  Stamp,
  ClipboardCheck,
  Factory,
  Map,
  Home,
  Banknote,
  Gift,
  CheckCircle,
  TrendingUp,
  Flag,
  MapPin,
  Shield,
  Landmark,
  Droplets,
  Mountain,
  Percent,
  Package,
  Receipt,
  Info,
  ArrowRight,
  ArrowLeft
} from "lucide-react"
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  HoverCard, 
  BounceIcon,
  AnimatedGradient,
  FloatingElement
} from "@/components/animations"

const companySetupServices = [
  { icon: FileCheck, key: "services.setup.misa" },
  { icon: Building2, key: "services.setup.cr" },
  { icon: CreditCard, key: "services.setup.bank" },
  { icon: Users2, key: "services.setup.gov" },
  { icon: IdCard, key: "services.setup.iqama" },
]

const businessSupportServices = [
  { icon: Calculator, key: "services.support.accounting" },
  { icon: FileText, key: "services.support.license" },
  { icon: Stamp, key: "services.support.trademark" },
  { icon: ClipboardCheck, key: "services.support.compliance" },
]

const industrialServices = [
  { icon: Factory, key: "services.localization.factory" },
  { icon: Map, key: "services.localization.land" },
  { icon: Home, key: "services.localization.leasing" },
  { icon: Banknote, key: "services.localization.sidf" },
  { icon: Gift, key: "services.localization.incentives" },
]

const visionPillars = [
  { icon: Users, titleKey: "vision.pillar1", descKey: "vision.pillar1.desc", color: "bg-primary" },
  { icon: TrendingUp, titleKey: "vision.pillar2", descKey: "vision.pillar2.desc", color: "bg-accent" },
  { icon: Flag, titleKey: "vision.pillar3", descKey: "vision.pillar3.desc", color: "bg-foreground" },
]

const investmentAdvantages = [
  { icon: MapPin, titleKey: "why.location", descKey: "why.location.desc" },
  { icon: Shield, titleKey: "why.stability", descKey: "why.stability.desc" },
  { icon: Gift, titleKey: "why.incentives", descKey: "why.incentives.desc" },
  { icon: Landmark, titleKey: "why.ecosystem", descKey: "why.ecosystem.desc" },
]

const investmentResources = [
  {
    icon: Droplets,
    labelEn: "Oil Reserves",
    labelAr: "احتياطيات النفط",
    valueEn: "World's largest",
    valueAr: "الأكبر عالمياً",
  },
  {
    icon: Mountain,
    labelEn: "Mineral Wealth",
    labelAr: "الثروة المعدنية",
    valueEn: "$2.5 Trillion",
    valueAr: "2.5 تريليون دولار",
  },
]

const investmentProcess = [
  { step: 1, key: "investment.process.step1", icon: FileCheck },
  { step: 2, key: "investment.process.step2", icon: CheckCircle },
  { step: 3, key: "investment.process.step3", icon: Building2 },
  { step: 4, key: "investment.process.step4", icon: CreditCard },
  { step: 5, key: "investment.process.step5", icon: ArrowRight },
]

const localizationAuthorities = [
  { icon: Factory, key: "localization.authorities.mim", abbr: "MIM" },
  { icon: Banknote, key: "localization.authorities.sidf", abbr: "SIDF" },
  { icon: Landmark, key: "localization.authorities.lcgpa", abbr: "LCGPA" },
  { icon: Users, key: "localization.authorities.hrdf", abbr: "HRDF" },
]

const localizationTimeline = [
  { monthEn: "Month 1-2", monthAr: "الشهر 1-2", stepEn: "Site Selection & Permits", stepAr: "اختيار الموقع والتصاريح", icon: MapPin },
  { monthEn: "Month 3-4", monthAr: "الشهر 3-4", stepEn: "SIDF Loan Application", stepAr: "طلب قرض صندوق التنمية الصناعية", icon: FileCheck },
  { monthEn: "Month 5-8", monthAr: "الشهر 5-8", stepEn: "Construction & Setup", stepAr: "البناء والإعداد", icon: Building2 },
  { monthEn: "Month 9-10", monthAr: "الشهر 9-10", stepEn: "Equipment Installation", stepAr: "تركيب المعدات", icon: Factory },
  { monthEn: "Month 11-12", monthAr: "الشهر 11-12", stepEn: "Operations Begin", stepAr: "بدء العمليات", icon: CheckCircle },
]

const industrialCities = [
  { nameEn: "Riyadh", nameAr: "الرياض", featuresEn: ["Central Location", "Largest Industrial Hub"], featuresAr: ["موقع مركزي", "أكبر مركز صناعي"] },
  { nameEn: "Dammam", nameAr: "الدمام", featuresEn: ["Eastern Province", "Port Access"], featuresAr: ["المنطقة الشرقية", "وصول إلى الموانئ"] },
  { nameEn: "Jeddah", nameAr: "جدة", featuresEn: ["Western Gateway", "Red Sea Access"], featuresAr: ["البوابة الغربية", "وصول إلى البحر الأحمر"] },
]

const sezBenefits = [
  { icon: Percent, key: "localization.sez.tax" },
  { icon: Package, key: "localization.sez.customs" },
  { icon: Gift, key: "localization.sez.incentives" },
]

const taxTypes = [
  {
    icon: Building2,
    titleKey: "tax.corporate",
    rate: "20%",
    descriptionEn: "Applied to net profits of foreign companies",
    descriptionAr: "يطبق على صافي أرباح الشركات الأجنبية",
  },
  {
    icon: Percent,
    titleKey: "tax.withholding",
    rate: "5%",
    descriptionEn: "On dividends, royalties, and service fees",
    descriptionAr: "على الأرباح والإتاوات ورسوم الخدمات",
  },
  {
    icon: Receipt,
    titleKey: "tax.vat",
    rate: "15%",
    descriptionEn: "Value Added Tax on goods and services",
    descriptionAr: "ضريبة القيمة المضافة على السلع والخدمات",
  },
  {
    icon: Package,
    titleKey: "tax.customs",
    rate: "5-15%",
    descriptionEn: "Import duties varying by product category",
    descriptionAr: "رسوم الاستيراد تختلف حسب فئة المنتج",
  },
]

const taxIncentives = [
  { titleEn: "Special Economic Zones", titleAr: "المناطق الاقتصادية الخاصة", benefitEn: "0-5% Corporate Tax", benefitAr: "0-5% ضريبة الشركات" },
  { titleEn: "Industrial Incentives", titleAr: "الحوافز الصناعية", benefitEn: "Tax holidays available", benefitAr: "إعفاءات ضريبية متاحة" },
  { titleEn: "GCC Citizens", titleAr: "مواطنو دول الخليج", benefitEn: "Equal treatment as Saudis", benefitAr: "معاملة متساوية مع السعوديين" },
  { titleEn: "Zakat for Muslims", titleAr: "الزكاة للمسلمين", benefitEn: "2.5% instead of corporate tax", benefitAr: "2.5% بدلاً من ضريبة الشركات" },
]

export function ServicesContent() {
  const { t, language, dir } = useI18n()
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        <AnimatedGradient />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement duration={4} y={15} className="absolute top-20 right-[10%]">
            <div className="w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          </FloatingElement>
          <FloatingElement duration={5} y={20} className="absolute bottom-20 left-[5%]">
            <div className="w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </FloatingElement>
          <FloatingElement duration={6} y={12} className="absolute top-1/2 left-1/2">
            <div className="w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
          </FloatingElement>
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <motion.div 
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                               linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
            animate={{ 
              backgroundPosition: ['0px 0px', '60px 60px']
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: 'linear' 
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Full Service Support</span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("services.page.title")}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              {t("services.page.subtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Setup Services */}
      <section id="company-setup" className="py-20 lg:py-28 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="flex items-center gap-4 mb-8">
              <motion.div 
                className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <Building2 className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {t("services.setup.title")}
                </h2>
              </div>
            </FadeIn>

            <StaggerContainer staggerDelay={0.1} className="grid gap-4">
              {companySetupServices.map((service, index) => (
                <StaggerItem key={index}>
                  <HoverCard>
                    <motion.div
                      className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all cursor-default"
                      whileHover={{ x: dir === "rtl" ? -8 : 8, boxShadow: "0 10px 30px -10px rgba(0,108,53,0.2)" }}
                    >
                      <BounceIcon>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                      </BounceIcon>
                      <span className="font-medium text-foreground flex-1">
                        {t(service.key)}
                      </span>
                      <Arrow className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Business Support Services */}
      <section id="business-support" className="py-20 lg:py-28 bg-secondary/50 scroll-mt-24 relative overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="flex items-center gap-4 mb-8">
              <motion.div 
                className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center"
                whileHover={{ rotate: -10, scale: 1.1 }}
              >
                <Calculator className="w-7 h-7 text-accent-foreground" />
              </motion.div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {t("services.support.title")}
                </h2>
              </div>
            </FadeIn>

            <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 gap-4">
              {businessSupportServices.map((service, index) => (
                <StaggerItem key={index}>
                  <HoverCard className="h-full">
                    <motion.div
                      className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-all h-full"
                      whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(218,165,32,0.15)" }}
                    >
                      <BounceIcon>
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                          <service.icon className="w-6 h-6 text-accent" />
                        </div>
                      </BounceIcon>
                      <span className="font-medium text-foreground">
                        {t(service.key)}
                      </span>
                    </motion.div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Industrial Localization Services */}
      <section id="industrial" className="py-20 lg:py-28 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="flex items-center gap-4 mb-8">
              <motion.div 
                className="w-14 h-14 bg-foreground rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <Factory className="w-7 h-7 text-background" />
              </motion.div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {t("services.localization.title")}
                </h2>
              </div>
            </FadeIn>

            <StaggerContainer staggerDelay={0.1} className="grid gap-4">
              {industrialServices.map((service, index) => (
                <StaggerItem key={index}>
                  <HoverCard>
                    <motion.div
                      className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-foreground/30 transition-all"
                      whileHover={{ x: dir === "rtl" ? -8 : 8, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)" }}
                    >
                      <BounceIcon>
                        <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                          <service.icon className="w-6 h-6 text-foreground" />
                        </div>
                      </BounceIcon>
                      <span className="font-medium text-foreground">
                        {t(service.key)}
                      </span>
                    </motion.div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Investment Environment */}
      <section id="investment-environment" className="py-20 lg:py-28 bg-secondary/50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-12 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-5 border border-primary/20">
                <Landmark className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Saudi Arabia</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {t("investment.title")}
              </h2>
              <p className="text-lg text-muted-foreground">{t("investment.subtitle")}</p>
            </FadeIn>

            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {visionPillars.map((pillar, index) => (
                <StaggerItem key={pillar.titleKey}>
                  <HoverCard className="h-full">
                    <div className="h-full rounded-xl border border-border bg-card p-6">
                      <div className={`w-12 h-12 ${pillar.color} rounded-lg flex items-center justify-center mb-4`}>
                        <pillar.icon className={`w-6 h-6 ${index === 2 ? "text-background" : "text-foreground"}`} />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{t(pillar.titleKey)}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t(pillar.descKey)}</p>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{t("investment.advantages.title")}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {investmentAdvantages.map((advantage) => (
                    <div key={advantage.titleKey} className="rounded-xl border border-border bg-card p-5">
                      <advantage.icon className="w-6 h-6 text-primary mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">{t(advantage.titleKey)}</h4>
                      <p className="text-sm text-muted-foreground">{t(advantage.descKey)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{t("investment.resources.title")}</h3>
                <div className="grid gap-4">
                  {investmentResources.map((resource) => (
                    <div key={resource.labelEn} className="rounded-xl border border-border bg-card p-6">
                      <resource.icon className="w-7 h-7 text-accent mb-4" />
                      <p className="text-2xl font-bold text-foreground">
                        {language === "ar" ? resource.valueAr : resource.valueEn}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {language === "ar" ? resource.labelAr : resource.labelEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl bg-foreground p-8 text-background">
                <Landmark className="w-10 h-10 text-accent mb-5" />
                <h3 className="text-2xl font-bold mb-3">{t("investment.misa.title")}</h3>
                <p className="text-background/70">{t("investment.misa.desc")}</p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">{t("investment.process.title")}</h3>
                <div className="grid gap-4">
                  {investmentProcess.map((step) => (
                    <div key={step.step} className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary">
                          {language === "ar" ? `الخطوة ${step.step}` : `Step ${step.step}`}
                        </p>
                        <p className="font-medium text-foreground">{t(step.key)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Localization Details */}
      <section id="industrial-localization" className="py-20 lg:py-28 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-12 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-5 border border-primary/20">
                <Factory className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{t("localization.madeinsaudi")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {t("localization.title")}
              </h2>
              <p className="text-lg text-muted-foreground">{t("localization.subtitle")}</p>
            </FadeIn>

            <div className="rounded-2xl bg-primary p-8 text-primary-foreground mb-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <div className="w-20 h-20 rounded-xl bg-background/20 flex items-center justify-center shrink-0">
                  <span className="text-3xl font-bold">SA</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t("localization.madeinsaudi")}</h3>
                  <p className="text-primary-foreground/80">{t("localization.madeinsaudi.desc")}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] mb-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{t("localization.timeline.title")}</h3>
                <div className="grid gap-4">
                  {localizationTimeline.map((step) => (
                    <div key={step.monthEn} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary">
                          {language === "ar" ? step.monthAr : step.monthEn}
                        </p>
                        <p className="font-medium text-foreground">
                          {language === "ar" ? step.stepAr : step.stepEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{t("localization.authorities.title")}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {localizationAuthorities.map((authority) => (
                    <div key={authority.abbr} className="rounded-xl border border-border bg-card p-5 text-center">
                      <authority.icon className="w-7 h-7 text-primary mx-auto mb-3" />
                      <span className="block text-lg font-bold text-primary mb-2">{authority.abbr}</span>
                      <p className="text-sm text-muted-foreground">{t(authority.key)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{t("localization.cities.title")}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {industrialCities.map((city) => (
                    <div key={city.nameEn} className="rounded-xl border border-border bg-card p-5">
                      <MapPin className="w-6 h-6 text-primary mb-3" />
                      <h4 className="text-xl font-bold text-foreground mb-3">
                        {language === "ar" ? city.nameAr : city.nameEn}
                      </h4>
                      <ul className="space-y-2">
                        {(language === "ar" ? city.featuresAr : city.featuresEn).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl border border-border bg-card p-5">
                  <h4 className="font-semibold text-foreground mb-2">{t("localization.modon")}</h4>
                  <p className="text-sm text-muted-foreground">{t("localization.modon.desc")}</p>
                </div>
              </div>

              <div className="rounded-2xl bg-foreground p-8 text-background">
                <h3 className="text-2xl font-bold mb-6">{t("localization.sez.title")}</h3>
                <div className="grid gap-4">
                  {sezBenefits.map((benefit) => (
                    <div key={benefit.key} className="flex items-center gap-4 rounded-xl bg-background/10 p-4">
                      <benefit.icon className="w-6 h-6 text-accent" />
                      <p className="font-semibold">{t(benefit.key)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Overview */}
      <section id="tax-overview" className="py-20 lg:py-28 bg-secondary/50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-12 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-5 border border-primary/20">
                <Receipt className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">ZATCA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {t("tax.title")}
              </h2>
              <p className="text-lg text-muted-foreground">{t("tax.subtitle")}</p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {taxTypes.map((tax) => (
                <div key={tax.titleKey} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <tax.icon className="w-8 h-8 text-primary" />
                    <span className="rounded-full bg-primary px-4 py-2 text-lg font-bold text-primary-foreground">
                      {tax.rate}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{t(tax.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar" ? tax.descriptionAr : tax.descriptionEn}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">
                  {language === "ar" ? "الإعفاءات والحوافز" : "Exemptions & Incentives"}
                </h3>
              </div>
              <div className="grid gap-4">
                {taxIncentives.map((item) => (
                  <div key={item.titleEn} className="flex flex-col gap-3 rounded-xl bg-secondary/60 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-medium text-foreground">
                      {language === "ar" ? item.titleAr : item.titleEn}
                    </span>
                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                      {language === "ar" ? item.benefitAr : item.benefitEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-foreground text-background relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 50%, rgba(0, 108, 53, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(218, 165, 32, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(0, 108, 53, 0.2) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {t("contact.cta")}
            </motion.h2>
            <motion.p 
              className="text-lg text-background/70 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {t("services.subtitle")}
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.cta.contact")}
              <motion.span 
                className="ms-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Arrow className="w-5 h-5" />
              </motion.span>
            </motion.a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
