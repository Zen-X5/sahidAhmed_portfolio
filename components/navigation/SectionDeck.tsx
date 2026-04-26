"use client";

import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./Navbar";
import TechBackdrop from "@/components/visuals/TechBackdrop";

type DeckSection = {
  id: string;
  label: string;
  content: ReactNode;
};

type SectionDeckProps = {
  sections: DeckSection[];
};

const ANIMATION_MS = 700;
const DECK_NAVIGATE_EVENT = "deck:navigate";

export default function SectionDeck({ sections }: SectionDeckProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const animateToRef = useRef<(nextIndex: number) => void>(() => {});

  const activeSection = sections[activeIndex];
  const incomingSection = incomingIndex !== null ? sections[incomingIndex] : null;

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < sections.length - 1;

  const animateTo = useCallback((nextIndex: number) => {
    if (isAnimating || nextIndex < 0 || nextIndex >= sections.length || nextIndex === activeIndex) {
      return;
    }

    setDirection(nextIndex > activeIndex ? 1 : -1);
    setIncomingIndex(nextIndex);
    setIsAnimating(true);

    window.setTimeout(() => {
      setActiveIndex(nextIndex);
      setIncomingIndex(null);
      setIsAnimating(false);
    }, ANIMATION_MS);
  }, [activeIndex, isAnimating, sections.length]);

  const goPrev = useCallback(() => animateTo(activeIndex - 1), [activeIndex, animateTo]);
  const goNext = useCallback(() => animateTo(activeIndex + 1), [activeIndex, animateTo]);

  useEffect(() => {
    animateToRef.current = animateTo;
  }, [animateTo]);

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<{ sectionId?: string }>;
      const sectionId = customEvent.detail?.sectionId;

      if (!sectionId) {
        return;
      }

      const nextIndex = sections.findIndex((section) => section.id === sectionId);
      animateTo(nextIndex);
    };

    window.addEventListener(DECK_NAVIGATE_EVENT, handler);
    return () => window.removeEventListener(DECK_NAVIGATE_EVENT, handler);
  }, [animateTo, sections]);

  useEffect(() => {
    const handleHashNavigation = () => {
      const sectionId = window.location.hash.replace("#", "");

      if (!sectionId) {
        return;
      }

      const nextIndex = sections.findIndex((section) => section.id === sectionId);
      animateToRef.current(nextIndex);
    };

    handleHashNavigation();
    window.addEventListener("hashchange", handleHashNavigation);
    return () => window.removeEventListener("hashchange", handleHashNavigation);
  }, [sections]);

  useEffect(() => {
    const nextHash = `#${activeSection.id}`;

    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
    }
  }, [activeSection.id]);

  const activePanelClass = useMemo(() => {
    if (!isAnimating) {
      return "deck-panel";
    }

    return direction === 1 ? "deck-panel deck-leave-to-left" : "deck-panel deck-leave-to-right";
  }, [direction, isAnimating]);

  const incomingPanelClass = useMemo(() => {
    if (!isAnimating || incomingIndex === null) {
      return "deck-panel";
    }

    return direction === 1 ? "deck-panel deck-enter-from-right" : "deck-panel deck-enter-from-left";
  }, [direction, incomingIndex, isAnimating]);

  return (
    <div
      className="deck-perspective relative h-screen overflow-hidden"
    >
      <TechBackdrop />

      <Navbar
        activeSectionId={activeSection.id}
        onNavigateSection={(sectionId) => {
          const nextIndex = sections.findIndex((section) => section.id === sectionId);
          animateTo(nextIndex);
        }}
      />

      <div className="deck-globe-sheen" aria-hidden="true" />

      <div className="pointer-events-none absolute left-0 right-0 top-16 z-40 flex justify-center px-4 sm:top-20">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#090f22]/75 px-4 py-2 backdrop-blur">
          <span className="text-xs text-zinc-500">
            {activeIndex + 1}/{sections.length}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={goPrev}
        disabled={!canGoPrev || isAnimating}
        className="absolute left-3 top-1/2 z-40 -translate-y-1/2 rounded-full border border-white/15 bg-[#090f22]/75 px-4 py-3 text-xl text-zinc-100 backdrop-blur transition hover:border-cyan-300/60 hover:text-cyan-200 disabled:cursor-not-allowed disabled:opacity-30 sm:left-5"
        aria-label="Go to previous section"
      >
        ←
      </button>

      <button
        type="button"
        onClick={goNext}
        disabled={!canGoNext || isAnimating}
        className="absolute right-3 top-1/2 z-40 -translate-y-1/2 rounded-full border border-white/15 bg-[#090f22]/75 px-4 py-3 text-xl text-zinc-100 backdrop-blur transition hover:border-cyan-300/60 hover:text-cyan-200 disabled:cursor-not-allowed disabled:opacity-30 sm:right-5"
        aria-label="Go to next section"
      >
        →
      </button>

      <div className={activePanelClass} key={activeSection.id}>
        <div className="h-screen overflow-y-auto pt-14 sm:pt-16">{activeSection.content}</div>
      </div>

      {incomingSection ? (
        <div className={incomingPanelClass} key={incomingSection.id}>
          <div className="h-screen overflow-y-auto pt-14 sm:pt-16">{incomingSection.content}</div>
        </div>
      ) : null}
    </div>
  );
}
