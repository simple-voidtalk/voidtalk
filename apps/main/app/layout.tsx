import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

import "@voidtalk/ui/globals.css";
import { Providers } from "@/components/providers";

const fontSans = Geist({
    subsets: ["latin"],
    variable: "--font-sans",
});

const fontMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}>
                <Providers>
                    {children}
                    <SpeedInsights/>
                    <Analytics/>
                </Providers>
            </body>
        </html>
    );
}
