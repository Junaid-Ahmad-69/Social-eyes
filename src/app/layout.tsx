import type {Metadata} from "next";
import {Overpass} from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const overpass = Overpass({weight: '400', subsets: ['latin']})

export const metadata: Metadata = {
    title: "Social Eye",
    description: "Social Eye",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={overpass.className}>
        <div className="sm:h-screen h-full mx-8 social_eye_wrapper">
            <div className="container mx-auto py-8">
                <Header/>
                <main>
                    {children}
                </main>
            </div>
        </div>
        </body>
        </html>
    );
}
