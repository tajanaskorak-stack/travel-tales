import type { Metadata } from "next";
import "./globals.css";
import Layout from "./components/Layout";

export const metadata: Metadata = {
  title: "Travel Tales - Nature Adventures & Stories",
  description: "Exploring the world's hidden gems through nature adventures and unforgettable journeys. Stories of mountains, forests, and cultural discoveries.",
  keywords: ["travel", "nature", "adventure", "photography", "stories", "mountains", "forests"],
  authors: [{ name: "Travel Tales" }],
  openGraph: {
    title: "Travel Tales - Nature Adventures & Stories",
    description: "Exploring the world's hidden gems through nature adventures and unforgettable journeys.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
