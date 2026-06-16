"use client"

import { useMemo, useState } from "react"
import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"
import {
  Newspaper,
  Calendar,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  FloatingElement,
  AnimatedGradient,
} from "@/components/animations"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type MediaCategory = {
  slug: string
  labelEn: string
  labelAr: string
}

type Article = {
  id: number
  titleEn: string
  titleAr: string
  descEn: string
  descAr: string
  categorySlug: string
  date: string
  image: string
}

const featuredCategories: MediaCategory[] = [
  { slug: "investment", labelEn: "Investment", labelAr: "الاستثمار" },
  { slug: "manufacturing", labelEn: "Manufacturing", labelAr: "التصنيع" },
  { slug: "tax", labelEn: "Tax", labelAr: "الضرائب" },
  { slug: "setup", labelEn: "Setup", labelAr: "التأسيس" },
  { slug: "incentives", labelEn: "Incentives", labelAr: "الحوافز" },
  { slug: "strategy", labelEn: "Strategy", labelAr: "الاستراتيجية" },
]

const extendedCategories: MediaCategory[] = [
  { slug: "education-training", labelEn: "Education & Training", labelAr: "التعليم والتدريب" },
  { slug: "medical-pharma", labelEn: "Medical & Pharma", labelAr: "القطاع الطبي والدوائي" },
  { slug: "it-technology", labelEn: "IT & Technology", labelAr: "تقنية المعلومات والتكنولوجيا" },
  { slug: "banking-finance", labelEn: "Banking & Finance", labelAr: "البنوك والتمويل" },
  { slug: "business-services", labelEn: "Business Services", labelAr: "خدمات الأعمال" },
  { slug: "building-construction", labelEn: "Building & Construction", labelAr: "البناء والتشييد" },
  { slug: "science-research", labelEn: "Science & Research", labelAr: "العلوم والبحث" },
  { slug: "industrial-engineering", labelEn: "Industrial Engineering", labelAr: "الهندسة الصناعية" },
  { slug: "power-energy", labelEn: "Power & Energy", labelAr: "الطاقة والمرافق" },
  { slug: "wellness-health-fitness", labelEn: "Wellness, Health & Fitness", labelAr: "العافية والصحة واللياقة" },
  { slug: "entertainment-media", labelEn: "Entertainment & Media", labelAr: "الترفيه والإعلام" },
  { slug: "environment-waste", labelEn: "Environment & Waste", labelAr: "البيئة وإدارة النفايات" },
  { slug: "logistics-transportation", labelEn: "Logistics & Transportation", labelAr: "الخدمات اللوجستية والنقل" },
  { slug: "electric-electronics", labelEn: "Electric & Electronics", labelAr: "الكهرباء والإلكترونيات" },
  { slug: "agriculture-forestry", labelEn: "Agriculture & Forestry", labelAr: "الزراعة والغابات" },
  { slug: "food-beverages", labelEn: "Food & Beverages", labelAr: "الأغذية والمشروبات" },
  { slug: "security-defense", labelEn: "Security & Defense", labelAr: "الأمن والدفاع" },
  { slug: "auto-automotive", labelEn: "Auto & Automotive", labelAr: "السيارات والمركبات" },
  { slug: "travel-tourism", labelEn: "Travel & Tourism", labelAr: "السفر والسياحة" },
  { slug: "telecommunication", labelEn: "Telecommunication", labelAr: "الاتصالات" },
  { slug: "home-office", labelEn: "Home & Office", labelAr: "المنزل والمكتب" },
  { slug: "arts-crafts", labelEn: "Arts & Crafts", labelAr: "الفنون والأشغال اليدوية" },
  { slug: "fashion-beauty", labelEn: "Fashion & Beauty", labelAr: "الأزياء والجمال" },
  { slug: "animals-pets", labelEn: "Animals & Pets", labelAr: "الحيوانات الأليفة" },
  { slug: "baby-kids-maternity", labelEn: "Baby, Kids & Maternity", labelAr: "الأمومة والأطفال والرضع" },
  { slug: "hospitality", labelEn: "Hospitality", labelAr: "الضيافة" },
  { slug: "apparel-clothing", labelEn: "Apparel & Clothing", labelAr: "الملابس والأزياء" },
  { slug: "packing-packaging", labelEn: "Packing & Packaging", labelAr: "التعبئة والتغليف" },
  { slug: "miscellaneous", labelEn: "Miscellaneous", labelAr: "متنوعات" },
]

const categories = [...featuredCategories, ...extendedCategories]
const initiallyVisibleCategoryCount = 12

const articles: Article[] = [
  {
    id: 1,
    titleEn: "Investment Opportunities in Saudi Arabia 2024",
    titleAr: "فرص الاستثمار في المملكة العربية السعودية 2024",
    descEn: "Discover the latest investment opportunities in Saudi Arabia aligned with Vision 2030.",
    descAr: "اكتشف أحدث فرص الاستثمار في المملكة العربية السعودية بما يتوافق مع رؤية 2030.",
    categorySlug: "investment",
    date: "2024-04-15",
    image: "📊",
  },
  {
    id: 2,
    titleEn: "Industrial Localization Benefits",
    titleAr: "فوائد التوطين الصناعي",
    descEn: "Learn how industrial localization creates competitive advantages for your business.",
    descAr: "تعرّف على كيفية مساهمة التوطين الصناعي في تحقيق مزايا تنافسية لأعمالك.",
    categorySlug: "manufacturing",
    date: "2024-04-10",
    image: "🏭",
  },
  {
    id: 3,
    titleEn: "Tax Framework Overview",
    titleAr: "نظرة عامة على الإطار الضريبي",
    descEn: "A practical guide to understanding Saudi Arabia's tax system.",
    descAr: "دليل عملي لفهم النظام الضريبي في المملكة العربية السعودية.",
    categorySlug: "tax",
    date: "2024-04-05",
    image: "💰",
  },
  {
    id: 4,
    titleEn: "Company Setup Process Simplified",
    titleAr: "تبسيط إجراءات تأسيس الشركة",
    descEn: "A step-by-step look at establishing your business in Saudi Arabia.",
    descAr: "شرح خطوة بخطوة لتأسيس أعمالك في المملكة العربية السعودية.",
    categorySlug: "setup",
    date: "2024-03-28",
    image: "📋",
  },
  {
    id: 5,
    titleEn: "Government Incentives Explained",
    titleAr: "شرح الحوافز الحكومية",
    descEn: "Understand the incentive programs available to investors and businesses.",
    descAr: "تعرّف على برامج الحوافز المتاحة للمستثمرين والشركات.",
    categorySlug: "incentives",
    date: "2024-03-20",
    image: "🎁",
  },
  {
    id: 6,
    titleEn: "Vision 2030 Alignment Strategy",
    titleAr: "استراتيجية التوافق مع رؤية 2030",
    descEn: "See how your business strategy can align with Saudi Arabia's Vision 2030.",
    descAr: "اكتشف كيف يمكن مواءمة استراتيجية أعمالك مع رؤية المملكة 2030.",
    categorySlug: "strategy",
    date: "2024-03-15",
    image: "🎯",
  },
]

export function MediaContent() {
  const { t, language, dir } = useI18n()
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight
  const [activeCategory, setActiveCategory] = useState("all")
  const [showAllCategories, setShowAllCategories] = useState(false)

  const copy =
    language === "ar"
      ? {
          categoriesTitle: "الفئات",
          categoriesSubtitle: "تصفّح المحتوى حسب الفئة",
          allCategories: "جميع الفئات",
          showAll: "عرض جميع الفئات",
          showLess: "عرض عدد أقل",
          emptyTitle: "لا توجد مقالات في هذه الفئة حتى الآن",
          emptyBody: "يمكنك اختيار فئة أخرى أو عرض جميع المقالات.",
          stayUpdatedTitle: "هل ترغب في البقاء على اطلاع؟",
          stayUpdatedBody: "اشترك في نشرتنا البريدية للحصول على أحدث الرؤى والمقالات.",
          emailPlaceholder: "بريدك الإلكتروني",
          subscribe: "اشترك",
        }
      : {
          categoriesTitle: "Categories",
          categoriesSubtitle: "Browse content by category",
          allCategories: "All Categories",
          showAll: "Show all categories",
          showLess: "Show fewer",
          emptyTitle: "No articles in this category yet",
          emptyBody: "Try another category or switch back to all articles.",
          stayUpdatedTitle: "Want to Stay Updated?",
          stayUpdatedBody: "Subscribe to our newsletter for the latest news and articles.",
          emailPlaceholder: "Your email",
          subscribe: "Subscribe",
        }

  const categoryLabels = useMemo(
    () =>
      new Map(
        categories.map((category) => [
          category.slug,
          language === "ar" ? category.labelAr : category.labelEn,
        ]),
      ),
    [language],
  )

  const visibleCategories = useMemo(() => {
    if (showAllCategories) {
      return categories
    }

    const defaultCategories = categories.slice(0, initiallyVisibleCategoryCount)

    if (activeCategory === "all" || defaultCategories.some((category) => category.slug === activeCategory)) {
      return defaultCategories
    }

    const activeCategoryItem = categories.find((category) => category.slug === activeCategory)

    if (!activeCategoryItem) {
      return defaultCategories
    }

    return [...defaultCategories.slice(0, initiallyVisibleCategoryCount - 1), activeCategoryItem]
  }, [activeCategory, showAllCategories])

  const filteredArticles = useMemo(() => {
    if (activeCategory === "all") {
      return articles
    }

    return articles.filter((article) => article.categorySlug === activeCategory)
  }, [activeCategory])

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        <AnimatedGradient />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

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

        <div className="absolute inset-0 opacity-[0.03]">
          <motion.div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                               linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "60px 60px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
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
              <span className="text-sm font-medium text-primary">{t("media.articles")}</span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("media.title")}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">{t("media.subtitle")}</p>
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 lg:py-16 border-b border-border/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-6">
              <div className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${dir === "rtl" ? "sm:text-right" : "sm:text-left"}`}>
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">{copy.categoriesTitle}</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{copy.categoriesSubtitle}</h2>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() => setShowAllCategories((current) => !current)}
                >
                  {showAllCategories ? copy.showLess : copy.showAll}
                  {showAllCategories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className={cn(
                    "inline-flex min-h-10 items-center rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    activeCategory === "all"
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-background text-foreground hover:border-primary/30 hover:text-primary",
                  )}
                >
                  {copy.allCategories}
                </button>

                {visibleCategories.map((category) => (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => setActiveCategory(category.slug)}
                    className={cn(
                      "inline-flex min-h-10 items-center rounded-full border px-4 py-2 text-sm font-medium transition-all",
                      activeCategory === category.slug
                        ? "border-primary bg-primary text-primary-foreground shadow-sm"
                        : "border-border bg-background text-foreground hover:border-primary/30 hover:text-primary",
                    )}
                  >
                    {language === "ar" ? category.labelAr : category.labelEn}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          {filteredArticles.length > 0 ? (
            <StaggerContainer
              staggerDelay={0.1}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {filteredArticles.map((article) => (
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
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {categoryLabels.get(article.categorySlug)}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1 shrink-0">
                          <Calendar className="w-3 h-3" />
                          {new Date(article.date).toLocaleDateString(language === "ar" ? "ar-SA" : "en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      <h3 className={`text-lg font-bold text-foreground mb-2 line-clamp-2 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                        {language === "ar" ? article.titleAr : article.titleEn}
                      </h3>

                      <p className={`text-sm text-muted-foreground mb-4 line-clamp-2 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                        {language === "ar" ? article.descAr : article.descEn}
                      </p>

                      <motion.button
                        type="button"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
                        whileHover={{ x: dir === "rtl" ? -5 : 5 }}
                      >
                        {t("media.readmore")}
                        <Arrow className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card px-6 py-12 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">{copy.emptyTitle}</h3>
              <p className="text-muted-foreground mb-6">{copy.emptyBody}</p>
              <Button onClick={() => setActiveCategory("all")}>{copy.allCategories}</Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{copy.stayUpdatedTitle}</h2>
            <p className="text-lg text-muted-foreground mb-8">{copy.stayUpdatedBody}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder={copy.emailPlaceholder}
                className="px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary min-w-80"
              />
              <Button className="bg-primary hover:bg-primary/90">{copy.subscribe}</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
