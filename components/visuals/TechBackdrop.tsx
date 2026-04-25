"use client";

import { motion } from "framer-motion";

const winds = [
  { top: "10%", width: "130%", opacity: 0.18, duration: 18, delay: 0, drift: 28 },
  { top: "22%", width: "140%", opacity: 0.14, duration: 22, delay: 1.1, drift: -22 },
  { top: "36%", width: "125%", opacity: 0.12, duration: 20, delay: 0.6, drift: 18 },
  { top: "58%", width: "145%", opacity: 0.16, duration: 24, delay: 1.7, drift: -26 },
  { top: "74%", width: "135%", opacity: 0.11, duration: 26, delay: 0.3, drift: 14 },
];

export default function TechBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(8,145,178,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.05),transparent_28%),linear-gradient(180deg,rgba(3,7,18,0.16),rgba(3,7,18,0.92))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:84px_84px] opacity-[0.05]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />

      {winds.map((wind, index) => (
        <motion.div
          key={index}
          className="absolute left-[-20%] rounded-full blur-[1px]"
          style={{
            top: wind.top,
            width: wind.width,
            height: "2px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.08) 16%, rgba(34,211,238,0.55) 45%, rgba(255,255,255,0.15) 50%, rgba(59,130,246,0.45) 55%, rgba(34,211,238,0.08) 84%, transparent 100%)",
            boxShadow: "0 0 18px rgba(34,211,238,0.16)",
          }}
          initial={{ opacity: 0, x: -30 }}
          animate={{
            opacity: [0, wind.opacity, wind.opacity * 0.7, wind.opacity],
            x: [-60, wind.drift, 60],
            y: [0, index % 2 === 0 ? -8 : 8, 0],
            scaleX: [1, 1.05, 1],
          }}
          transition={{ duration: wind.duration, repeat: Infinity, ease: "easeInOut", delay: wind.delay }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(34,211,238,0.04)_18%,transparent_32%,transparent_68%,rgba(59,130,246,0.04)_84%,transparent_100%)] opacity-60 animate-[scanline_18s_linear_infinite]" />

      <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(3,7,18,0.84))]" />
    </div>
  );
}
