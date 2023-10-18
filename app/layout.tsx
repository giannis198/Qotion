import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qotion",
  description:
    "Versatile all-in-one workspace and productivity application that combines note-taking, task management, and collaboration features in a single platform.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/q-logo-dark.svg",
        href: "/q-logo-dark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/q-logo-white.svg",
        href: "/q-logo-white.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ConvexClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="qotion-theme"
            >
              {children}
            </ThemeProvider>
          </ConvexClientProvider>
        </body>
      </html>
    </>
  );
}
