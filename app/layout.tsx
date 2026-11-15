import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const themeScript = `(() => {
  try {
    const savedTheme = localStorage.getItem("shalom-portfolio-theme");
    const preferredTheme = "dark";
    const theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : preferredTheme;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.style.colorScheme = "dark";
  }
})();`;

const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";
const githubPagesUrl = (
  process.env.PAGES_SITE_URL || "https://shruba256.github.io/cyber-portfolio"
).replace(/\/+$/, "");
const isCloudflarePages = Boolean(
  process.env.CF_PAGES || process.env.CLOUDFLARE_PAGES,
);
const isCloudflareWorkers = Boolean(process.env.CLOUDFLARE_WORKERS);
const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const vercelSiteUrl =
  process.env.VERCEL && vercelHost ? `https://${vercelHost}` : null;
const siteUrl = pagesBasePath
  ? githubPagesUrl
  : vercelSiteUrl ?? (isCloudflareWorkers
    ? "https://portfolio.shalommuhoozi-cyber.workers.dev"
    : isCloudflarePages
      ? "https://shalom-cyber-portfolio.pages.dev"
      : "https://shalom-rubaramira-cyber.shalommuhoozi.chatgpt.site");
const canonicalUrl =
  !pagesBasePath && vercelSiteUrl ? `${vercelSiteUrl}/` : `${githubPagesUrl}/`;
const enableVercelInsights =
  process.env.VERCEL === "1" && process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shalom Rubaramira | Cybersecurity Portfolio",
  description:
    "Cybersecurity portfolio of Shalom Rubaramira, a Monash IT student focused on secure networks, risk assessment and clear technical communication.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Shalom Rubaramira | Secure systems. Clear thinking.",
    description:
      "Network security, risk assessment and evidence-led technical delivery.",
    type: "website",
    url: canonicalUrl,
    images: [{ url: `${siteUrl}/og.png` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shalom Rubaramira | Cybersecurity Portfolio",
    description: "Secure systems. Clear thinking.",
    images: [`${siteUrl}/og.png`],
  },
  icons: {
    icon: [
      {
        url: `${siteUrl}/favicon.ico?v=s-mark-20261115`,
        sizes: "16x16 32x32 48x48",
        type: "image/x-icon",
      },
      {
        url: `${siteUrl}/favicon.svg?v=s-mark-20261115`,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    apple: [{ url: `${siteUrl}/apple-touch-icon.png?v=s-mark-20261115`, sizes: "180x180" }],
  },
  authors: [{ name: "Shalom Rubaramira" }],
  creator: "Shalom Rubaramira",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        {enableVercelInsights && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
