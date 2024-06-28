import Coincove from "@/assets/img/coincove.png";
import Portfolio from "@/assets/img/portfolio.png";

import Card from "./card";

export default function Work() {
  return (
    <div className="relative">
      <div className="text-center mb-8">
        <h1 className="text-2xl lg:text-4xl font-bold">My Work</h1>
      </div>
      <div className="flex flex-col gap-4 flex-wrap lg:flex-row lg:justify-center max-w-[100rem] mx-auto">
        <Card
          Title="This Portfolio"
          Content="This is the first project I've made outside of school projects.
              For this project I've used many techniques I haven't used before."
          Badge1="NextJs"
          Badge2="Tailwind"
          Badge3="Framer Motion"
          Image={Portfolio}
        />
        <Card
          Title="Coin Cove"
          Content="Coin Cove is a crypto site that my team and I made for our final project in year 1."
          Badge1="Html and css"
          Badge2="PHP"
          Badge3="MySql"
          Image={Coincove}
        />
      </div>
    </div>
  );
}
