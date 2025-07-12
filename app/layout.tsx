import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { CgProfile } from "react-icons/cg";

export const metadata: Metadata = {
  title: "Influencer Marketing Platform | later",
  description: "frontend clone of later.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.className} antialiased`}>
        <div className="bg-slate-100 hover:bg-gray-950 hover:text-gray-200 text-slate-900 p-1">
          <div className="max-w-6xl mx-auto flex justify-end cursor-pointer">
            <span className="text-base flex gap-1 items-center">
              <CgProfile />
              log in
            </span>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
