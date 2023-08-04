import "./globals.css";
import type { Metadata } from "next";
import {
    Barlow,
    // JetBrains_Mono,
    Source_Sans_3,
    Source_Serif_4,
} from "next/font/google";

const barlow = Barlow({
    weight: "300",
    display: "swap",
    subsets: ["latin"],
    variable: "--font-barlow",
});

const sourceSans = Source_Sans_3({
    weight: "300",
    display: "swap",
    subsets: ["latin"],
    variable: "--font-source-sans",
});

const sourceSerif = Source_Serif_4({
    weight: "300",
    display: "swap",
    subsets: ["latin"],
    variable: "--font-source-serif",
});

export const metadata: Metadata = {
    title: "Dhison Padma",
    description: "Here you learn more about me and what I do.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${barlow.variable} ${sourceSans.variable} ${sourceSerif.variable}`}
        >
            <body>{children}</body>
        </html>
    );
}
