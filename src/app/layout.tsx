import './styles/globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';

const primaryFont = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-primary',
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
    <html lang="en" className={`${primaryFont.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
