import Hero from "./hero";
import Profile from "./profile";
import Core from "./coreskills";
import Studies from "./studies";

export default function Resume() {
  return (
    <div className="relative">
      <section>
        <Hero />
      </section>
      <section className="">
        <Profile />
      </section>
      <section className="mt-16">
        <Core />
      </section>
      <section className="mt-16">
        <Studies />
      </section>
    </div>
  );
}