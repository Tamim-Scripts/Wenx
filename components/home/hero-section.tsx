"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { HeroVisual } from "@/components/home/hero-visual"
import {
  FadeIn,
  FloatingElement,
  AnimatedGradient,
  StaggerContainer,
  StaggerItem,
  MagneticButton,
  PulseRing,
} from "@/components/animations"

const STATS = [
  { id: "tax", value: "20%", labelKey: "stats.tax", descKey: "stats.tax.desc", valueKey: null },
  { id: "ownership", value: "100%", labelKey: "stats.ownership", descKey: "stats.ownership.desc", valueKey: null },
  { id: "minerals", value: null, labelKey: "stats.minerals", descKey: "stats.minerals.desc", valueKey: "stats.minerals.value" },
  { id: "experience", value: null, labelKey: "stats.experience", descKey: "stats.experience.desc", valueKey: "stats.experience.value" },
] as const

export function HeroSection() {
  const { t, dir } = useI18n()
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight
  const isRtl = dir === "rtl"

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-20 lg:pt-24">
      {/* Animated Background */}
      <AnimatedGradient />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Floating decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <FloatingElement duration={4} y={15} className="absolute top-24 right-[8%]">
          <div className="h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        </FloatingElement>
        <FloatingElement duration={5} y={20} className="absolute bottom-24 left-[4%]">
          <div className="h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        </FloatingElement>
        <FloatingElement duration={6} y={12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-64 w-64 rounded-full bg-primary/5 blur-2xl" />
        </FloatingElement>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                             linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col gap-10 py-12 lg:gap-14 lg:py-16">

          {/* ── Top hero row: content + visual ── */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">

            {/* Content column */}
            <div
              className={`flex flex-col items-center text-center ${
                isRtl ? "lg:order-2 lg:items-end lg:text-right" : "lg:order-1 lg:items-start lg:text-left"
              }`}
            >
              {/* Live badge */}
              <FadeIn delay={0.1}>
                <motion.div
                  className={`glass-chip mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 ${isRtl ? "flex-row-reverse" : ""}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <PulseRing>
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </PulseRing>
                  <span className="text-sm font-medium text-primary">{t("hero.badge")}</span>
                </motion.div>
              </FadeIn>

              {/* Main heading */}
              <FadeIn delay={0.2}>
                <h1 className="mb-5 max-w-[20ch] text-4xl font-bold leading-[1.1] text-balance text-foreground sm:text-5xl lg:max-w-[16ch] lg:text-[3.2rem] xl:text-[3.75rem]">
                  {isRtl ? (
                    <>
                      بوابتك إلى{" "}
                      <span className="text-primary">الاستثمار</span>
                      {" "}و
                      <span className="text-accent"> التوطين</span>
                      {" "}في المملكة العربية السعودية
                    </>
                  ) : (
                    <>
                      Your Gateway to{" "}
                      <span className="text-primary">Investment</span>
                      {" "}&{" "}
                      <span className="text-accent">Localization</span>
                      {" "}in Saudi Arabia
                    </>
                  )}
                </h1>
              </FadeIn>

              {/* Subtitle */}
              <FadeIn delay={0.35}>
                <p className="mb-8 max-w-[42ch] text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                  {t("hero.subtitle")}
                </p>
              </FadeIn>

              {/* CTA Buttons */}
              <FadeIn delay={0.45}>
                <div
                  className={`flex flex-col items-center gap-3 sm:flex-row ${isRtl ? "sm:flex-row-reverse" : ""}`}
                >
                  <MagneticButton>
                    <Link href="/contact">
                      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                        <Button
                          size="lg"
                          className="h-12 bg-primary px-8 text-base text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
                        >
                          {t("hero.cta.start")}
                          <motion.span
                            className={`inline-block ${isRtl ? "me-2" : "ms-2"}`}
                            animate={{ x: [0, isRtl ? -4 : 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Arrow className="h-5 w-5" />
                          </motion.span>
                        </Button>
                      </motion.div>
                    </Link>
                  </MagneticButton>

                  <MagneticButton>
                    <Link href="/services">
                      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                        <Button
                          size="lg"
                          variant="outline"
                          className="glass-panel h-12 border-primary/15 px-8 text-base hover:border-primary/30 hover:bg-primary/5"
                        >
                          {t("hero.cta.explore")}
                        </Button>
                      </motion.div>
                    </Link>
                  </MagneticButton>
                </div>
              </FadeIn>
            </div>

            {/* Visual column */}
            <FadeIn
              delay={0.25}
              className={`flex items-center justify-center ${isRtl ? "lg:order-1" : "lg:order-2"}`}
            >
              <HeroVisual />
            </FadeIn>
          </div>

          {/* ── Stats row: 4 columns on desktop, 2 on mobile ── */}
          <StaggerContainer
            staggerDelay={0.1}
            className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5"
          >
            {STATS.map((stat) => (
              <StaggerItem key={stat.id}>
                <motion.div
                  className="glass-panel gold-gradient-border flex cursor-default flex-col items-center rounded-2xl p-5 text-center transition-all hover:shadow-lg"
                  whileHover={{ y: -4 }}
                >
                  <p className="mb-1 text-2xl font-bold text-primary sm:text-3xl">
                    {stat.valueKey ? t(stat.valueKey) : stat.value}
                  </p>
                  <p className="mb-1 text-sm font-semibold text-foreground">{t(stat.labelKey)}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">{t(stat.descKey)}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          className="flex h-10 w-6 cursor-pointer justify-center rounded-full border-2 border-muted-foreground/30"
          whileHover={{ borderColor: "hsl(var(--primary))" }}
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        >
          <motion.div
            className="mt-2 h-3 w-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
