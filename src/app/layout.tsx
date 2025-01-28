import { Roboto, Geist, Geist_Mono } from "next/font/google";
import { Hero } from "app/components/home/Hero";
import { Description } from "app/components/home/Description";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import 'app/sass/globals.sass';

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
        <Hero />
        <Description />
        {children}
        <Footer />
      </body>
    </html>
  );
}
