"use client"

import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"
import { 
  Handshake,
  Factory,
  Award,
  ImageIcon,
  Building2,
  CheckCircle
} from "lucide-react"
import {
  FadeIn,
  FloatingElement,
  AnimatedGradient
} from "@/components/animations"

const partnerships = [
  {
    name: "MISA",
    nameAr: "وزارة الاستثمار",
    description: "Ministry of Investment Partnership",
    descriptionAr: "شراكة مع وزارة الاستثمار",
  },
  {
    name: "MODON",
    nameAr: "مدن",
    description: "Industrial Cities Authority Collaboration",
    descriptionAr: "تعاون مع هيئة المدن الصناعية",
  },
  {
    name: "SIDF",
    nameAr: "صندوق التنمية الصناعية",
    description: "Saudi Industrial Development Fund Partner",
    descriptionAr: "شريك صندوق التنمية الصناعية السعودي",
  },
]

const successStories = [
  {
    company: "Manufacturing Co.",
    companyAr: "شركة التصنيع",
    result: "Factory setup in 6 months",
    resultAr: "إنشاء مصنع في 6 أشهر",
    sector: "Manufacturing",
    sectorAr: "التصنيع",
  },
  {
    company: "Tech Solutions Ltd.",
    companyAr: "شركة الحلول التقنية",
    result: "Regional HQ established",
    resultAr: "تأسيس المقر الإقليمي",
    sector: "Technology",
    sectorAr: "التقنية",
  },
  {
    company: "Global Logistics",
    companyAr: "اللوجستيات العالمية",
    result: "Full licensing in 4 weeks",
    resultAr: "ترخيص كامل في 4 أسابيع",
    sector: "Logistics",
    sectorAr: "اللوجستيات",
  },
  {
    company: "Food Industries",
    companyAr: "الصناعات الغذائية",
    result: "SIDF loan secured",
    resultAr: "تأمين قرض صندوق التنمية الصناعية",
    sector: "Food & Beverage",
    sectorAr: "الأغذية والمشروبات",
  },
]

const galleryItems = [
  { title: "Factory Opening", titleAr: "افتتاح المصنع", type: "Event" },
  { title: "MODON Partnership", titleAr: "شراكة مدن", type: "Partnership" },
  { title: "Client Meeting", titleAr: "اجتماع العملاء", type: "Meeting" },
  { title: "Industrial Site", titleAr: "الموقع الصناعي", type: "Site" },
  { title: "Signing Ceremony", titleAr: "حفل التوقيع", type: "Event" },
  { title: "Team Workshop", titleAr: "ورشة عمل الفريق", type: "Workshop" },
]

export function ProjectsContent() {
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
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {language === "ar" ? "قصص النجاح" : "Success Stories"}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("projects.title")}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              {t("projects.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Government Partnerships */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Handshake className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t("projects.partnerships")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="gold-gradient-border rounded-2xl bg-card p-8 text-center transition-all hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {language === "ar" ? partner.nameAr : partner.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ar" ? partner.descriptionAr : partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t("projects.success")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="gold-gradient-border rounded-xl bg-card p-6 transition-all hover:shadow-lg"
              >
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                  {language === "ar" ? story.sectorAr : story.sector}
                </span>
                <h3 className="font-semibold text-foreground mb-2">
                  {language === "ar" ? story.companyAr : story.company}
                </h3>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{language === "ar" ? story.resultAr : story.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t("projects.gallery")}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Factory className="w-12 h-12 text-primary/30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs text-background/70">{item.type}</span>
                    <p className="font-medium text-background">
                      {language === "ar" ? item.titleAr : item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {language === "ar" ? "كن قصة نجاحنا القادمة" : "Be Our Next Success Story"}
            </h2>
            <p className="text-lg text-background/70 mb-8">
              {t("hero.subtitle")}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              {t("hero.cta.start")}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
