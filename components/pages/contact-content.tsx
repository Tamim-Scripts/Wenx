"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"
import { 
  MapPin,
  Mail,
  Phone,
  Send,
  Building2,
  Clock,
  CheckCircle,
  Sparkles
} from "lucide-react"
import { 
  FadeIn, 
  SlideIn, 
  StaggerContainer, 
  StaggerItem,
  HoverCard,
  BounceIcon,
  AnimatedGradient,
  FloatingElement
} from "@/components/animations"

export function ContactContent() {
  const { t, language, dir } = useI18n()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 4000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
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
          <FadeIn className="max-w-3xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {language === "ar" ? "تواصل معنا" : "Get in Touch"}
              </span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("contact.title")}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              {t("contact.subtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <SlideIn direction={dir === "rtl" ? "right" : "left"}>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {language === "ar" ? "أرسل لنا رسالة" : "Send us a Message"}
                </h2>
                
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div 
                      key="success"
                      className="p-8 bg-primary/10 rounded-2xl text-center border border-primary/20"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                      >
                        <CheckCircle className="w-8 h-8 text-primary-foreground" />
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-semibold text-foreground mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {language === "ar" ? "تم الإرسال بنجاح!" : "Message Sent!"}
                      </motion.h3>
                      <motion.p 
                        className="text-muted-foreground"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {language === "ar" ? "سنتواصل معك قريباً" : "We'll get back to you soon"}
                      </motion.p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <motion.div 
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <label className="text-sm font-medium text-foreground">
                            {t("contact.form.name")}
                          </label>
                          <Input
                            type="text"
                            required
                            placeholder={language === "ar" ? "محمد أحمد" : "John Smith"}
                            className="h-12 transition-all focus:ring-2 focus:ring-primary/20"
                          />
                        </motion.div>
                        <motion.div 
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                        >
                          <label className="text-sm font-medium text-foreground">
                            {t("contact.form.email")}
                          </label>
                          <Input
                            type="email"
                            required
                            placeholder="john@company.com"
                            className="h-12 transition-all focus:ring-2 focus:ring-primary/20"
                          />
                        </motion.div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <motion.div 
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <label className="text-sm font-medium text-foreground">
                            {t("contact.form.phone")}
                          </label>
                          <Input
                            type="tel"
                            placeholder="+966 5X XXX XXXX"
                            className="h-12 transition-all focus:ring-2 focus:ring-primary/20"
                          />
                        </motion.div>
                        <motion.div 
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25 }}
                        >
                          <label className="text-sm font-medium text-foreground">
                            {t("contact.form.company")}
                          </label>
                          <Input
                            type="text"
                            placeholder={language === "ar" ? "اسم الشركة" : "Company Name"}
                            className="h-12 transition-all focus:ring-2 focus:ring-primary/20"
                          />
                        </motion.div>
                      </div>

                      <motion.div 
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label className="text-sm font-medium text-foreground">
                          {t("contact.form.message")}
                        </label>
                        <Textarea
                          required
                          rows={5}
                          placeholder={language === "ar" ? "كيف يمكننا مساعدتك؟" : "How can we help you?"}
                          className="resize-none transition-all focus:ring-2 focus:ring-primary/20"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                      >
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button 
                            type="submit" 
                            size="lg" 
                            className="w-full h-14 bg-primary hover:bg-primary/90"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <motion.div 
                                className="flex items-center gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                              >
                                <motion.div
                                  className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                                <span>{language === "ar" ? "جاري الإرسال..." : "Sending..."}</span>
                              </motion.div>
                            ) : (
                              <>
                                {t("contact.form.submit")}
                                <Send className="w-5 h-5 ms-2" />
                              </>
                            )}
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </SlideIn>

            {/* Contact Info */}
            <SlideIn direction={dir === "rtl" ? "left" : "right"} delay={0.2}>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t("contact.info.title")}
                </h2>

                <StaggerContainer staggerDelay={0.1} className="space-y-4">
                  {/* Office Location */}
                  <StaggerItem>
                    <HoverCard>
                      <motion.div 
                        className="gold-gradient-border rounded-xl bg-card p-6"
                        whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
                      >
                        <div className="flex items-start gap-4">
                          <BounceIcon>
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                              <MapPin className="w-6 h-6 text-primary" />
                            </div>
                          </BounceIcon>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {language === "ar" ? "موقع المكتب" : "Office Location"}
                            </h3>
                            <p className="text-muted-foreground">
                              {t("contact.info.address")}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </HoverCard>
                  </StaggerItem>

                  {/* Email */}
                  <StaggerItem>
                    <HoverCard>
                      <motion.div 
                        className="gold-gradient-border rounded-xl bg-card p-6"
                        whileHover={{ borderColor: "hsl(var(--accent) / 0.3)" }}
                      >
                        <div className="flex items-start gap-4">
                          <BounceIcon>
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                              <Mail className="w-6 h-6 text-accent" />
                            </div>
                          </BounceIcon>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {language === "ar" ? "البريد الإلكتروني" : "Email"}
                            </h3>
                            <p className="text-muted-foreground">
                              {t("contact.info.email")}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </HoverCard>
                  </StaggerItem>

                  {/* Phone */}
                  <StaggerItem>
                    <HoverCard>
                      <motion.div 
                        className="gold-gradient-border rounded-xl bg-card p-6"
                        whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
                      >
                        <div className="flex items-start gap-4">
                          <BounceIcon>
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                              <Phone className="w-6 h-6 text-primary" />
                            </div>
                          </BounceIcon>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {language === "ar" ? "الهاتف" : "Phone"}
                            </h3>
                            <p className="text-muted-foreground">
                              {t("contact.info.phone")}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </HoverCard>
                  </StaggerItem>

                  {/* Business Hours */}
                  <StaggerItem>
                    <HoverCard>
                      <motion.div 
                        className="gold-gradient-border rounded-xl bg-card p-6"
                        whileHover={{ borderColor: "hsl(var(--foreground) / 0.2)" }}
                      >
                        <div className="flex items-start gap-4">
                          <BounceIcon>
                            <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                              <Clock className="w-6 h-6 text-foreground" />
                            </div>
                          </BounceIcon>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {language === "ar" ? "ساعات العمل" : "Business Hours"}
                            </h3>
                            <p className="text-muted-foreground">
                              {language === "ar" ? "الأحد - الخميس: 9 صباحاً - 6 مساءً" : "Sun - Thu: 9AM - 6PM"}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </HoverCard>
                  </StaggerItem>
                </StaggerContainer>

                {/* Map placeholder */}
                <motion.div 
                  className="mt-8 aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <FloatingElement duration={4} y={10}>
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <Building2 className="w-12 h-12 text-primary/30 mx-auto mb-2" />
                      </motion.div>
                      <p className="text-sm text-muted-foreground">
                        {language === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
                      </p>
                    </div>
                  </FloatingElement>
                  
                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute top-4 right-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5 text-accent/30" />
                  </motion.div>
                </motion.div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 lg:py-28 bg-foreground text-background relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 50%, rgba(31, 79, 143, 0.24) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(201, 151, 51, 0.22) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(18, 129, 91, 0.20) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              {t("contact.cta")}
            </h2>
            <p className="text-lg text-background/70 mb-8">
              {t("hero.subtitle")}
            </p>
            <StaggerContainer staggerDelay={0.1} className="flex flex-wrap items-center justify-center gap-4">
              {[
                { label: "Vision 2030 Partner" },
                { label: "MISA Licensed" },
                { label: "Expert Consultants" },
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    className="flex items-center gap-2 px-4 py-2 bg-background/10 rounded-full border border-background/20"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">{item.label}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
