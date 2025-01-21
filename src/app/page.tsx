import { Description } from "app/components/shared/home/Description";
import { Hero } from "app/components/shared/home/Hero";
import { MainProducts } from "app/components/shared/home/MainProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
