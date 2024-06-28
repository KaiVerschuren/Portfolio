"use client";

import { useInView } from "framer-motion";

import React, { useRef } from "react";
import Image from "next/image";

export default function Card (props: any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div
          className="bg-base-300 border border-base-200 rounded-lg w-[80%] md:max-w-2xl flex flex-col lg:flex-row lg: gap-4
       mx-auto px-4 py-2 overflow-hidden shadow-xl"
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "transform 1s",
          }}
          ref={ref}
        >
          <div className="md:flex-1">
            <h1 className="text-xl font-bold">{props.Title}</h1>
            <p className="text-base-100">
              {props.Content}
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="badge badge-primary">{props.Badge1}</div>
              <div className="badge badge-secondary">{props.Badge2}</div>
              <div className="badge badge-primary">{props.Badge3}</div>
            </div>
          </div>
          <div className="md:flex-1">
            <Image
              src={props.Image}
              alt="Image of Coin Cove"
              className="rounded-lg"
            />
          </div>
        </div>
    );
}