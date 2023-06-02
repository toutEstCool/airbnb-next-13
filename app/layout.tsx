import ClientOnly from './components/clientonly/ClientOnly'
import Modal from './components/modals/Modal'
import NavBar from './components/navbar/NavBar'
import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: '✈️ Vacation Homes &amp; Condo Rentals - Airbnb',
  description: 'Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal actionLabel='Submit' title='Hello world' isOpen />
          <NavBar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
