import { Inter } from "next/font/google";
import "../common/style/globals.css";
import QueryProvider from "@/common/component/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Teaser - Store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider >{children}</QueryProvider>
      </body>
    </html>
  );
}
