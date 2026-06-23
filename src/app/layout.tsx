import type { Metadata } from "next";
import "@fontsource/playfair-display";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";

const siteUrl = "https://frespresso-cafe.vercel.app";
const siteName = "Frespresso Cafe | Vapi, Gujarat";   
const description =
  "Premium cafe in Vapi serving coffee, shakes, sandwiches, tea, snacks and birthday celebration arrangements.";
const keywords = [
  "cafe vapi",
  "coffee vapi",
  "frespresso",
  "frespresso cafe",
  "frespresso vapi",
  "birthday celebration vapi",
  "best cafe in vapi",
  "vapi east cafe",
];

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | Frespresso Cafe`,
  },
  description,
  keywords,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description,
    url: siteUrl,
    siteName: "Frespresso Cafe",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frespresso Cafe - Vapi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/og-image.jpg"],
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
  
  category: "cafe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Suppress Chrome Extension errors in Next.js Development overlay */}
        {process.env.NODE_ENV === "development" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('error', (event) => {
                  if (event.filename && (event.filename.includes('chrome-extension') || event.filename.includes('extension'))) {
                    event.stopImmediatePropagation();
                  }
                }, true);
                window.addEventListener('unhandledrejection', (event) => {
                  const stack = event.reason && event.reason.stack;
                  if (stack && (stack.includes('chrome-extension') || stack.includes('extension'))) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                  }
                }, true);
              `,
            }}
          />
        )}
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: "Frespresso Cafe",
              description,
              url: siteUrl,
              telephone: "+91 98765 43210",
              email: "hello@frespressocafe.com",
              image: `${siteUrl}/og-image.jpg`,
              address: {
                "@type": "PostalAddress",
                streetAddress: "1008, Laddak, Vapi East, Sonorous",
                addressLocality: "Vapi",
                addressRegion: "Gujarat",
                postalCode: "396191",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 20.3710462,
                longitude: 72.9174906,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "10:00",
                  closes: "22:30",
                },
              ],
              servesCuisine: [
                "Coffee",
                "Tea",
                "Shakes",
                "Sandwiches",
                "Snacks",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.1",
                bestRating: "5",
                ratingCount: "127",
              },
              priceRange: "₹1 – ₹1000",
              areaServed: { "@type": "City", name: "Vapi" },
              hasMenu: `${siteUrl}/#menu`,
              acceptsReservations: "true",
              paymentAccepted: ["Cash", "UPI", "Credit Card"],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <main id="main-content" role="main">
          {children}
        </main>
      </body>
    </html>
  );
}
