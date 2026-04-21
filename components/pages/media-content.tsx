"use client"

import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"
import { 
  BookOpen,
  Newspaper,
  Calendar,
  ArrowRight,
  ArrowLeft,
  ExternalLink
} from "lucide-react"
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  HoverCard,
  FloatingElement,
  AnimatedGradient
} from "@/components/animations"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const articles = [
  {
    id: 1,
    titleEn: "Investment Opportunities in Saudi Arabia 2024",
    titleAr: "فرص الاستثمار في المملكة العربية السعودية 2024",
    descEn: "Discover the latest investment opportunities in Saudi Arabia aligned with Vision 2030",
    descAr: "اكتشف أحدث فرص الاستثمار في المملكة العربية السعودية وفقاً لرؤية 2030",
    categoryEn: "Investment",
    categoryAr: "استثمار",
    date: "2024-04-15",
    image: "📊",
  },
  {
    id: 2,
    titleEn: "Industrial Localization Benefits",
    titleAr: "فوائد التوطين الصناعي",
    descEn: "Learn how industrial localization provides competitive advantages for your business",
    descAr: "تعرف على كيفية توفير التوطين الصناعي ميزات تنافسية لعملك",
    categoryEn: "Manufacturing",
    categoryAr: "التصنيع",
    date: "2024-04-10",
    image: "🏭",
  },
  {
    id: 3,
    titleEn: "Tax Framework Overview",
    titleAr: "نظرة عامة على الإطار الضريبي",
    descEn: "Comprehensive guide to understanding Saudi Arabia's tax system",
    descAr: "دليل شامل لفهم النظام الضريبي في المملكة العربية السعودية",
    categoryEn: "Tax",
    categoryAr: "ضرائب",
    date: "2024-04-05",
    image: "💰",
  },
  {
    id: 4,
    titleEn: "Company Setup Process Simplified",
    titleAr: "عملية تأسيس الشركة المبسطة",
    descEn: "Step-by-step guide to establishing your business in Saudi Arabia",
    descAr: "دليل خطوة بخطوة لتأسيس عملك في المملكة العربية السعودية",
    categoryEn: "Setup",
    categoryAr: "التأسيس",
    date: "2024-03-28",
    image: "📋",
  },
  {
    id: 5,
    titleEn: "Government Incentives Explained",
    titleAr: "شرح الحوافز الحكومية",
    descEn: "Understanding the incentive programs available for investors and businesses",
    descAr: "فهم برامج الحوافز المتاحة للمستثمرين والشركات",
    categoryEn: "Incentives",
    categoryAr: "حوافز",
    date: "2024-03-20",
    image: "🎁",
  },
  {
    id: 6,
    titleEn: "Vision 2030 Alignment Strategy",
    titleAr: "استراتيجية التوافق مع رؤية 2030",
    descEn: "How to align your business strategy with Saudi Arabia's Vision 2030",
    descAr: "كيفية توافق استراتيجية عملك مع رؤية المملكة 2030",
    categoryEn: "Strategy",
    categoryAr: "استراتيجية",
    date: "2024-03-15",
    image: "🎯",
  },
]

export function MediaContent() {
  const { t, language, dir } = useI18n()
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight

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
              <Newspaper className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {t("media.articles")}
              </span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("media.title")}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              {t("media.subtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <StaggerItem key={article.id}>
                <motion.div
                  className="group h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-8 h-40 flex items-center justify-center text-5xl">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {article.image}
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {language === "ar" ? article.categoryAr : article.categoryEn}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.date).toLocaleDateString(language === "ar" ? "ar-SA" : "en-US")}
                      </span>
                    </div>
                    
                    <h3 className={`text-lg font-bold text-foreground mb-2 line-clamp-2 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                      {language === "ar" ? article.titleAr : article.titleEn}
                    </h3>
                    
                    <p className={`text-sm text-muted-foreground mb-4 line-clamp-2 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                      {language === "ar" ? article.descAr : article.descEn}
                    </p>
                    
                    <motion.button
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      {t("media.readmore")}
                      <Arrow className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {language === "ar" ? "هل تريد أن تبقى محدثاً؟" : "Want to Stay Updated?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === "ar" ? "اشترك في رسالتنا الإخبارية للحصول على أحدث الرؤى والمقالات" : "Subscribe to our newsletter for the latest insights and articles"}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder={language === "ar" ? "بريدك الإلكتروني" : "Your email"}
                className="px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary min-w-80"
              />
              <Button className="bg-primary hover:bg-primary/90">
                {language === "ar" ? "اشترك" : "Subscribe"}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
