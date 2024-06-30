"use client";

import { useRef } from "react";

import { useInView } from "framer-motion";

export default function Profile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold">Profesional Profile</h1>
      </div>
      <div className="text-center max-w-[60ch] mx-auto">
        <strong className="text-secondary font-bold"></strong>
        <p className="mb-4 text-base-100" ref={ref} style={{
          transform: isInView ? "none" : "translateY(75px)",
          opacity: isInView ? 1 : 0,
          transition: "transform 1s, scale 0.3s",
        }}>
          Dedicated ROC Ter AA student with a <strong className="text-secondary font-bold">strong ambition</strong> to work in the
          software field.
        </p>
        <div className="divider divider-secondary" style={{
          transform: isInView ? "none" : "translateY(75px)",
          opacity: isInView ? 1 : 0,
          transition: "transform 1s, scale 0.3s",
        }}></div>
        <p className="text-base-100" style={{
          transform: isInView ? "none" : "translateY(75px)",
          opacity: isInView ? 1 : 0,
          transition: "transform 1s, scale 0.3s",
        }}>
          Currently studying <strong className="text-secondary font-bold">Software Development at ROC Ter AA</strong>, I have built a
          solid foundation in computer technology through my hobbies. With a
          <strong className="text-secondary font-bold"> passion for programming</strong> and workplace skills developed through my
          interests, I am well-prepared to launch a career in this industry and
          <strong className="text-secondary font-bold"> contribute effectively.</strong>
        </p>
      </div>
    </div>
  );
}
