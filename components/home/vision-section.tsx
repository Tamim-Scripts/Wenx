"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import { Users, TrendingUp, Flag } from "lucide-react"
import { motion } from "framer-motion"
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  HoverCard,
  ScaleIn,
  AnimatedCounter 
} from "@/components/animations"

const pillars = [
  {
    icon: Users,
    number: "01",
    titleKey: "vision.pillar1",
    descKey: "vision.pillar1.desc",
    color: "bg-primary",
    iconColor: "text-foreground",
  },
  {
    icon: TrendingUp,
    number: "02",
    titleKey: "vision.pillar2",
    descKey: "vision.pillar2.desc",
    color: "bg-accent",
    iconColor: "text-accent-foreground",
  },
  {
    icon: Flag,
    number: "03",
    titleKey: "vision.pillar3",
    descKey: "vision.pillar3.desc",
    color: "bg-background",
    iconColor: "text-foreground",
  },
]

export function VisionSection() {
  const { t, dir } = useI18n()

  return (
    <section className="py-20 lg:py-28 bg-foreground text-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 rounded-full mb-6 border border-background/20"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(255, 255, 255, 0.2)",
                "0 0 0 10px rgba(255, 255, 255, 0)",
              ]
            }}
            transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
          >
            <motion.span 
              className="text-sm font-bold"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              2030
            </motion.span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            {t("vision.title")}
          </h2>
          <p className="text-lg text-background/70">
            {t("vision.subtitle")}
          </p>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ScaleIn delay={0.15}>
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-background/15 bg-background/5 shadow-2xl shadow-black/30"
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 180, damping: 24 }}
            >
              <div className="relative aspect-[4/3] min-h-[320px]">
                <Image
                  src="/vision2030.webp"
                  alt="Saudi Vision 2030 Riyadh skyline"
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <motion.div
                    className="inline-flex items-center gap-4 rounded-2xl border border-background/25 bg-foreground/45 px-5 py-4 shadow-xl shadow-black/20 backdrop-blur-md"
                    whileHover={{ scale: 1.04, backgroundColor: "rgba(19, 41, 75, 0.68)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-accent"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <span className="text-lg font-bold text-accent-foreground">
                        <AnimatedCounter value={2030} duration={1.5} />
                      </span>
                    </motion.div>
                    <div className={dir === "rtl" ? "text-right" : "text-left"}>
                      <p className="font-semibold">Saudi Vision 2030</p>
                      <p className="text-sm text-background/75">Official Partner</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ScaleIn>

          {/* Pillars */}
          <StaggerContainer staggerDelay={0.15} className="grid gap-5">
            {pillars.map((pillar, index) => (
              <StaggerItem key={index}>
                <HoverCard>
                  <motion.div
                    className="group relative p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-all duration-300 h-full overflow-hidden"
                    whileHover={{ borderColor: "rgba(255,255,255,0.3)" }}
                  >
                    {/* Number background */}
                    <motion.span 
                      className="absolute -right-4 -top-4 text-[96px] font-bold text-background/5 group-hover:text-background/10 transition-colors pointer-events-none"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {pillar.number}
                    </motion.span>
                    
                    <div className="relative z-10 flex gap-5">
                      <motion.div 
                        className={`w-12 h-12 ${pillar.color} rounded-xl flex items-center justify-center shrink-0`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <pillar.icon className={`w-6 h-6 ${pillar.iconColor}`} />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {t(pillar.titleKey)}
                        </h3>
                        <p className="text-background/70 text-sm leading-relaxed">
                          {t(pillar.descKey)}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover gradient */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
