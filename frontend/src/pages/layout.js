import { Html, Head, Main, NextScript } from "next/document";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: ' Dash tried Project-5',
  description: 'Next.js'
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={inter.className}>{children}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
