"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const { t, language, setLanguage, dir } = useI18n()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/media", label: t("nav.media") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "glass-panel border-b border-white/30 shadow-sm" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="WenX Investment Service home">
            <motion.div 
              className="relative h-10 w-32 overflow-hidden sm:h-12 sm:w-40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/logo-wordmark.png"
                alt="WenX Investment Service"
                fill
                priority
                sizes="(min-width: 640px) 160px, 128px"
                className="object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href || item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {item.label}
                  <motion.span 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="glass-chip gap-2 group border-white/40">
                    <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <span className="hidden sm:inline">{language === "en" ? "EN" : language === "ar" ? "AR" : "中文"}</span>
                    <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={dir === "rtl" ? "start" : "end"}>
                  <DropdownMenuItem onClick={() => setLanguage("en")} className="cursor-pointer">
                    <span className="me-2">🇺🇸</span> English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("ar")} className="cursor-pointer">
                    <span className="me-2">🇸🇦</span> العربية
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("zh")} className="cursor-pointer">
                    <span className="me-2">🇨🇳</span> 中文
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden sm:block"
            >
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="glass-panel-strong bg-primary/90 hover:bg-primary">
                    {t("hero.cta.contact")}
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                className="glass-chip border-white/40"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav 
              className="glass-panel mt-3 overflow-hidden rounded-2xl border border-white/35 py-4 lg:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <motion.div 
                className="flex flex-col gap-2"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.05 }
                  },
                  closed: {}
                }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.href || item.label}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 }
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/30 hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                  className="mt-2"
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="glass-panel-strong w-full bg-primary/90 hover:bg-primary">
                      {t("hero.cta.contact")}
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
