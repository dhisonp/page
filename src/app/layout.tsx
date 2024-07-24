import './styles/globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  weight: '300',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
});

const ibmPlexSerif = IBM_Plex_Serif({
  weight: '300',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-ibm-plex-serif',
});

export const metadata: Metadata = {
  title: 'Dhison P.',
  description: 'Here you learn more about me and what I do.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
