import { Analytics } from '@vercel/analytics/next'
import { Poppins } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins', display: 'swap' })

export const metadata: Metadata = {
  title: 'Bishop Dr Albert Chikuni | Building Peace Together',
  description: 'The personal portfolio of Bishop Dr Albert Chikuni — peacebuilder, interfaith leader, anti-corruption advocate and family champion in Zimbabwe.',
  generator: 'v0.app',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%2013.57.14-eAChF9mxrrj8TaYYgwAPZWGPePJ4un.jpeg',
    shortcut: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%2013.57.14-eAChF9mxrrj8TaYYgwAPZWGPePJ4un.jpeg',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%2013.57.14-eAChF9mxrrj8TaYYgwAPZWGPePJ4un.jpeg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f1e8',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${poppins.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
