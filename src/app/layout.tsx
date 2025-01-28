import { Roboto, Geist, Geist_Mono } from "next/font/google";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import 'app/sass/globals.sass';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robot = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin-ext"]

})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robot.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
