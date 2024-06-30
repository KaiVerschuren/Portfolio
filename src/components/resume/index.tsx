import Hero from "./hero";
import Profile from "./profile";
import Skills from "./skills";
import Studies from "./studies";
import Work from "./work";
import Download from "./download";

export default function Resume() {
  return (
    <div className="relative">
      <section>
        <Hero />
      </section>
      <section>
        <Profile />
      </section>
      <section className="mt-16">
        <Skills />
      </section>
      <section className="mt-16">
        <Studies />
      </section>
      <section>
        <Work />
      </section>
      <section className="mt-16 pb-16">
      <Download />
      </section>
    </div>
  );
}
