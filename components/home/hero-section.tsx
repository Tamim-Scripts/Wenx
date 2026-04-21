"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { 
  FadeIn, 
  FloatingElement, 
  AnimatedGradient,
  StaggerContainer,
  StaggerItem,
  MagneticButton,
  PulseRing
} from "@/components/animations"

export function HeroSection() {
  const { t, dir } = useI18n()
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Animated Background */}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[100vh] py-20">
          {/* Left Side - Content */}
          <div className={`${dir === "rtl" ? "lg:order-2" : "lg:order-1"} order-2 lg:order-1`}>
            {/* Animated Badge */}
            <FadeIn delay={0.1}>
              <motion.div 
                className={`inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-8 border border-green-300 ${dir === "rtl" ? "flex-row-reverse" : ""}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <PulseRing>
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                </PulseRing>
                <span className="text-sm font-medium text-green-700">{t("hero.badge")}</span>
              </motion.div>
            </FadeIn>

            {/* Main Heading */}
            <FadeIn delay={0.2}>
              <h1 className={`text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-balance mb-6 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                {dir === "rtl" ? (
                  <>
                    المملكة العربية السعودية في{" "}
                    <span className="text-amber-500">التوطين</span>
                    {" "}و 
                    <span className="text-green-600">الاستثمار</span>
                    {" "}إلى بوابتك
                  </>
                ) : (
                  <>
                    Your Gateway to{" "}
                    <span className="text-green-600">Investment</span>
                    {" "}& 
                    <span className="text-amber-500">Localization</span>
                    {" "}in Saudi Arabia
                  </>
                )}
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={0.4}>
              <p className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 text-pretty ${dir === "rtl" ? "text-right" : "text-left"}`}>
                {t("hero.subtitle")}
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.5}>
              <div className={`flex flex-col sm:flex-row items-start gap-4 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
                <MagneticButton>
                  <Link href="/contact">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base group">
                        {t("hero.cta.start")}
                        <motion.span 
                          className={`inline-block ${dir === "rtl" ? "me-2" : "ms-2"}`}
                          animate={{ x: [0, dir === "rtl" ? -4 : 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Arrow className="w-5 h-5" />
                        </motion.span>
                      </Button>
                    </motion.div>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/services">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" variant="outline" className="px-8 h-14 text-base border-2">
                        {t("hero.cta.explore")}
                      </Button>
                    </motion.div>
                  </Link>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>

          {/* Right Side - Stats Preview */}
          <div className={`${dir === "rtl" ? "lg:order-1" : "lg:order-2"} order-1 lg:order-2`}>
            <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <StaggerItem>
                <motion.div 
                  className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-green-500/30 transition-all cursor-default"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-4xl font-bold text-green-600 mb-2">20%</p>
                  <p className={`font-semibold text-foreground mb-1 ${dir === "rtl" ? "text-right" : "text-left"}`}>{t("stats.tax")}</p>
                  <p className={`text-sm text-muted-foreground ${dir === "rtl" ? "text-right" : "text-left"}`}>{t("stats.tax.desc")}</p>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div 
                  className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-green-500/30 transition-all cursor-default"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-4xl font-bold text-green-600 mb-2">100%</p>
                  <p className={`font-semibold text-foreground mb-1 ${dir === "rtl" ? "text-right" : "text-left"}`}>{t("stats.ownership")}</p>
                  <p className={`text-sm text-muted-foreground ${dir === "rtl" ? "text-right" : "text-left"}`}>{t("stats.ownership.desc")}</p>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div 
                  className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-green-500/30 transition-all cursor-default"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-4xl font-bold text-green-600 mb-2">{t("stats.minerals.value")}</p>
                  <p className={`font-semibold text-foreground mb-1 ${dir === "rtl" ? "text-right" : "text-left"}`}>{t("stats.minerals")}</p>
                  <p className={`text-sm text-muted-foreground ${dir === "rtl" ? "text-right" : "text-left"}`}>{t("stats.minerals.desc")}</p>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div 
                  className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-green-500/30 transition-all cursor-default"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-4xl font-bold text-green-600 mb-2">{t("stats.experience.value")}</p>
                  <p className={`font-semibold text-foreground mb-1 ${dir === "rtl" ? "text-right" : "text-left"}`}>{t("stats.experience")}</p>
                  <p className={`text-sm text-muted-foreground ${dir === "rtl" ? "text-right" : "text-left"}`}>{t("stats.experience.desc")}</p>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center cursor-pointer"
          whileHover={{ borderColor: 'hsl(var(--primary))' }}
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div 
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
