import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bikeshop Starter",
  description:
    "Starter website for a bike shop built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <header className="bg-white shadow-md py-2 px-6 sticky top-0">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Image
            src="/logo/lb-apparel-logo.jpg"
            alt="LB Apparel Logo"
            width={80}
            height={50}
            className="object-contain"
          />
          <div className="flex gap-5 items-center">
            <nav className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Home
              </a>
              <a
                href="/collections"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Collections
              </a>
              <a
                href="/community"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Community
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                About Us
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <body className="h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth flex flex-col">
        {children}
      </body>
    </html>
  );
}
