"use client"

import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import { Building2, Briefcase, Handshake, Shield, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem, HoverCard, BounceIcon } from "@/components/animations"

const governmentPartners = [
  {
    icon: Building2,
    logo: "/Ministry_of_Investment.svg",
    titleKey: "partners.misa",
    descKey: "partners.misa.desc",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Briefcase,
    logo: "/modon.png",
    titleKey: "partners.modon",
    descKey: "partners.modon.desc",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Shield,
    logo: "/Saudi_Industrial_Development_Fund.png",
    titleKey: "partners.sidf",
    descKey: "partners.sidf.desc",
    color: "from-foreground/20 to-foreground/5",
  },
]

const corporatePartners = [
  {
    icon: Handshake,
    titleKey: "partners.financial",
    descKey: "partners.financial.desc",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Briefcase,
    titleKey: "partners.consulting",
    descKey: "partners.consulting.desc",
    color: "from-green-500/20 to-green-500/5",
  },
]

export function PartnersSection() {
  const { t, dir } = useI18n()
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            className="inline-block px-4 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4"
            whileHover={{ scale: 1.05 }}
          >
            {t("partners.badge")}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("partners.title")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t("partners.subtitle")}
          </p>
        </FadeIn>

        {/* Description */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-base text-muted-foreground leading-relaxed">
            {t("partners.section.desc")}
          </p>
        </FadeIn>

        {/* Government Partners */}
        <div className="mb-20">
          <FadeIn className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-2 text-center">
              {t("partners.government")}
            </h3>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </FadeIn>

          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {governmentPartners.map((partner, index) => (
              <StaggerItem key={index}>
                <HoverCard>
                  <motion.div 
                    className={`group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 h-full relative overflow-hidden`}
                    whileHover={{ 
                      boxShadow: "0 20px 40px -15px rgba(0, 108, 53, 0.15)",
                      y: -5
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* Icon */}
                    <motion.div 
                      className="mb-6 relative z-10 flex h-20 items-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {partner.logo ? (
                        <Image
                          src={partner.logo}
                          alt={`${t(partner.titleKey)} logo`}
                          width={180}
                          height={80}
                          className="max-h-16 w-auto object-contain"
                        />
                      ) : (
                        <BounceIcon>
                          <partner.icon className="w-12 h-12 text-primary" />
                        </BounceIcon>
                      )}
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 relative z-10">
                      {t(partner.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 relative z-10 leading-relaxed">
                      {t(partner.descKey)}
                    </p>

                    {/* Accent line on hover */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Corporate Partners */}
        <div className="mb-20">
          <FadeIn className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-2 text-center">
              {t("partners.corporate")}
            </h3>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </FadeIn>

          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">
            {corporatePartners.map((partner, index) => (
              <StaggerItem key={index}>
                <HoverCard>
                  <motion.div 
                    className={`group p-8 bg-card rounded-2xl border border-border hover:border-accent/30 transition-all duration-300 h-full relative overflow-hidden`}
                    whileHover={{ 
                      boxShadow: "0 20px 40px -15px rgba(99, 102, 241, 0.15)",
                      y: -5
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* Icon */}
                    <motion.div 
                      className="mb-6 relative z-10"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <BounceIcon>
                        <partner.icon className="w-12 h-12 text-accent" />
                      </BounceIcon>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 relative z-10">
                      {t(partner.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 relative z-10 leading-relaxed">
                      {t(partner.descKey)}
                    </p>

                    {/* Accent line on hover */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* CTA */}
        <FadeIn className="text-center pt-8">
          <Link href="/partners">
            <Button 
              size="lg" 
              className="group"
              asChild
            >
              <span>
                {t("partners.cta")}
                <motion.span 
                  className="inline-block ml-2"
                  whileHover={{ [dir === "rtl" ? "marginRight" : "marginLeft"]: 8 }}
                >
                  <Arrow className="w-5 h-5" />
                </motion.span>
              </span>
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
