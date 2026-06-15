"use client"

import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem, BounceIcon } from "@/components/animations"

export function Footer() {
  const { t, dir } = useI18n()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/investment", label: t("nav.investment") },
    { href: "/services", label: t("nav.services") },
    { href: "/localization", label: t("nav.localization") },
  ]

  const supportLinks = [
    { href: "/tax", label: t("nav.tax") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/contact", label: t("nav.contact") },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-500" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:text-blue-600" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-500" },
  ]

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <FadeIn delay={0.1} className="lg:col-span-1">
            <Link href="/" className="mb-4 inline-flex group" aria-label="WenX Investment Service home">
              <motion.div 
                className="relative h-14 w-44 overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/logo-wordmark.png"
                  alt="WenX Investment Service"
                  fill
                  sizes="176px"
                  className="object-contain"
                />
              </motion.div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.2}>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <StaggerContainer staggerDelay={0.05}>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <StaggerItem key={link.href}>
                    <li>
                      <Link
                        href={link.href}
                        className="text-background/70 hover:text-accent transition-colors text-sm inline-block"
                      >
                        <motion.span 
                          className="inline-block"
                          whileHover={{ x: dir === "rtl" ? -5 : 5 }}
                        >
                          {link.label}
                        </motion.span>
                      </Link>
                    </li>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>
          </FadeIn>

          {/* Support Links */}
          <FadeIn delay={0.3}>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <StaggerContainer staggerDelay={0.05}>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <StaggerItem key={link.href}>
                    <li>
                      <Link
                        href={link.href}
                        className="text-background/70 hover:text-accent transition-colors text-sm inline-block"
                      >
                        <motion.span 
                          className="inline-block"
                          whileHover={{ x: dir === "rtl" ? -5 : 5 }}
                        >
                          {link.label}
                        </motion.span>
                      </Link>
                    </li>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.4}>
            <h3 className="font-semibold text-lg mb-4">{t("contact.info.title")}</h3>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-start gap-3 text-sm text-background/70"
                whileHover={{ x: dir === "rtl" ? -3 : 3 }}
              >
                <BounceIcon>
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                </BounceIcon>
                <span>{t("contact.info.address")}</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3 text-sm text-background/70"
                whileHover={{ x: dir === "rtl" ? -3 : 3 }}
              >
                <BounceIcon>
                  <Mail className="w-4 h-4 shrink-0 text-accent" />
                </BounceIcon>
                <span>{t("contact.info.email")}</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3 text-sm text-background/70"
                whileHover={{ x: dir === "rtl" ? -3 : 3 }}
              >
                <BounceIcon>
                  <Phone className="w-4 h-4 shrink-0 text-accent" />
                </BounceIcon>
                <span>{t("contact.info.phone")}</span>
              </motion.li>
            </ul>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <FadeIn delay={0.5}>
          <motion.div 
            className="mt-12 pt-8 border-t border-background/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-sm text-background/60">
                &copy; {currentYear} {t("footer.company")}. {t("footer.rights")}.
              </p>
              
              {/* Social Media Icons */}
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/10 transition-all duration-300 ${social.color}`}
                      whileHover={{ 
                        scale: 1.2,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  )
                })}
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm text-background/60 flex items-center gap-2">
                  <motion.span
                    className="inline-block w-2 h-2 bg-accent rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Vision 2030 Partner
                </span>
              </motion.div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </footer>
  )
}
