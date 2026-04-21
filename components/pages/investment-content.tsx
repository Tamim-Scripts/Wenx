"use client"

import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"
import { 
  Users, 
  TrendingUp, 
  Flag, 
  MapPin, 
  Shield, 
  Gift, 
  Landmark,
  Droplets,
  Mountain,
  Building2,
  FileCheck,
  CreditCard,
  Play,
  CheckCircle2
} from "lucide-react"
import { 
  FadeIn, 
  SlideIn, 
  StaggerContainer, 
  StaggerItem, 
  HoverCard, 
  BounceIcon,
  AnimatedCounter,
  AnimatedLine,
  ScaleIn,
  AnimatedGradient,
  FloatingElement
} from "@/components/animations"

const visionPillars = [
  {
    icon: Users,
    titleKey: "vision.pillar1",
    descKey: "vision.pillar1.desc",
    color: "bg-primary",
  },
  {
    icon: TrendingUp,
    titleKey: "vision.pillar2",
    descKey: "vision.pillar2.desc",
    color: "bg-accent",
  },
  {
    icon: Flag,
    titleKey: "vision.pillar3",
    descKey: "vision.pillar3.desc",
    color: "bg-foreground",
  },
]

const advantages = [
  { icon: MapPin, titleKey: "why.location", descKey: "why.location.desc" },
  { icon: Shield, titleKey: "why.stability", descKey: "why.stability.desc" },
  { icon: Gift, titleKey: "why.incentives", descKey: "why.incentives.desc" },
  { icon: Landmark, titleKey: "why.ecosystem", descKey: "why.ecosystem.desc" },
]

const resources = [
  { icon: Droplets, label: "Oil Reserves", value: "World's Largest", labelAr: "احتياطيات النفط", valueAr: "الأكبر في العالم" },
  { icon: Mountain, label: "Mineral Wealth", value: "$2.5 Trillion", labelAr: "الثروة المعدنية", valueAr: "2.5 تريليون دولار" },
]

const processSteps = [
  { step: 1, key: "investment.process.step1", icon: FileCheck },
  { step: 2, key: "investment.process.step2", icon: CheckCircle2 },
  { step: 3, key: "investment.process.step3", icon: Building2 },
  { step: 4, key: "investment.process.step4", icon: CreditCard },
  { step: 5, key: "investment.process.step5", icon: Play },
]

export function InvestmentContent() {
  const { t, language, dir } = useI18n()

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen lg:min-h-auto py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
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
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-primary">Saudi Arabia</span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("investment.title")}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              {t("investment.subtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Vision 2030 Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-accent-foreground font-bold text-xl">
                <AnimatedCounter value={2030} duration={1.5} />
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              {t("vision.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("vision.subtitle")}
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {visionPillars.map((pillar, index) => (
              <StaggerItem key={index}>
                <HoverCard className="h-full">
                  <motion.div
                    className="p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all h-full"
                    whileHover={{ boxShadow: "0 20px 40px -15px rgba(0,108,53,0.15)" }}
                  >
                    <BounceIcon>
                      <div className={`w-14 h-14 ${pillar.color} rounded-xl flex items-center justify-center mb-6`}>
                        <pillar.icon className={`w-7 h-7 ${index === 2 ? 'text-background' : 'text-foreground'}`} />
                      </div>
                    </BounceIcon>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {t(pillar.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(pillar.descKey)}
                    </p>
                  </motion.div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Investment Advantages */}
      <section className="py-20 lg:py-28 bg-secondary/50 relative overflow-hidden">
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              {t("investment.advantages.title")}
            </h2>
          </FadeIn>
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <StaggerItem key={index}>
                <HoverCard className="h-full">
                  <motion.div
                    className="p-6 bg-card rounded-xl border border-border text-center h-full"
                    whileHover={{ y: -8 }}
                  >
                    <BounceIcon>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <advantage.icon className="w-6 h-6 text-primary" />
                      </div>
                    </BounceIcon>
                    <h3 className="font-semibold text-foreground mb-2">
                      {t(advantage.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(advantage.descKey)}
                    </p>
                  </motion.div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Key Resources */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              {t("investment.resources.title")}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {resources.map((resource, index) => (
              <SlideIn key={index} direction={index === 0 ? "left" : "right"} delay={index * 0.2}>
                <motion.div
                  className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <resource.icon className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                    <p className="text-3xl font-bold text-foreground mb-2">
                      {language === "ar" ? resource.valueAr : resource.value}
                    </p>
                    <p className="text-muted-foreground">
                      {language === "ar" ? resource.labelAr : resource.label}
                    </p>
                  </div>
                </motion.div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* MISA Section */}
      <section className="py-20 lg:py-28 bg-foreground text-background relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(circle at 30% 30%, rgba(218, 165, 32, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 70%, rgba(218, 165, 32, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 30%, rgba(218, 165, 32, 0.2) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <ScaleIn className="max-w-3xl mx-auto text-center">
            <motion.div 
              className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-8"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <Landmark className="w-10 h-10 text-accent-foreground" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("investment.misa.title")}
            </h2>
            <p className="text-lg text-background/70 mb-8">
              {t("investment.misa.desc")}
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <motion.span 
                className="px-4 py-2 bg-background/10 rounded-full text-sm border border-background/20"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                MISA
              </motion.span>
              <motion.span 
                className="px-4 py-2 bg-background/10 rounded-full text-sm border border-background/20"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                Ministry of Investment
              </motion.span>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Company Setup Process */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              {t("investment.process.title")}
            </h2>
          </FadeIn>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Animated Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block overflow-hidden">
                <AnimatedLine className="w-full h-full" />
              </div>
              
              <StaggerContainer staggerDelay={0.15} className="space-y-8">
                {processSteps.map((step, index) => (
                  <StaggerItem key={index}>
                    <motion.div 
                      className="relative flex items-start gap-6"
                      whileHover={{ x: dir === "rtl" ? -10 : 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Step number */}
                      <motion.div 
                        className="relative z-10 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </motion.div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-3">
                        <motion.div 
                          className="flex items-center gap-3 mb-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <span className="text-sm font-medium text-primary">
                            {language === "ar" ? `الخطوة ${step.step}` : `Step ${step.step}`}
                          </span>
                        </motion.div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {t(step.key)}
                        </h3>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
