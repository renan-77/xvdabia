import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'XV da Bia',
  description: 'Sugestões de Presentes',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
