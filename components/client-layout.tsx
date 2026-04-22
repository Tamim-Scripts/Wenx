"use client"

import { useI18n } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { dir } = useI18n()

  return (
    <div dir={dir} className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return <LayoutContent>{children}</LayoutContent>
}
