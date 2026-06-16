import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from "@/lib/i18n"   // ✅ added
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ["arabic"],
  variable: '--font-arabic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'WenX Investment Services | Your Gateway to Saudi Investment',
  description:
    'Helping global companies establish and grow in Saudi Arabia. Company setup, investment registration, industrial localization, and business support services aligned with Vision 2030.',
  keywords: [
    'Saudi Arabia investment',
    'MISA registration',
    'company setup Saudi',
    'Vision 2030',
    'industrial localization',
    'foreign investment Saudi',
  ],
  authors: [{ name: 'WenX Investment Services' }],
  creator: 'WenX Investment Services',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: 'https://wenx.sa',
    siteName: 'WenX Investment Services',
    title: 'WenX Investment Services | Your Gateway to Saudi Investment',
    description:
      'Helping global companies establish and grow in Saudi Arabia with Vision 2030.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WenX Investment Services',
    description: 'Your Gateway to Investment & Localization in Saudi Arabia',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1f4f8f' },
    { media: '(prefers-color-scheme: dark)', color: '#13294b' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSansArabic.variable} bg-background`}
    >
      <body className="font-sans antialiased min-h-screen">

        {/* ✅ FIX: Wrap entire app */}
        <I18nProvider>
          {children}
        </I18nProvider>

        {/* Analytics only in production */}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
