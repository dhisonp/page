import './styles/globals.css';
import type { Metadata } from 'next';
import { Source_Sans_3, Source_Code_Pro } from 'next/font/google';

const sans = Source_Sans_3({
  variable: '--font-source-sans-3',
  subsets: ['latin'],
});

const mono = Source_Code_Pro({
  variable: '--font-source-code-pro',
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
