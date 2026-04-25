"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  id: string;
  title: string;
  caption: string;
  image: string;
  tech: string;
};

const slides: Slide[] = [
  {
    id: "moodmaps",
    title: "MoodMaps",
    caption: "Real-time emotional mapping with geospatial insights.",
    image: "/projects/moodmaps-slide.svg",
    tech: "React + Leaflet + Node",
  },
  {
    id: "mysarah",
    title: "MySarah Platform",
    caption: "Corporate workflow platform with modular mini-CRM features.",
    image: "/projects/mysarah-slide.svg",
    tech: "React + Node + Cloudinary",
  },
  {
    id: "disaster-alert",
    title: "Disaster Alert",
    caption: "API + IoT integrated monitoring and rapid-response dashboards.",
    image: "/projects/disaster-slide.svg",
    tech: "MERN + IoT + Live APIs",
  },
];

const AUTO_MS = 4600;

export default function HeroProjectSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_MS);

    return () => window.clearInterval(timer);
  }, [paused]);

  const current = slides[index];
  const progress = useMemo(() => `${index + 1} / ${slides.length}`, [index]);

  return (
    <div
      className="relative rounded-2xl border border-white/12 bg-[#091326]/70 p-3 backdrop-blur"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mb-3 flex items-center justify-between px-1">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">Featured Builds</p>
        <p className="text-xs text-zinc-400">{progress}</p>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ x: 36, opacity: 0.45, scale: 0.98 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -34, opacity: 0.28, scale: 0.985 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority={index === 0}
                className="object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
        <h3 className="text-lg font-semibold text-zinc-100">{current.title}</h3>
        <p className="mt-1 text-sm text-zinc-300">{current.caption}</p>
        <p className="mt-3 text-xs uppercase tracking-wider text-cyan-200/85">{current.tech}</p>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setIndex(slideIndex)}
            aria-label={`Show ${slide.title}`}
            className={`h-2.5 rounded-full transition-all ${
              slideIndex === index ? "w-7 bg-cyan-300" : "w-2.5 bg-white/35 hover:bg-white/55"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
