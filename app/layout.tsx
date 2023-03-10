import { inter,fraunces,cormorant } from './fonts'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // set fonts globally
    <html lang="en" className={`${inter.className} ${fraunces.variable} ${cormorant.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
