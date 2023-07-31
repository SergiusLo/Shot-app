import "./globals.css";

import Footer from "@/components/Footer";
import Navigationbar from "@/components/Navigationbar";

export const metadata = {
  title: "Shot-app",
  description: "Showcase and discover remarable developer projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* @ts-expect-error Async Server Component */}
        <Navigationbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
