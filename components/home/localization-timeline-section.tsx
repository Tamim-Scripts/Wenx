"use client"

import { useI18n } from "@/lib/i18n"
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Factory,
  FileCheck2,
  LandPlot,
  MapPinned,
} from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

const timelineSteps = [
  {
    icon: Building2,
    titleKey: "timeline.step1.title",
    durationKey: "timeline.step1.duration",
    detailKey: "timeline.step1.detail",
    color: "from-primary to-primary/70",
  },
  {
    icon: FileCheck2,
    titleKey: "timeline.step2.title",
    durationKey: "timeline.step2.duration",
    detailKey: "timeline.step2.detail",
    color: "from-accent to-accent/80",
  },
  {
    icon: MapPinned,
    titleKey: "timeline.step3.title",
    durationKey: "timeline.step3.duration",
    detailKey: "timeline.step3.detail",
    color: "from-primary to-emerald-600",
  },
  {
    icon: BadgeCheck,
    titleKey: "timeline.step4.title",
    durationKey: "timeline.step4.duration",
    detailKey: "timeline.step4.detail",
    color: "from-accent to-primary",
  },
]

const setupStats = [
  {
    icon: Clock3,
    valueKey: "timeline.stat1.value",
    labelKey: "timeline.stat1.label",
  },
  {
    icon: Factory,
    valueKey: "timeline.stat2.value",
    labelKey: "timeline.stat2.label",
  },
  {
    icon: LandPlot,
    valueKey: "timeline.stat3.value",
    labelKey: "timeline.stat3.label",
  },
]

export function LocalizationTimelineSection() {
  const { t, dir } = useI18n()

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-background">
      <motion.div
        className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.12, 1], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1, 1.18, 1], y: [0, -24, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="mx-auto mb-14 max-w-3xl text-center">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <CheckCircle2 className="h-4 w-4" />
            {t("timeline.badge")}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("timeline.title")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t("timeline.subtitle")}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="gold-gradient-border relative rounded-3xl bg-card/80 p-5 shadow-xl shadow-primary/5 backdrop-blur sm:p-8 lg:p-10">
            <div className="absolute inset-x-10 top-[7.15rem] hidden h-1 rounded-full bg-gradient-to-r from-primary/25 via-accent/35 to-primary/25 lg:block" />

            <StaggerContainer staggerDelay={0.12} className="grid gap-5 lg:grid-cols-4 lg:gap-6">
              {timelineSteps.map((step, index) => (
                <StaggerItem key={step.titleKey}>
                  <motion.article
                    className="gold-gradient-border group relative h-full rounded-2xl bg-background p-5 shadow-sm transition-colors"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  >
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg shadow-primary/15`}
                      >
                        <step.icon className="h-7 w-7" />
                      </div>
                      <span className="text-5xl font-bold leading-none text-primary/10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mb-4 lg:mb-8">
                      <h3 className="text-lg font-semibold text-foreground">{t(step.titleKey)}</h3>
                      <p className="mt-2 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                        {t(step.durationKey)}
                      </p>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">{t(step.detailKey)}</p>

                    <div className="absolute -bottom-3 left-6 hidden h-6 w-6 rounded-full border-4 border-card bg-primary shadow-lg shadow-primary/20 lg:block" />
                    {index < timelineSteps.length - 1 && (
                      <div
                        className={`absolute top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card text-primary shadow-md lg:flex ${
                          dir === "rtl" ? "-left-5" : "-right-5"
                        }`}
                      >
                        <span className="h-2 w-2 rounded-full bg-accent" />
                      </div>
                    )}
                  </motion.article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.12} className="mt-8 grid gap-4 md:grid-cols-3">
          {setupStats.map((stat) => (
            <StaggerItem key={stat.labelKey}>
              <motion.div
                className="gold-gradient-border flex h-full items-center gap-4 rounded-2xl bg-card p-5 shadow-sm"
                whileHover={{ y: -4, borderColor: "rgba(31, 79, 143, 0.32)" }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{t(stat.valueKey)}</p>
                  <p className="text-sm text-muted-foreground">{t(stat.labelKey)}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
