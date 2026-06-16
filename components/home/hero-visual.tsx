"use client"

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Globe2, Landmark, BarChart3, Factory, Sparkles } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const orbitBadges = [
  {
    icon: Landmark,
    labelEn: "Market Entry",
    labelAr: "دخول السوق",
    className: "left-[2%] top-[16%]",
    delay: 0.2,
  },
  {
    icon: Factory,
    labelEn: "Localization",
    labelAr: "التوطين",
    className: "right-[2%] top-[12%]",
    delay: 0.35,
  },
  {
    icon: BarChart3,
    labelEn: "Capital Growth",
    labelAr: "نمو رأس المال",
    className: "bottom-[10%] left-[14%]",
    delay: 0.5,
  },
]

export function HeroVisual() {
  const { dir } = useI18n()
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const smoothRotateX = useSpring(rotateX, { stiffness: 140, damping: 18, mass: 0.8 })
  const smoothRotateY = useSpring(rotateY, { stiffness: 140, damping: 18, mass: 0.8 })
  const panelTransform = useMotionTemplate`perspective(1800px) rotateX(${smoothRotateX}deg) rotateY(${smoothRotateY}deg)`
  const shadowX = useTransform(smoothRotateY, [-14, 14], [-30, 30])
  const shadowY = useTransform(smoothRotateX, [-14, 14], [20, -20])
  const shadow = useMotionTemplate`${shadowX}px ${shadowY}px 80px rgba(31, 79, 143, 0.18)`

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height
    rotateY.set((x - 0.5) * 18)
    rotateX.set((0.5 - y) * 18)
  }

  const handlePointerLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <div
      className="relative mx-auto flex w-full max-w-120 items-center justify-center py-6 sm:py-8"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ perspective: "1800px" }}
    >
      {/* Glow behind globe */}
      <motion.div
        className="absolute inset-x-[15%] top-1/2 h-16 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
        animate={{ scaleX: [0.9, 1.05, 0.9], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative aspect-square w-full max-w-104 transform-3d"
        style={{ transform: panelTransform, boxShadow: shadow }}
      >
        {/* Orbit rings */}
        <motion.div
          className="absolute inset-[12%] rounded-full border border-primary/20"
          style={{ transform: "translateZ(-40px)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-[18%] rounded-full border border-accent/40"
          style={{ transform: "translateZ(-10px) rotateX(68deg)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-[24%] rounded-full border border-primary/25"
          style={{ transform: "translateZ(22px) rotateY(74deg)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Globe */}
        <motion.div
          className="absolute inset-[22%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.96),rgba(229,240,252,0.94)_18%,rgba(31,79,143,0.96)_48%,rgba(18,129,91,0.94)_72%,rgba(19,41,75,0.98)_100%)]"
          style={{ transform: "translateZ(72px)" }}
          animate={{ rotate: [0, 6, -4, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-[10%] rounded-full border border-white/20" />
          <div className="absolute inset-[22%] rounded-full border border-white/10" />
          <motion.div
            className="absolute inset-[16%] rounded-full border border-accent/30"
            animate={{ scale: [1, 1.04, 1], opacity: [0.55, 0.95, 0.55] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-x-[26%] top-[18%] h-[20%] rounded-full bg-white/20 blur-xl" />
          <div className="absolute inset-x-[32%] bottom-[16%] h-[18%] rounded-full bg-accent/20 blur-2xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
              <Globe2 className="h-10 w-10 text-white sm:h-12 sm:w-12" />
            </div>
          </div>
        </motion.div>

        {/* Vision 2030 card */}
        <motion.div
          className="glass-panel absolute left-[8%] top-[8%] rounded-2xl p-3.5 sm:p-4"
          style={{ transform: "translateZ(118px) rotateY(-18deg) rotateX(8deg)" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className={`mb-2 flex items-center gap-2 text-primary ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
              {dir === "rtl" ? "رؤية 2030" : "Vision 2030"}
            </span>
          </div>
          <p className={`text-xl font-bold text-foreground sm:text-2xl ${dir === "rtl" ? "text-right" : "text-left"}`}>
            +$3.0T
          </p>
          <p className={`mt-1 max-w-48 text-xs leading-relaxed text-muted-foreground sm:text-sm ${dir === "rtl" ? "text-right" : "text-left"}`}>
            {dir === "rtl" ? "اقتصاد يتحرك بسرعة نحو قطاعات جديدة" : "A diversified economy accelerating into new sectors"}
          </p>
        </motion.div>

        {/* Market Readiness card */}
        <motion.div
          className="glass-panel absolute bottom-[12%] right-[6%] rounded-2xl p-3.5 sm:p-4"
          style={{ transform: "translateZ(106px) rotateY(16deg) rotateX(-10deg)" }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <p className={`text-xs font-semibold uppercase tracking-[0.18em] text-primary/75 ${dir === "rtl" ? "text-right" : "text-left"}`}>
            {dir === "rtl" ? "جاهزية السوق" : "Market Readiness"}
          </p>
          <div className={`mt-2 flex items-end gap-3 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
            <p className="text-2xl font-bold text-primary sm:text-3xl">24/7</p>
            <p className={`max-w-36 text-xs leading-relaxed text-muted-foreground sm:text-sm ${dir === "rtl" ? "text-right" : "text-left"}`}>
              {dir === "rtl" ? "دعم استثماري وخطوات تنفيذ واضحة" : "Investor support and execution planning"}
            </p>
          </div>
        </motion.div>

        {/* Orbit badge chips */}
        {orbitBadges.map((badge) => {
          const Icon = badge.icon
          const label = dir === "rtl" ? badge.labelAr : badge.labelEn

          return (
            <motion.div
              key={badge.labelEn}
              className={`absolute ${badge.className}`}
              style={{ transform: "translateZ(138px)" }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: badge.delay },
                y: { duration: 4 + badge.delay * 2, repeat: Infinity, ease: "easeInOut", delay: badge.delay },
              }}
            >
              <div
                className={`glass-chip flex items-center gap-2 rounded-full px-3 py-2 shadow-lg sm:px-4 ${dir === "rtl" ? "flex-row-reverse" : ""}`}
              >
                <div className="shrink-0 rounded-full bg-primary/10 p-2 text-primary">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <span className="whitespace-nowrap text-xs font-medium text-foreground sm:text-sm">{label}</span>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
