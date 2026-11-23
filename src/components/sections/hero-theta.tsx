"use client";

import { useEffect, useRef } from "react";

type HeroThetaProps = {
  label: string;
};

export function HeroTheta({ label }: HeroThetaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pupilRef = useRef<SVGGElement>(null);
  const axisRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frame = 0;

    function trackCursor(event: PointerEvent) {
      const pupil = pupilRef.current;
      const axis = axisRef.current;
      if (!container || !pupil) return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const dx = (event.clientX - (rect.left + rect.width / 2)) / Math.max(rect.width / 2, 1);
        const dy = (event.clientY - (rect.top + rect.height / 2)) / Math.max(rect.height / 2, 1);
        const x = Math.max(-118, Math.min(118, dx * 118));
        const y = Math.max(-20, Math.min(20, dy * 20));

        pupil.setAttribute("transform", `translate(${256 + x} ${256 + y})`);
        axis?.setAttribute("transform", `translate(0 ${y})`);
      });
    }

    function resetCursor() {
      pupilRef.current?.setAttribute("transform", "translate(256 256)");
      axisRef.current?.setAttribute("transform", "translate(0 0)");
    }

    window.addEventListener("pointermove", trackCursor, { passive: true });
    window.addEventListener("pointerleave", resetCursor);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", trackCursor);
      window.removeEventListener("pointerleave", resetCursor);
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-portrait hidden md:block" aria-label={label}>
      <svg
        className="hero-theta"
        viewBox="0 0 512 512"
        fill="none"
        role="img"
        aria-label={label}
      >
        <g className="hero-theta-morph">
          <circle
            className="hero-theta-circle"
            cx="256"
            cy="256"
            r="176"
          />
          <path ref={axisRef} className="hero-theta-axis" d="M96 256H416" />
          <g ref={pupilRef} className="hero-theta-pupil" transform="translate(256 256)">
            <polygon points="0,-32 28,0 0,32 -28,0" />
          </g>
        </g>
      </svg>
    </div>
  );
}
