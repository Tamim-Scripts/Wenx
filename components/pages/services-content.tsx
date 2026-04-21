"use client"

import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"
import { 
  Building2, 
  FileCheck, 
  CreditCard, 
  Users2, 
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

export function ServicesContent() {
  const { t, dir } = useI18n()
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
