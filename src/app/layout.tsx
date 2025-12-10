import './styles/globals.css';
import type { Metadata } from 'next';
import { Domine, IBM_Plex_Mono } from 'next/font/google';

const serifFont = Domine({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const monoFont = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dhison P.',
  description: 'Excellence in tandem.',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f2e8' },
    { media: '(prefers-color-scheme: dark)', color: '#1f1f28' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serifFont.variable} ${monoFont.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
