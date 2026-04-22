"use client"

import { ClientLayout } from "@/components/client-layout"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhySaudiSection } from "@/components/home/why-saudi-section"
import { VisionSection } from "@/components/home/vision-section"
import { PartnersSection } from "@/components/home/partners-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <ClientLayout>
      <HeroSection />
      <ServicesSection />
      <WhySaudiSection />
      <VisionSection />
      <PartnersSection />
      <CTASection />
    </ClientLayout>
  )
}
