"use client";

import { useEffect, useRef } from "react";

type HeroThetaProps = {
  label: string;
};

export function HeroTheta({ label }: HeroThetaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pupilRef = useRef<SVGGElement>(null);
  const pupilShapeRef = useRef<SVGGElement>(null);
  const axisRef = useRef<SVGPathElement>(null);
  const waveRef = useRef<SVGCircleElement>(null);
  const blinkRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const portrait = containerRef.current;
    if (!portrait) return;

    let frame = 0;
    let blinkTimer = 0;
    let lastActive = performance.now();
    let nearSince = 0;
    let curious = false;
    let sleeping = false;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function wake() {
      if (!sleeping) return;
      sleeping = false;
      portrait?.classList.remove("is-sleeping");
    }

    function scheduleBlink() {
      const delay = 2600 + Math.random() * 3600;
      blinkTimer = window.setTimeout(() => {
        blink();
        scheduleBlink();
      }, delay);
    }

    function blink() {
      const blink = blinkRef.current;
      if (!blink || reducedMotion || sleeping) return;

      blink.classList.remove("is-blinking");
      void blink.getBoundingClientRect();
      blink.classList.add("is-blinking");
      window.setTimeout(() => blink.classList.remove("is-blinking"), 190);
    }

    function trackCursor(event: PointerEvent) {
      const rect = portrait?.getBoundingClientRect();
      if (!rect) return;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (event.clientX - centerX) / Math.max(rect.width / 2, 1);
      const dy = (event.clientY - centerY) / Math.max(rect.height / 2, 1);
      const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY);

      targetX = Math.max(-118, Math.min(118, dx * 118));
      targetY = Math.max(-20, Math.min(20, dy * 20));

      if (distance < 170) {
        if (!nearSince) nearSince = performance.now();
        curious = performance.now() - nearSince > 900;
      } else {
        nearSince = 0;
        curious = false;
      }

      lastActive = performance.now();
      wake();
    }

    function resetCursor() {
      targetX = 0;
      targetY = 0;
      nearSince = 0;
      curious = false;
      lastActive = performance.now();
      wake();
    }

    function react() {
      const pupilShape = pupilShapeRef.current;
      const wave = waveRef.current;
      if (!pupilShape || !wave) return;

      wake();
      lastActive = performance.now();

      pupilShape.classList.remove("is-reacting");
      void pupilShape.getBoundingClientRect();
      pupilShape.classList.add("is-reacting");
      window.setTimeout(() => pupilShape.classList.remove("is-reacting"), 280);

      wave.setAttribute("cx", String(256 + currentX));
      wave.setAttribute("cy", String(256 + currentY));
      wave.classList.remove("is-reacting");
      void wave.getBoundingClientRect();
      wave.classList.add("is-reacting");
      window.setTimeout(() => wave.classList.remove("is-reacting"), 650);
    }

    function animate() {
      const now = performance.now();
      const inactive = now - lastActive;

      if (inactive > 6500 && !sleeping) {
        sleeping = true;
        portrait?.classList.add("is-sleeping");
        blinkRef.current?.classList.remove("is-blinking");
        targetX = 0;
        targetY = 0;
      }

      let easedX = targetX;
      let easedY = targetY;

      if (curious && !sleeping) {
        easedX += Math.max(-7, Math.min(7, targetX * 0.08));
        easedY += Math.max(-4, Math.min(4, targetY * 0.08));
      }

      const easing = reducedMotion ? 1 : 0.115;
      currentX += (easedX - currentX) * easing;
      currentY += (easedY - currentY) * easing;

      if (Math.abs(easedX - currentX) < 0.05) currentX = easedX;
      if (Math.abs(easedY - currentY) < 0.05) currentY = easedY;

      pupilRef.current?.setAttribute(
        "transform",
        `translate(${256 + currentX} ${256 + currentY})`,
      );
      axisRef.current?.setAttribute("transform", `translate(0 ${currentY})`);

      frame = requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", trackCursor, { passive: true });
    window.addEventListener("pointerleave", resetCursor);
    portrait.addEventListener("pointerdown", react);
    scheduleBlink();
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(blinkTimer);
      window.removeEventListener("pointermove", trackCursor);
      window.removeEventListener("pointerleave", resetCursor);
      portrait.removeEventListener("pointerdown", react);
      portrait.classList.remove("is-sleeping");
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
        <g ref={blinkRef} className="hero-theta-blink">
          <g className="hero-theta-morph">
            <circle
              className="hero-theta-circle"
              cx="256"
              cy="256"
              r="176"
            />
            <path ref={axisRef} className="hero-theta-axis" d="M96 256H416" />
            <g ref={pupilRef} className="hero-theta-pupil" transform="translate(256 256)">
              <g ref={pupilShapeRef}>
                <polygon points="0,-32 28,0 0,32 -28,0" />
              </g>
            </g>
            <circle ref={waveRef} className="hero-theta-wave" cx="256" cy="256" r="32" />
          </g>
        </g>
      </svg>
    </div>
  );
}
