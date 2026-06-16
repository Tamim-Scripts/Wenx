"use client"

import { useI18n } from "@/lib/i18n"
import { MapPin, Shield, Gift, Landmark } from "lucide-react"
import { motion } from "framer-motion"
import { 
  FadeIn, 
  SlideIn, 
  StaggerContainer, 
  StaggerItem, 
  FloatingElement,
  AnimatedCounter,
  BounceIcon
} from "@/components/animations"

const advantages = [
  {
    icon: MapPin,
    titleKey: "why.location",
    descKey: "why.location.desc",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Shield,
    titleKey: "why.stability",
    descKey: "why.stability.desc",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Gift,
    titleKey: "why.incentives",
    descKey: "why.incentives.desc",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Landmark,
    titleKey: "why.ecosystem",
    descKey: "why.ecosystem.desc",
    color: "text-accent",
    bg: "bg-accent/10",
  },
]

export function WhySaudiSection() {
  const { t, dir } = useI18n()

  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <SlideIn direction={dir === "rtl" ? "right" : "left"}>
            <div>
              <motion.span 
                className="inline-block px-4 py-1 bg-accent/10 rounded-full text-sm font-medium text-accent mb-4"
                whileHover={{ scale: 1.05 }}
              >
                {dir === "rtl" ? "لماذا السعودية" : "Why Saudi Arabia"}
              </motion.span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                {t("why.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                {t("why.subtitle")}
              </p>

              <StaggerContainer staggerDelay={0.1} className="grid gap-4">
                {advantages.map((advantage, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors cursor-default"
                      whileHover={{ x: dir === "rtl" ? -8 : 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <BounceIcon>
                        <div className={`w-12 h-12 ${advantage.bg} rounded-lg flex items-center justify-center shrink-0`}>
                          <advantage.icon className={`w-6 h-6 ${advantage.color}`} />
                        </div>
                      </BounceIcon>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {t(advantage.titleKey)}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {t(advantage.descKey)}
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </SlideIn>

          {/* Visual */}
          <SlideIn direction={dir === "rtl" ? "left" : "right"} delay={0.2}>
            <div className="relative">
              <motion.div 
                className="aspect-square bg-gradient-to-br from-primary/10 via-secondary to-accent/10 rounded-3xl p-8 lg:p-12"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 2 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {/* Map representation */}
                <div className="relative w-full h-full">
                  {/* Central circle - Saudi Arabia */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-xl cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(31, 79, 143, 0.38)",
                        "0 0 0 20px rgba(31, 79, 143, 0)",
                      ]
                    }}
                    transition={{
                      boxShadow: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary-foreground">KSA</span>
                      <p className="text-xs text-primary-foreground/80">Strategic Hub</p>
                    </div>
                  </motion.div>
                  
                  {/* Connecting regions with animation */}
                  <FloatingElement duration={3} y={8} className="absolute top-8 left-1/2 -translate-x-1/2">
                    <motion.div 
                      className="gold-gradient-border rounded-full bg-card px-4 py-2 shadow-sm"
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <span className="text-sm font-medium">Europe</span>
                    </motion.div>
                  </FloatingElement>
                  <FloatingElement duration={4} y={10} className="absolute bottom-8 left-8">
                    <motion.div 
                      className="gold-gradient-border rounded-full bg-card px-4 py-2 shadow-sm"
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <span className="text-sm font-medium">Africa</span>
                    </motion.div>
                  </FloatingElement>
                  <FloatingElement duration={3.5} y={12} className="absolute bottom-8 right-8">
                    <motion.div 
                      className="gold-gradient-border rounded-full bg-card px-4 py-2 shadow-sm"
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <span className="text-sm font-medium">Asia</span>
                    </motion.div>
                  </FloatingElement>
                  
                  {/* Animated connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <motion.line 
                      x1="50" y1="25" x2="50" y2="40" 
                      stroke="currentColor" 
                      strokeWidth="0.5" 
                      className="text-primary/30"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.line 
                      x1="20" y1="75" x2="38" y2="58" 
                      stroke="currentColor" 
                      strokeWidth="0.5" 
                      className="text-primary/30"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.7 }}
                    />
                    <motion.line 
                      x1="80" y1="75" x2="62" y2="58" 
                      stroke="currentColor" 
                      strokeWidth="0.5" 
                      className="text-primary/30"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.9 }}
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Floating stats */}
              <FloatingElement duration={3} y={8}>
                <motion.div 
                  className="gold-gradient-border absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-2xl font-bold text-accent">
                    $<AnimatedCounter value={2} suffix=".5T" />
                  </p>
                  <p className="text-xs text-muted-foreground">Mineral Wealth</p>
                </motion.div>
              </FloatingElement>
              <FloatingElement duration={4} y={10}>
                <motion.div 
                  className="gold-gradient-border absolute -top-4 -right-4 rounded-xl bg-card p-4 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-2xl font-bold text-primary">G20</p>
                  <p className="text-xs text-muted-foreground">Member Nation</p>
                </motion.div>
              </FloatingElement>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
