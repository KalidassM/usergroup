import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Cohesity Usergroup',
  description: 'Your one-stop shop to engage with Cohesity users and data security and mgmt professionals around the world to learn best practices and tips.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <script type='text/javascript' src='https://usergroup.cohesity.com/wp-content/themes/cohesity_new/assets/scripts/jquery-3.4.1.js'></script>
        <script type='text/javascript' src='https://usergroup.cohesity.com/wp-content/themes/cohesity_new/dist/scripts/plugins.js'></script>
        <script type='text/javascript' src='https://usergroup.cohesity.com/wp-content/themes/cohesity_new/dist/scripts/main.js'></script>
        <Footer/>
      </body>
    </html>
  )
}
