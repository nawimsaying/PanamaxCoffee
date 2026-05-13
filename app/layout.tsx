import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { AnchorHandler } from "./anchor-handler";

const mazzardBold = localFont({
    src: "../public/fonts/MazzardM-Bold.ttf",
    variable: "--font-mazzard-bold",
    display: "swap",
});

const mazzardMedium = localFont({
    src: "../public/fonts/MazzardM-Medium.ttf",
    variable: "--font-mazzard-medium",
    display: "swap",
});

const mazzardSemibold = localFont({
    src: "../public/fonts/MazzardM-SemiBold.ttf",
    variable: "--font-mazzard-semibold",
    display: "swap",
});

const mazzardRegular = localFont({
    src: "../public/fonts/MazzardL-Regular.ttf",
    variable: "--font-mazzard-regular",
    display: "swap",
});

const instabread = localFont({
    src: "../public/fonts/InstabreadRegular.ttf",
    variable: "--font-instabread",
    display: "swap",
});

const ptMono = localFont({
    src: "../public/fonts/PTMono-Regular.ttf",
    variable: "--font-ptmono",
    display: "swap",
});

const delaGothic = localFont({
    src: "../public/fonts/DelaGothicOne-Regular.ttf",
    variable: "--font-dela",
    display: "swap",
});

const jura = localFont({
    src: "../public/fonts/Jura-VariableFont_wght.ttf",
    variable: "--font-jura",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Panamax",
    description:
        "Panamax — кофейня, магазин кофе и обжарка в Волгограде",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ru"
            className={`
                ${mazzardBold.variable}
                ${mazzardMedium.variable}
                ${mazzardSemibold.variable}
                ${mazzardRegular.variable}
                ${instabread.variable}
                ${ptMono.variable}
                ${delaGothic.variable}
                ${jura.variable}
                h-full
                antialiased
            `}
        >
            <body className="min-h-full flex flex-col bg-[#f7f5f2] text-slate-900">
                <AnchorHandler />
                {children}
            </body>
        </html>
    );
}