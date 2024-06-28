import Hero from "@/components/hero/Hero";
import About from "@/components/about/about";
import Offerings from "@/components/offerings/offerings";
import Work from "@/components/work/";

import Blur from "@/components/background-blur";

export default function Home() {
  return (
    <div className="bg-base-300">
      <Blur />
      <section>
        <Hero />
      </section>
      <section className="">
        <About />
      </section>
      <section className="mt-24">
        <Offerings />
      </section>
      <section className="mt-32 pb-24">
        <Work />
      </section>
    </div>
  );
}
