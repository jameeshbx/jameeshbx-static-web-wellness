import type { Metadata } from 'next';
import { Red_Hat_Text } from 'next/font/google';
import './globals.css';
import Header from "./components/Header"
import Footer from './components/Footer';

const redHat = Red_Hat_Text({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-red',
});

export const metadata: Metadata = {
  title: "Next 15",
  description: 'Starter project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Add suppressHydrationWarning to <html> to prevent warnings from next-themes updates; it only affects the <html> element.
  return (
    <html
      lang='en'
      suppressHydrationWarning>
      <body className={redHat.className}>
          <Header/>
          {children}
      </body>
    </html>
  );
}
