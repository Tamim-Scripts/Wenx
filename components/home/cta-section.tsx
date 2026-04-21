"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, MagneticButton, FloatingElement } from "@/components/animations"

export function CTASection() {
  const { t, dir } = useI18n()
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <FadeIn>
          <motion.div 
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 sm:p-12 lg:p-16"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {/* Animated background decorations */}
            <motion.div 
              className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
              animate={{ 
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-48 h-48 bg-background/10 rounded-full blur-2xl"
              animate={{ 
                x: [0, -20, 0],
                y: [0, 30, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Floating sparkles */}
            <FloatingElement duration={3} y={15} className="absolute top-8 right-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-accent/40" />
              </motion.div>
            </FloatingElement>
            <FloatingElement duration={4} y={12} className="absolute bottom-12 left-8">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-background/30" />
              </motion.div>
            </FloatingElement>
            
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">
                  {t("contact.cta")}
                </h2>
              </motion.div>
              <motion.p 
                className="text-lg text-primary-foreground/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t("hero.subtitle")}
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <MagneticButton>
                  <Link href="/contact">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" className="bg-background text-foreground hover:bg-background/90 px-8 h-14 text-base group">
                        {t("hero.cta.contact")}
                        <motion.span 
                          className="ms-2 inline-block"
                          animate={{ x: [0, 4, 0] }}
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
                      <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 h-14 text-base">
                        {t("services.title")}
                      </Button>
                    </motion.div>
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
