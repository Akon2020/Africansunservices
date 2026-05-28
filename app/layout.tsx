import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-context'
import { LanguageProvider } from '@/lib/i18n/context'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AFRICA-SUN SERVICES SARL | Your Satisfaction, Our Priority',
  description: 'AFRICA-SUN SERVICES SARL - Votre partenaire de confiance en logistique, construction, agriculture, import-export et services environnementaux à travers l\'Afrique. Your trusted partner for sustainable multi-service solutions across Africa.',
  keywords: ['Africa Sun Services', 'logistics', 'construction', 'agriculture', 'import export', 'DRC', 'Lubumbashi', 'environmental services', 'consultancy'],
  authors: [{ name: 'Isaac Akonkwa' }],
  creator: 'Isaac Akonkwa',
  openGraph: {
    title: 'AFRICA-SUN SERVICES SARL | Your Satisfaction, Our Priority',
    description: 'Multi-Service Solutions for Sustainable Growth across Africa',
    url: 'https://africasunservices.org',
    siteName: 'AFRICA-SUN SERVICES SARL',
    locale: 'fr_CD',
    alternateLocale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AFRICA-SUN SERVICES SARL',
    description: 'Multi-Service Solutions for Sustainable Growth across Africa',
  },
  icons: {
    icon: [
      {
        url: "/logo1.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo1.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo1.jpg",
        type: "image/png",
      },
    ],
    apple: "/logo1.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0B1F3A' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}


/* import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-context'
import { LanguageProvider } from '@/lib/i18n/context'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://africasunservices.org'),

  title: {
    default: 'AFRICA-SUN SERVICES SARL | Your Satisfaction, Our Priority',
    template: '%s | AFRICA-SUN SERVICES SARL',
  },

  description:
    "AFRICA-SUN SERVICES SARL est votre partenaire de confiance en logistique, construction, agriculture, import-export, environnement, consultance et services multisectoriels en Afrique. Multi-Service Solutions for Sustainable Growth.",

  applicationName: 'AFRICA-SUN SERVICES SARL',

  referrer: 'origin-when-cross-origin',

  keywords: [
    'AFRICA-SUN SERVICES SARL',
    'Africa Sun Services',
    'A-S Services',
    'logistics company Africa',
    'construction company DRC',
    'agriculture services Africa',
    'import export Congo',
    'environmental services',
    'consultancy',
    'supply chain',
    'equipment leasing',
    'Lubumbashi',
    'Bukavu',
    'DRC',
    'Congo business',
    'African logistics',
    'African construction company',
    'multi service company',
    'transport and logistics',
    'industrial services',
    'agro-industry',
  ],

  authors: [
    {
      name: 'Isaac Akonkwa',
      url: 'https://isaacakonkwa.vercel.app',
    },
  ],

  creator: 'Isaac Akonkwa',
  publisher: 'AFRICA-SUN SERVICES SARL',

  category: 'Business',

  alternates: {
    canonical: '/',
    languages: {
      'fr-CD': '/fr',
      'en-US': '/en',
    },
  },

  openGraph: {
    type: 'website',
    locale: 'fr_CD',
    alternateLocale: ['en_US'],

    url: 'https://africasunservices.org',

    title: 'AFRICA-SUN SERVICES SARL | Your Satisfaction, Our Priority',

    description:
      'Votre partenaire de confiance en logistique, construction, agriculture, import-export et services stratégiques à travers l’Afrique.',

    siteName: 'AFRICA-SUN SERVICES SARL',

    countryName: 'Democratic Republic of Congo',

    images: [
      {
        url: '/logo1.jpg',
        width: 1200,
        height: 630,
        alt: 'AFRICA-SUN SERVICES SARL',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AFRICA-SUN SERVICES SARL',
    description:
      'Multi-Service Solutions for Sustainable Growth across Africa.',

    creator: '@akonizk',

    images: ['/logo1.jpg'],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo2.jpg', type: 'image/jpg' },
    ],

    shortcut: ['/logo1.jpg'],

    apple: [
      {
        url: '/logo1.jpg',
        sizes: '180x180',
      },
    ],
  },

  manifest: '/site.webmanifest',

  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'AFRICA-SUN SERVICES',
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  other: {
    'theme-color': '#0B1F3A',
    'color-scheme': 'dark light',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',

  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#0B1F3A',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#020617',
    },
  ],

  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',

    name: 'AFRICA-SUN SERVICES SARL',

    alternateName: 'A-S SERVICES SARL',

    url: 'https://africasunservices.org',

    logo: 'https://africasunservices.org/logo1.jpg',

    slogan: 'Your Satisfaction, Our Priority',

    description:
      'Entreprise multiservices spécialisée en logistique, construction, agriculture, import-export, environnement et consultance en Afrique.',

    foundingLocation: {
      '@type': 'Place',
      name: 'Lubumbashi, Democratic Republic of Congo',
    },

    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No 10 Avenue Nyota, Q/Golf-Plateau',
      addressLocality: 'Lubumbashi',
      addressRegion: 'Haut-Katanga',
      addressCountry: 'CD',
    },

    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+243810162265',
        contactType: 'customer service',
        areaServed: 'Africa',
        availableLanguage: ['French', 'English'],
      },
    ],

    sameAs: [
      'https://linkedin.com',
      'https://facebook.com',
    ],

    founder: {
      '@type': 'Person',
      name: 'AFRICA-SUN SERVICES SARL',
    },

    knowsAbout: [
      'Logistics',
      'Construction',
      'Agriculture',
      'Import Export',
      'Environmental Services',
      'Supply Chain',
      'Consultancy',
    ],
  }

  return (
    <html
      lang="fr"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
} */