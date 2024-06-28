import cn from "classnames";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

const inter = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: `gowell.club - wellness for everyone`,
  description: `gowell.club is an AI powered wellness club that providing daily workout routines, meal plans, and mental health tips, a chat bot for your cravings and a community for your support. Lose weight wiht our dedicated AI wellness coach.`,
  openGraph: {
    images: ['/assets/homepage.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        {children}

      </body>
    </html>
  );
}
