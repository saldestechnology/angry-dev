import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "$ANGRY - The Angriest Dev on Base",
  description: "Meet the angriest dev on Base! Constantly getting rekt, always the exit liquidity. Scammers blow up his DMs 24/7. He's mad as hell and not gonna take it anymore!",
  keywords: "angry dev, base blockchain, meme coin, cryptocurrency, angry, developer, base chain, defi",
  authors: [{ name: "Angry Dev" }],
  creator: "Angry Dev",
  publisher: "Angry Dev",
  icons: {
    icon: [],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://angrydev.base.org",
    title: "$ANGRY - The Angriest Dev on Base",
    description: "Meet the angriest dev on Base! Constantly getting rekt, always the exit liquidity. Pure anger fueled meme power at its best!",
    siteName: "$ANGRY DEV",
    images: [
      {
        url: "/images/angry_dev.jpg",
        width: 1200,
        height: 630,
        alt: "$ANGRY - The Angriest Dev on Base",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$ANGRY - The Angriest Dev on Base",
    description: "Meet the angriest dev on Base! Constantly getting rekt, always the exit liquidity. Pure anger fueled meme power!",
    images: ["/images/angry_dev.jpg"],
    creator: "@angrydev",
    site: "@angrydev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
