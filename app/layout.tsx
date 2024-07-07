import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/css/style.css';
import '@/app/css/bootstrap.min.css';
import '@/app/lib/animate/animate.css';
import '@/app/lib/animate/animate.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shineup",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
