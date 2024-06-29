"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";


export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  return (
    <div className="relative flex flex-col lg:flex-row justify-center" ref={ref}>
      <div className="w-fit text-center"
      style={{
        transform: isInView ? "none" : "translateY(75px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1s",
      }}>
        <div className="">
          <h1 className="text-2xl lg:text-4xl">About Me</h1>
        </div>
        <div className="max-w-[60ch] text-base-100">
          <p className="mb-4">
            Hi, I&apos;m Kai Verschuren, a 16-year-old{" "}
            <strong className="text-secondary">
              software development student
            </strong>{" "}
            at ROC Ter AA in the Netherlands.
          </p>
          <p className="mb-4">
            I&apos;m in my first year, aiming to become a{" "}
            <strong className="text-secondary">
              frontend/fullstack developer.
            </strong>
          </p>
          <p className="text-center">
            I&apos;m passionate about technology and eager to start my career in
            software development.
          </p>
        </div>
      </div>
    </div>
  );
}
