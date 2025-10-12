import './styles/globals.css';
import type { Metadata } from 'next';
import { Victor_Mono } from 'next/font/google';

const sans = Victor_Mono({
  variable: '--font-victor-mono',
  subsets: ['latin'],
});

const mono = Victor_Mono({
  variable: '--font-victor-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dhison P.',
  description: 'Excellence in tandem.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
