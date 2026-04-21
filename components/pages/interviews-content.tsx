"use client"

import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"
import { 
  Play,
  Clock,
  User,
  ArrowRight,
  ArrowLeft,
} from "lucide-react"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  FloatingElement,
  AnimatedGradient
} from "@/components/animations"
import { Button } from "@/components/ui/button"

const interviews = [
  {
    id: 1,
    titleEn: "Future of Saudi Investment",
    titleAr: "مستقبل الاستثمار السعودي",
    guestEn: "Dr. Muhammad Al-Jassim",
    guestAr: "د. محمد الجاسم",
    roleEn: "Investment Director",
    roleAr: "مدير الاستثمار",
    topicEn: "Investment Strategy",
    topicAr: "استراتيجية الاستثمار",
    durationEn: "18 mins",
    durationAr: "18 دقيقة",
    date: "2024-04-18",
    image: "👔",
  },
  {
    id: 2,
    titleEn: "Industrial Manufacturing Success",
    titleAr: "نجاح التصنيع الصناعي",
    guestEn: "Eng. Fatima Al-Rashid",
    guestAr: "م. فاطمة الرشيد",
    roleEn: "Manufacturing Expert",
    roleAr: "خبيرة التصنيع",
    topicEn: "Industrial Growth",
    topicAr: "النمو الصناعي",
    durationEn: "22 mins",
    durationAr: "22 دقيقة",
    date: "2024-04-12",
    image: "🏭",
  },
  {
    id: 3,
    titleEn: "Tax Compliance Made Easy",
    titleAr: "الامتثال الضريبي سهل",
    guestEn: "Mr. Ahmed Al-Tamimi",
    guestAr: "أ. أحمد التميمي",
    roleEn: "Tax Advisor",
    roleAr: "مستشار ضريبي",
    topicEn: "Tax Strategy",
    topicAr: "استراتيجية ضريبية",
    durationEn: "20 mins",
    durationAr: "20 دقيقة",
    date: "2024-04-08",
    image: "📊",
  },
  {
    id: 4,
    titleEn: "Business Setup Journey",
    titleAr: "رحلة تأسيس الأعمال",
    guestEn: "Ms. Sarah Al-Qahtani",
    guestAr: "أ. سارة القحطاني",
    roleEn: "Business Consultant",
    roleAr: "مستشارة الأعمال",
    topicEn: "Company Setup",
    topicAr: "تأسيس الشركة",
    durationEn: "25 mins",
    durationAr: "25 دقيقة",
    date: "2024-04-02",
    image: "🎯",
  },
  {
    id: 5,
    titleEn: "Vision 2030 Opportunities",
    titleAr: "فرص رؤية 2030",
    guestEn: "Dr. Hassan Al-Khaldi",
    guestAr: "د. حسن الخالدي",
    roleEn: "Strategy Officer",
    roleAr: "ضابط الاستراتيجية",
    topicEn: "Vision Alignment",
    topicAr: "توافق الرؤية",
    durationEn: "28 mins",
    durationAr: "28 دقيقة",
    date: "2024-03-28",
    image: "🎬",
  },
  {
    id: 6,
    titleEn: "Investor Testimonials",
    titleAr: "شهادات المستثمرين",
    guestEn: "Multiple Investors",
    guestAr: "استثمارون متعددون",
    roleEn: "Business Leaders",
    roleAr: "قادة الأعمال",
    topicEn: "Success Stories",
    topicAr: "قصص النجاح",
    durationEn: "30 mins",
    durationAr: "30 دقيقة",
    date: "2024-03-22",
    image: "⭐",
  },
]

export function InterviewsContent() {
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
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {t("interviews.featured")}
              </span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("interviews.title")}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              {t("interviews.subtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Interviews Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {interviews.map((interview) => (
              <StaggerItem key={interview.id}>
                <motion.div
                  className="group h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all"
                  whileHover={{ y: -5 }}
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary to-accent h-48 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                    {interview.image}
                    <motion.div
                      className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        className="bg-white rounded-full p-3"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-6 h-6 text-primary fill-primary" />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {language === "ar" ? interview.topicAr : interview.topicEn}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {language === "ar" ? interview.durationAr : interview.durationEn}
                      </span>
                    </div>
                    
                    <h3 className={`text-lg font-bold text-foreground mb-3 line-clamp-2 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                      {language === "ar" ? interview.titleAr : interview.titleEn}
                    </h3>
                    
                    <div className={`mb-4 pb-4 border-b border-border ${dir === "rtl" ? "text-right" : "text-left"}`}>
                      <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        {language === "ar" ? interview.guestAr : interview.guestEn}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {language === "ar" ? interview.roleAr : interview.roleEn}
                      </p>
                    </div>
                    
                    <motion.button
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      {t("interviews.watch")}
                      <Arrow className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Interview Banner */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-4xl mx-auto">
            <div className="text-center text-primary-foreground">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {language === "ar" ? "أحدث المقابلات" : "Latest Interviews"}
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                {language === "ar" 
                  ? "شاهد أحدث المقابلات مع قادة الصناعة والخبراء في مجال الاستثمار السعودي"
                  : "Watch the latest interviews with industry leaders and experts in Saudi investment"
                }
              </p>
              <Button className="bg-white text-primary hover:bg-white/90">
                {language === "ar" ? "شاهد الكل" : "View All"}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
