import Image from "next/image";
import Placeholder from "@/assets/img/maurits.jpg";
import Link from "next/link";

export default function Hero() {

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse mt-[6rem] lg:mt-16">
        <Image
          src={Placeholder}
          alt="Placeholder"
          className="max-w-48 xs:max-w-64 lg:max-w-xs  rounded-lg shadow-xl"
          loading="lazy"
        />
        <div className="text-center lg:text-left">
          <div className="relative ">
            <h2 className="text-2xl font-extrabold text-base-100"
            >
              Hi, i&apos;m Kai
            </h2>
            <h1 className="text-2xl font-black uppercase z-10 lg:text-4xl">
              <div className="relative w-fit mx-auto lg:mx-0">
                <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-primary via-secondary to-primary blur-[30px] opacity-50"></div>
                <span className="bg-gradient-to-r from-primary via-secondary to-primary text-transparent bg-clip-text backdrop-blur-lg relative whitespace-nowrap">
                  Frontend
                </span>
              </div>
              Web-Developer
            </h1>
          </div>
          <p className="py-6 text-base-100 max-w-[60ch]">
            A passionate{" "}
            <strong className="text-secondary font-bold">
              {" "}
              Frontend / Fullstack{" "}
            </strong>
            web developer and
            <strong className="text-secondary font-bold"> UI/UX </strong>
            enthusiast specialized in building stunning interactive
            websites/applications.
          </p>
          <Link
            href="mailto:verschurenkai@gmail.com"
            className="btn btn-primary btn-shadow"
          >
            Reach Out
          </Link>
        </div>
      </div>
    </div>
  );
}
