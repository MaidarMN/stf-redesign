import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: "STF.GOV.MN Redesign",
    description: "Prototype of the STF website redesign",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="mn">
            <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
                <Providers>
                    <Header />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
