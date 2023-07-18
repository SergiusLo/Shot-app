import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import "./global.css";

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
        <NavBar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
