"use client";

import { useRef } from "react";

import { useInView } from "framer-motion";

export default function SkillCard(props: any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const Value = props.Progress;

    let Color;
    if (Value >= 50) {
        Color = "progress-secondary"
    } else {
        Color = "progress-primary"
    }
    return (
        <div className="flex-1 min-w-64" 
        ref={ref} 
        style={{
            transform: isInView ? "none" : "translateY(75px)",
            opacity: isInView ? 1 : 0,
            transition: "transform 1s, scale 0.3s",
        }}>
            <h2 className="font-semibold">
                {props.Title}
            </h2>
            <progress className={`progress ${Color}`} value={props.Progress} max="100"></progress>
        </div>
    )
}