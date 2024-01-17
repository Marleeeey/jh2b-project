import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './NavBar/page';
import Backgrouund from './assets/wallpaperflare.com_wallpaper.jpg';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JH2B',
  description: 'Created by brahim El mliji',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <NavBar />
        </main>
        {children}
      </body>
    </html>
  )
}
