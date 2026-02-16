import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CyberSec Pro - Keamanan Siber Terdepan',
  description: 'Solusi keamanan siber profesional untuk melindungi aset digital Anda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
