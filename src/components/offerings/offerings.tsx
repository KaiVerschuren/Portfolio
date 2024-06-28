"use client";

import React from "react";
import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import {
  FaceSmileIcon,
  PencilSquareIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";

interface CardProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  Title: string;
  Content: string;
}

const Offerings: React.FC = () => {
  return (
    <div className="relative" >
      <div className="text-2xl md:text-2xl lg:text-4xl text-center mb-6">
        <h1 className="inline">What I Have</h1>
        <div className="inline relative w-fit h-fit">
          <span className="text-secondary relative font-bold">
            {"  "}
            To Offer
            {"  "}
          </span>
        </div>
        <h1 className="inline">For You.</h1>
      </div>
      <div className="flex flex-wrap max-w-7xl mx-8 lg:mx-auto gap-4 lg:gap-6">
        <Card
          Icon={FaceSmileIcon}
          Title="User Experience Design"
          Content="Crafting products that provide meaningful and relevant experiences by focusing on usability, accessibility, and user satisfaction."
        />
        <Card
          Icon={PencilSquareIcon}
          Title="User Interface Design"
          Content="Designing user interfaces that deliver meaningful and relevant experiences by prioritizing intuitive navigation, accessibility, and visual appeal."
        />
        <Card
          Icon={ComputerDesktopIcon}
          Title="Responsive Web Design"
          Content="Designing responsive websites that dynamically adjust to diverse screen sizes and devices, ensuring consistent usability and accessibility."
        />
        <Card
          Icon={CodeBracketIcon}
          Title="Languages"
          Content="I'm skilled in PHP, SQL, JavaScript, and TypeScript, specializing in dynamic web applications and database management. I integrate front-end and back-end seamlessly to enhance user experiences."
        />
        <Card
          Icon={WrenchIcon}
          Title="Tools / Frameworks"
          Content="I have experience with the React and Next.js frameworks, both of which I enjoy pairing with Tailwind CSS for styling. I also use Figma for design and MySQL for databases."
        />
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ Icon, Title, Content }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  return (
    <motion.div
    ref={ref}
      className="flex-1 bg-base-300 w-64 xs:min-w-80 rounded-lg border-[1px] border-base-200 px-4 py-3 shadow-xl"
      style={{
        transform: isInView ? "none" : "translateY(75px)",
        opacity: isInView ? 1 : 0,
        transition: "transform 1s, scale 0.3s",
      }}
      
    >
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-md lg:text-xl font-bold leading-5">{Title}</h1>
        <div className="w-fit bg-base-200 bg-opacity-30 rounded-xl">
          <Icon className="size-12 p-2 stroke-base-100/90" />
        </div>
      </div>
      <div className="mt-2">
        <p className="text-base text-base-100">{Content}</p>
      </div>
    </motion.div>
  );
};

export default Offerings;
