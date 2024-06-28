import Blur from "@/components/background-blur";

import Resume from "@/components/resume/";

export default function Page() {
  return (
    <div className="bg-base-300">
      <Blur />
      <section className="">
        <Resume />
      </section>
    </div>
  );
}
