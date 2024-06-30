"use client";

import { useRef } from "react";

import { useInView } from "framer-motion";

export default function Work() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="max-w-lg mx-auto">
            <h1 className="text-4xl text-center font-extrabold mb-4">Work Experience</h1>
            <div className="bg-base-300 px-4 py-2 border border-base-200 rounded-lg shadow-md flex flex-col gap-2" 
            ref={ref} 
            style={{
                transform: isInView ? "none" : "translateY(75px)",
                opacity: isInView ? 1 : 0,
                transition: "transform 1s, scale 0.3s",
            }}
            >
                <div>
                    <div className="flex flex-wrap justify-between items-center">
                        <h2 className="text-lg lg:text-xl font-bold">
                            Shelf Stocker
                        </h2>
                        <h3 className="text-base-200 text-base font-semibold">Feb 2023 - Present</h3>
                    </div>
                    <span className="text-base-200">Jumbo Supermarkten, Bakel</span>
                </div>
                <p className="text-base-100 text-sm lg:text-base">As a shelf stocker, I ensure that the shelves are full, I check leftovers and I help customers.</p>
            </div>
        </div>
    )
}