"use client"

import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"
import { 
  Building2,
  Briefcase,
  Shield,
  Handshake,
  MapPin,
  Globe,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Mail,
  Phone
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  FadeIn,
  FloatingElement,
  AnimatedGradient,
  StaggerContainer,
  StaggerItem,
  BounceIcon
} from "@/components/animations"

const governmentPartners = [
  {
    name: "Ministry of Investment (MISA)",
    nameAr: "وزارة الاستثمار",
    icon: Building2,
    description: "Investment licensing, regulatory support, and business establishment guidance",
    descriptionAr: "ترخيص الاستثمار، الدعم التنظيمي، وتوجيه تأسيس الأعمال",
    focus: ["Investment Licensing", "Regulatory Support", "Business Guidance"],
    focusAr: ["ترخيص الاستثمار", "الدعم التنظيمي", "توجيه الأعمال"],
  },
  {
    name: "MODON - Industrial Cities",
    nameAr: "مدن - المدن الصناعية",
    icon: Briefcase,
    description: "Industrial infrastructure, industrial zones, and manufacturing support",
    descriptionAr: "البنية التحتية الصناعية، المناطق الصناعية، دعم التصنيع",
    focus: ["Industrial Infrastructure", "Zone Management", "Manufacturing Support"],
    focusAr: ["البنية التحتية الصناعية", "إدارة المناطق", "دعم التصنيع"],
  },
  {
    name: "SIDF - Industrial Development",
    nameAr: "صندوق التنمية الصناعية",
    icon: Shield,
    description: "Industrial financing, loans, and development programs for factories",
    descriptionAr: "التمويل الصناعي، القروض، وبرامج التطوير للمصانع",
    focus: ["Industrial Financing", "Loan Programs", "Development Support"],
    focusAr: ["التمويل الصناعي", "برامج القروض", "دعم التطوير"],
  },
  {
    name: "LCGPA - Local Content Authority",
    nameAr: "هيئة المحتوى المحلي",
    icon: Users,
    description: "Local content development and government procurement opportunities",
    descriptionAr: "تطوير المحتوى المحلي وفرص المشتريات الحكومية",
    focus: ["Local Content", "Procurement Programs", "Incentives"],
    focusAr: ["المحتوى المحلي", "برامج المشتريات", "الحوافز"],
  },
]

const corporatePartners = [
  {
    name: "Financial Institutions",
    nameAr: "المؤسسات المالية",
    icon: TrendingUp,
    description: "Banks, investment funds, and financial service providers",
    descriptionAr: "البنوك وصناديق الاستثمار ومقدمو الخدمات المالية",
    focus: ["Business Loans", "Investment Funding", "Trade Finance"],
    focusAr: ["قروض الأعمال", "تمويل الاستثمار", "التمويل التجاري"],
  },
  {
    name: "Consulting Firms",
    nameAr: "شركات الاستشارات",
    icon: Briefcase,
    description: "Strategic consultants and business advisory experts",
    descriptionAr: "مستشارون استراتيجيون وخبراء استشارة الأعمال",
    focus: ["Strategic Planning", "Business Advisory", "Market Research"],
    focusAr: ["التخطيط الاستراتيجي", "استشارة الأعمال", "أبحاث السوق"],
  },
  {
    name: "Legal Partners",
    nameAr: "الشركاء القانونيون",
    icon: Shield,
    description: "Legal firms specializing in Saudi business law",
    descriptionAr: "شركات قانونية متخصصة في القانون التجاري السعودي",
    focus: ["Contract Law", "Compliance", "Legal Documentation"],
    focusAr: ["قانون العقود", "الامتثال", "التوثيق القانوني"],
  },
  {
    name: "Technology Partners",
    nameAr: "شركاء التكنولوجيا",
    icon: Globe,
    description: "Tech companies and digital transformation specialists",
    descriptionAr: "شركات التكنولوجيا وخبراء التحول الرقمي",
    focus: ["Digital Solutions", "System Integration", "Cloud Services"],
    focusAr: ["الحلول الرقمية", "تكامل الأنظمة", "خدمات السحابة"],
  },
]

const partnershipBenefits = [
  {
    title: "Expert Network",
    titleAr: "شبكة الخبراء",
    description: "Access to industry experts and government officials",
    descriptionAr: "الوصول إلى خبراء الصناعة والمسؤولين الحكوميين",
    icon: Users,
  },
  {
    title: "Streamlined Process",
    titleAr: "عملية موحدة",
    description: "Faster approvals and smoother business setup",
    descriptionAr: "موافقات أسرع وتأسيس أعمال أكثر سلاسة",
    icon: TrendingUp,
  },
  {
    title: "Cost Efficiency",
    titleAr: "كفاءة التكاليف",
    description: "Negotiated rates and financial support programs",
    descriptionAr: "أسعار مفاوضة وبرامج الدعم المالي",
    icon: Shield,
  },
  {
    title: "Government Support",
    titleAr: "الدعم الحكومي",
    description: "Direct access to government incentive programs",
    descriptionAr: "الوصول المباشر إلى برامج الحوافز الحكومية",
    icon: Building2,
  },
]

export function PartnersContent() {
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
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <motion.span 
              className="inline-block px-4 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {t("partners.badge")}
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t("partners.title")}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              {t("partners.subtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Government Partners Section */}
      <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement duration={6} y={12} className="absolute top-1/4 right-1/4">
            <div className="w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </FloatingElement>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("partners.government")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("partners.section.desc")}
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {governmentPartners.map((partner, index) => {
              const PartnerIcon = partner.icon
              return (
                <StaggerItem key={index}>
                  <motion.div 
                    className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 h-full relative overflow-hidden"
                    whileHover={{ 
                      boxShadow: "0 25px 50px -12px rgba(0, 108, 53, 0.15)",
                      y: -8
                    }}
                  >
                    {/* Gradient background */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div 
                        className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-6"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <PartnerIcon className="w-7 h-7 text-primary" />
                      </motion.div>

                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {language === "ar" ? partner.nameAr : partner.name}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {language === "ar" ? partner.descriptionAr : partner.description}
                      </p>

                      <div className="space-y-2">
                        {(language === "ar" ? partner.focusAr : partner.focus).map((item, idx) => (
                          <motion.div 
                            key={idx}
                            className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                            whileHover={{ x: language === "ar" ? -5 : 5 }}
                          >
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Corporate Partners Section */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement duration={7} y={15} className="absolute bottom-1/4 left-1/4">
            <div className="w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          </FloatingElement>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("partners.corporate")}
            </h2>
            <p className="text-lg text-muted-foreground">
              Our strategic corporate partners provide complementary services and expertise
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {corporatePartners.map((partner, index) => {
              const PartnerIcon = partner.icon
              return (
                <StaggerItem key={index}>
                  <motion.div 
                    className="group p-8 bg-card rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 h-full relative overflow-hidden"
                    whileHover={{ 
                      boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.15)",
                      y: -8
                    }}
                  >
                    {/* Gradient background */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div 
                        className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 mb-6"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        <PartnerIcon className="w-7 h-7 text-accent" />
                      </motion.div>

                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                        {language === "ar" ? partner.nameAr : partner.name}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {language === "ar" ? partner.descriptionAr : partner.description}
                      </p>

                      <div className="space-y-2">
                        {(language === "ar" ? partner.focusAr : partner.focus).map((item, idx) => (
                          <motion.div 
                            key={idx}
                            className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                            whileHover={{ x: language === "ar" ? -5 : 5 }}
                          >
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"
          animate={{ 
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Partnership Benefits
            </h2>
            <p className="text-lg text-muted-foreground">
              Why partner with WenX Investment Services
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon
              return (
                <StaggerItem key={index}>
                  <motion.div 
                    className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 text-center h-full"
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 15px 30px -10px rgba(0, 108, 53, 0.1)"
                    }}
                  >
                    <motion.div 
                      className="flex justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <BenefitIcon className="w-6 h-6 text-primary" />
                      </div>
                    </motion.div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {language === "ar" ? benefit.titleAr : benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {language === "ar" ? benefit.descriptionAr : benefit.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement duration={8} y={20} className="absolute top-1/2 right-1/4 -translate-y-1/2">
            <div className="w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          </FloatingElement>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {t("partners.cta")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("partners.cta.desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:info@wenx.sa">
                  <Mail className="w-4 h-4 mr-2" />
                  info@wenx.sa
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+966111111111">
                  <Phone className="w-4 h-4 mr-2" />
                  +966 11 1111 1111
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
