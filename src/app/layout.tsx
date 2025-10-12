import './styles/globals.css';
import type { Metadata } from 'next';
import { Victor_Mono } from 'next/font/google';

const primaryFont = Victor_Mono({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dhison P.',
  description: 'Excellence in tandem.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${primaryFont.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
