"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { Building2, Briefcase, Factory, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem, HoverCard, BounceIcon } from "@/components/animations"

const services = [
  {
    icon: Building2,
    titleKey: "services.company.title",
    descKey: "services.company.desc",
    href: "/services#company-setup",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Briefcase,
    titleKey: "services.business.title",
    descKey: "services.business.desc",
    href: "/services#business-support",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Factory,
    titleKey: "services.industrial.title",
    descKey: "services.industrial.desc",
    href: "/services#industrial",
    gradient: "from-foreground/20 to-foreground/5",
  },
]

export function ServicesSection() {
  const { t, dir } = useI18n()
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight

  return (
    <section className="py-20 lg:py-28 bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            className="inline-block px-4 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4"
            whileHover={{ scale: 1.05 }}
          >
            {dir === "rtl" ? "خدماتنا" : "What We Offer"}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t("services.subtitle")}
          </p>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Link href={service.href}>
                <HoverCard className="h-full">
                  <motion.div 
                    className={`group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 h-full relative overflow-hidden`}
                    whileHover={{ 
                      boxShadow: "0 20px 40px -15px rgba(0, 108, 53, 0.15)"
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    
                    <div className="relative z-10">
                      <BounceIcon>
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                      </BounceIcon>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {t(service.descKey)}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm">
                        <span>{dir === "rtl" ? "اقرأ المزيد" : "Learn more"}</span>
                        <motion.span
                          className="ms-2 inline-block"
                          initial={{ x: 0 }}
                          whileHover={{ x: dir === "rtl" ? -5 : 5 }}
                        >
                          <Arrow className="w-4 h-4" />
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                </HoverCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.5} className="text-center mt-12">
          <Link href="/services">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button size="lg" variant="outline" className="border-2 group">
                {dir === "rtl" ? "عرض جميع الخدمات" : "View All Services"}
                <motion.span 
                  className="ms-2"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Arrow className="w-5 h-5" />
                </motion.span>
              </Button>
            </motion.div>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
