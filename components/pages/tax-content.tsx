"use client"

import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"
import { 
  Building2,
  Percent,
  Receipt,
  Package,
  Info
} from "lucide-react"
import {
  FadeIn,
  FloatingElement,
  AnimatedGradient
} from "@/components/animations"

const taxTypes = [
  {
    icon: Building2,
    titleKey: "tax.corporate",
    rate: "20%",
    color: "bg-primary",
    description: "Applied to net profits of foreign companies",
    descriptionAr: "يُطبق على صافي أرباح الشركات الأجنبية",
  },
  {
    icon: Percent,
    titleKey: "tax.withholding",
    rate: "5%",
    color: "bg-accent",
    description: "On dividends, royalties, and service fees",
    descriptionAr: "على الأرباح والإتاوات ورسوم الخدمات",
  },
  {
    icon: Receipt,
    titleKey: "tax.vat",
    rate: "15%",
    color: "bg-foreground",
    description: "Value Added Tax on goods and services",
    descriptionAr: "ضريبة القيمة المضافة على السلع والخدمات",
  },
  {
    icon: Package,
    titleKey: "tax.customs",
    rate: "5-15%",
    color: "bg-primary",
    description: "Import duties varying by product category",
    descriptionAr: "رسوم الاستيراد تختلف حسب فئة المنتج",
  },
]

const exemptions = [
  { title: "Special Economic Zones", titleAr: "المناطق الاقتصادية الخاصة", benefit: "0-5% Corporate Tax", benefitAr: "0-5% ضريبة الشركات" },
  { title: "Industrial Incentives", titleAr: "الحوافز الصناعية", benefit: "Tax holidays available", benefitAr: "إعفاءات ضريبية متاحة" },
  { title: "GCC Citizens", titleAr: "مواطنو دول الخليج", benefit: "Equal treatment as Saudis", benefitAr: "معاملة متساوية مع السعوديين" },
  { title: "Zakat for Muslims", titleAr: "الزكاة للمسلمين", benefit: "2.5% instead of corporate tax", benefitAr: "2.5% بدلاً من ضريبة الشركات" },
]

export function TaxContent() {
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
              <Receipt className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">ZATCA</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("tax.title")}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              {t("tax.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Tax Types Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {taxTypes.map((tax, index) => (
              <div
                key={index}
                className="relative overflow-hidden p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                {/* Rate Badge */}
                <div className={`absolute top-6 end-6 px-4 py-2 ${tax.color} rounded-full`}>
                  <span className={`text-lg font-bold ${index === 2 ? 'text-background' : 'text-primary-foreground'}`}>
                    {tax.rate}
                  </span>
                </div>

                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <tax.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {t(tax.titleKey)}
                </h3>
                <p className="text-muted-foreground">
                  {language === "ar" ? tax.descriptionAr : tax.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Infographic */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            {language === "ar" ? "نظرة سريعة على الضرائب" : "Tax Overview at a Glance"}
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {taxTypes.map((tax, index) => (
                <div
                  key={index}
                  className="relative p-6 bg-card rounded-xl border border-border text-center"
                >
                  <div className={`w-20 h-20 ${tax.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className={`text-2xl font-bold ${index === 2 ? 'text-background' : 'text-primary-foreground'}`}>
                      {tax.rate}
                    </span>
                  </div>
                  <p className="font-medium text-foreground text-sm">
                    {t(tax.titleKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exemptions & Incentives */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Info className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {language === "ar" ? "الإعفاءات والحوافز" : "Exemptions & Incentives"}
              </h2>
            </div>

            <div className="grid gap-4">
              {exemptions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-card rounded-xl border border-border"
                >
                  <span className="font-medium text-foreground">
                    {language === "ar" ? item.titleAr : item.title}
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {language === "ar" ? item.benefitAr : item.benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {language === "ar" ? "هل تحتاج إلى استشارة ضريبية؟" : "Need Tax Consultation?"}
            </h2>
            <p className="text-lg text-background/70 mb-8">
              {language === "ar" ? "فريقنا جاهز لمساعدتك في فهم الإطار الضريبي السعودي" : "Our team is ready to help you navigate Saudi tax framework"}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              {t("hero.cta.contact")}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
