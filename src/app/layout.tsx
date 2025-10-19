import './styles/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const primaryFont = localFont({
  src: [
    {
      path: '../../public/fonts/IosevkaFira-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IosevkaFira-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/IosevkaFira-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IosevkaFira-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/IosevkaFira-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IosevkaFira-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/IosevkaFira-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IosevkaFira-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
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
