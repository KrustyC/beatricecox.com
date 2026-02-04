import { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import Script from "next/script";
import { Organization, WithContext } from "schema-dts";

import { ConditionalLayout } from "@/components/ConditionalLayout";
import { PreviewBadge } from "@/components/PreviewBadge";
import { env } from "@/lib/env";
import { bodoni, manrope } from "@/utils/fonts";

import "../globals.css";

export const metadata: Metadata = {
  title: "Beatrice Duguid Cox",
  description:
    "I specialize in Brand Strategy, Packaging, Digital Design, and Online Launches for the Food and Beverage Industry. My work is inspired by the intersection of design, art, and the diverse perspectives I encounter through travel.",
  metadataBase: new URL("https://beatricecox.com"),
  openGraph: {
    title: "Beatrice Duguid Cox",
    siteName: "Beatrice Duguid Cox",
    url: new URL("https://beatricecox.com"),
    images: [
      {
        url: `${env.NEXT_PUBLIC_BASE_URL}/images/beatricecox.png`,
        height: 569,
        width: 853,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
    other: [
      {
        url: "/icons/favicon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
      {
        url: "/icons/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/icons/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    shortcut: { url: "/icons/favicon-48x48.png", type: "image/png" },
  },
};

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const { isEnabled: isPreviewEnabled } = await draftMode();

  const jsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: env.NEXT_PUBLIC_BASE_URL,
    name: "Beatrice Duguid Cox",
    logo: "/icons/favicon-48x48.png",
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="website-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className={`${bodoni.variable} ${manrope.variable}`}>
        <ConditionalLayout>{children}</ConditionalLayout>

        {isPreviewEnabled && <PreviewBadge />}

        {env.NEXT_PUBLIC_ENVIRONMENT === "production" && (
          <>
            <GoogleAnalytics
              gaId={env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string}
            />

            <Analytics />

            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
