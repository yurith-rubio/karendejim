/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
// import { Abril_Fatface } from "next/font/google";
import { Layout } from "@/components";

// const abril_fatface = Abril_Fatface({
//   subsets: ["latin"],
//   weight: ["400"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Karen Delgado - Portfolio",
  description:
    "Graphic design and motion design portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
