import ClientOnly from './components/clientonly/ClientOnly'
import RegisterModal from './components/modals/registermodal/RegisterModal'
import NavBar from './components/navbar/NavBar'
import './globals.css'
import { Nunito } from 'next/font/google'
import LoginModal from './components/modals/loginmodal/LoginModal'
import ToastProvider from './providers/ToastProvider'
import getCurrentUser from './actions/getCurrentUser'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: '✈️ Vacation Homes &amp; Condo Rentals - Airbnb',
  description: 'Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider />
          <LoginModal />
          <RegisterModal />
          <NavBar currentUser={currentUser}/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
