import type { Metadata } from 'next';
import { Red_Hat_Text } from 'next/font/google';
import './globals.css';

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
          {children}
      </body>
    </html>
  );
}
