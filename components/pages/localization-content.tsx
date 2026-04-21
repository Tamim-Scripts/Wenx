"use client"

import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"
import { 
  Factory,
  Building,
  Landmark,
  Users,
  Banknote,
  MapPin,
  Percent,
  Package,
  Gift,
  FileCheck,
  CheckCircle,
  Play
} from "lucide-react"
import {
  FadeIn,
  FloatingElement,
  AnimatedGradient
} from "@/components/animations"

const authorities = [
  { icon: Factory, key: "localization.authorities.mim", abbr: "MIM" },
  { icon: Banknote, key: "localization.authorities.sidf", abbr: "SIDF" },
  { icon: Landmark, key: "localization.authorities.lcgpa", abbr: "LCGPA" },
  { icon: Users, key: "localization.authorities.hrdf", abbr: "HRDF" },
]

const cities = [
  { name: "Riyadh", nameAr: "الرياض", features: ["Central Location", "Largest Industrial Hub"] },
  { name: "Dammam", nameAr: "الدمام", features: ["Eastern Province", "Port Access"] },
  { name: "Jeddah", nameAr: "جدة", features: ["Western Gateway", "Red Sea Access"] },
]

const sezBenefits = [
  { icon: Percent, key: "localization.sez.tax" },
  { icon: Package, key: "localization.sez.customs" },
  { icon: Gift, key: "localization.sez.incentives" },
]

const timelineSteps = [
  { month: "Month 1-2", monthAr: "الشهر 1-2", step: "Site Selection & Permits", stepAr: "اختيار الموقع والتصاريح", icon: MapPin },
  { month: "Month 3-4", monthAr: "الشهر 3-4", step: "SIDF Loan Application", stepAr: "طلب قرض صندوق التنمية الصناعية", icon: FileCheck },
  { month: "Month 5-8", monthAr: "الشهر 5-8", step: "Construction & Setup", stepAr: "البناء والإعداد", icon: Building },
  { month: "Month 9-10", monthAr: "الشهر 9-10", step: "Equipment Installation", stepAr: "تركيب المعدات", icon: Factory },
  { month: "Month 11-12", monthAr: "الشهر 11-12", step: "Operations Begin", stepAr: "بدء العمليات", icon: Play },
]

export function LocalizationContent() {
  const { t, language } = useI18n()

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
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Factory className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {t("localization.madeinsaudi")}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("localization.title")}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              {t("localization.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Made in Saudi Initiative */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 lg:p-12 bg-gradient-to-br from-primary to-primary/80 rounded-3xl text-primary-foreground">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-background/20 rounded-2xl flex items-center justify-center shrink-0">
                  <span className="text-4xl font-bold">SA</span>
                </div>
                <div className="text-center lg:text-start">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    {t("localization.madeinsaudi")}
                  </h2>
                  <p className="text-primary-foreground/80">
                    {t("localization.madeinsaudi.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Setup Timeline */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            {t("localization.timeline.title")}
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

              <div className="space-y-6">
                {timelineSteps.map((step, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className="relative z-10 w-16 h-16 bg-primary rounded-xl flex items-center justify-center shrink-0">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1 p-6 bg-card rounded-xl border border-border">
                      <span className="text-sm font-medium text-primary">
                        {language === "ar" ? step.monthAr : step.month}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground mt-1">
                        {language === "ar" ? step.stepAr : step.step}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Authorities */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            {t("localization.authorities.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {authorities.map((authority, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border text-center hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <authority.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xl font-bold text-primary mb-2 block">{authority.abbr}</span>
                <p className="text-sm text-muted-foreground">
                  {t(authority.key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Cities */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("localization.cities.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("localization.modon")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cities.map((city, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {language === "ar" ? city.nameAr : city.name}
                </h3>
                <ul className="space-y-2">
                  {city.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* MODON Info */}
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">{t("localization.modon")}</h3>
              <p className="text-sm text-muted-foreground">{t("localization.modon.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Economic Zones */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            {t("localization.sez.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sezBenefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 bg-background/10 rounded-2xl text-center hover:bg-background/20 transition-colors"
              >
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <p className="text-xl font-semibold">
                  {t(benefit.key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
