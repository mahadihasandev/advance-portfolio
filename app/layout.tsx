import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
export const metadata: Metadata = {
  metadataBase: new URL('https://mahadi-hasan-portfolio.sappybass16384.chatgpt.site'),
  title: "Mahadi Hasan — React Native & Full-Stack Developer",
  description:
    "Mahadi Hasan builds thoughtful mobile and web applications. React Native developer at Smart Software Ltd, Bangladesh. Explore mobile apps, HRM, commerce, and full-stack projects.",
  icons: { icon: "/assets/favicon.jpg" },
  openGraph: {
    title: "Mahadi Hasan — Mobile & Web Developer",
    description:
      "Thoughtful interfaces. Practical engineering. Explore my selected work.",
    images: ["/assets/favicon.jpg"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
