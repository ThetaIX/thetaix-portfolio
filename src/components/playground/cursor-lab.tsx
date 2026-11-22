"use client";

import { useEffect, useState } from "react";
import type { PointerEvent } from "react";

type CursorLabProps = {
  labels: {
    enable: string;
    disable: string;
    reset: string;
    variants: string;
    dot: string;
    ring: string;
    cross: string;
    hoverZones: string;
    zoneOne: string;
    zoneTwo: string;
    zoneThree: string;
    touchState: string;
  };
};

type Variant = "dot" | "ring" | "cross";

export function CursorLab({ labels }: CursorLabProps) {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<Variant>("dot");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [touchDevice, setTouchDevice] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: none)");
    const update = () => setTouchDevice(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    if (!enabled || touchDevice) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    setVisible(true);
  }

  function reset() {
    setEnabled(false);
    setVariant("dot");
    setVisible(false);
  }

  return (
    <div className="experiment-layout cursor-layout">
      <div className="experiment-controls">
        <button
          className="experiment-primary"
          type="button"
          aria-pressed={enabled}
          onClick={() => setEnabled((current) => !current)}
        >
          {enabled ? labels.disable : labels.enable}
        </button>
        <fieldset>
          <legend>{labels.variants}</legend>
          <div className="variant-options">
            {(["dot", "ring", "cross"] as const).map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={variant === option}
                onClick={() => setVariant(option)}
              >
                {option === "dot" ? labels.dot : option === "ring" ? labels.ring : labels.cross}
              </button>
            ))}
          </div>
        </fieldset>
        <button className="experiment-secondary" type="button" onClick={reset}>{labels.reset}</button>
        {touchDevice ? (
          <p className="touch-state" role="status">{labels.touchState}</p>
        ) : null}
      </div>
      <div
        className={`cursor-zone${enabled && !touchDevice ? " cursor-zone-enabled" : ""}`}
        onPointerMove={handleMove}
        onPointerLeave={() => setVisible(false)}
        aria-label={labels.hoverZones}
      >
        {enabled && visible && !touchDevice ? (
          <span
            className={`cursor-follower cursor-follower-${variant}`}
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            aria-hidden="true"
          />
        ) : null}
        <button type="button" className="cursor-hover-zone cursor-hover-one">{labels.zoneOne}</button>
        <button type="button" className="cursor-hover-zone cursor-hover-two">{labels.zoneTwo}</button>
        <button type="button" className="cursor-hover-zone cursor-hover-three">{labels.zoneThree}</button>
      </div>
    </div>
  );
}
