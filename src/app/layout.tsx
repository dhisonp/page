import './styles/globals.css';
import type { Metadata } from 'next';
import { Atkinson_Hyperlegible_Next } from 'next/font/google';
import localFont from 'next/font/local';

// Variable weight axis (200-800). Drives both --font-sans and --font-serif;
// globals.css aliases the serif slot to this same face.
const sansFont = Atkinson_Hyperlegible_Next({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  style: ['normal', 'italic'],
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
});

// Go Mono ships only 400 and 700. Mono rules in globals.css are pinned to
// those two weights so nothing falls back to synthetic bolding.
const monoFont = localFont({
  src: [
    { path: '../../public/fonts/Go-Mono.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Go-Mono-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../../public/fonts/Go-Mono-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/Go-Mono-Bold-Italic.woff2', weight: '700', style: 'italic' },
  ],
  variable: '--font-mono',
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
});

export const metadata: Metadata = {
  title: 'Dhison P.',
  description: 'Excellence in tandem.',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
