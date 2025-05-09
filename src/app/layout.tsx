import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const notoSansKr = Noto_Sans_KR({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-kr'
})

export const metadata: Metadata = {
  title: '미돌이네 가족들 | La famille des chats de Midori',
  description: '미돌이, 미순이, 깐돌이, 깐순이의 고양이 가족 이야기 | L\'histoire de la famille des chats: Midori, Misuni, Kkandori, Kkansuni'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSansKr.variable}`}>
      <body>
        <nav className="main-nav">
          <div className="nav-content">
            <h1>미돌이네 고양이 가족</h1>
            <h2>La famille des chats de Midori</h2>
            <ul>
              <li><a href="/">홈 | Accueil</a></li>
              <li><a href="/gallery">갤러리 | Galerie</a></li>
              <li><a href="/guestbook">방명록 | Livre d'or</a></li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
        <footer>
          <p>연락처 | Contact: myrenai@gmail.com</p>
        </footer>
      </body>
    </html>
  )
}
