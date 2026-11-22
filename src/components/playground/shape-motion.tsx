"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

type ShapeMotionProps = {
  labels: {
    shape: string;
    circle: string;
    square: string;
    diamond: string;
    speed: string;
    slow: string;
    fast: string;
    direction: string;
    clockwise: string;
    counterclockwise: string;
    intensity: string;
    pause: string;
    play: string;
    reset: string;
    reducedMotion: string;
  };
};

type Shape = "circle" | "square" | "diamond";

export function ShapeMotion({ labels }: ShapeMotionProps) {
  const [shape, setShape] = useState<Shape>("circle");
  const [speed, setSpeed] = useState(4);
  const [direction, setDirection] = useState<"clockwise" | "counterclockwise">("clockwise");
  const [intensity, setIntensity] = useState(24);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  function reset() {
    setShape("circle");
    setSpeed(4);
    setDirection("clockwise");
    setIntensity(24);
    setPaused(false);
  }

  const motionStyle = {
    "--motion-duration": `${speed}s`,
    "--motion-distance": `${intensity}px`,
    "--motion-direction": direction === "clockwise" ? "normal" : "reverse",
  } as CSSProperties;

  return (
    <div className="experiment-layout shape-layout">
      <div className="experiment-controls">
        <fieldset>
          <legend>{labels.shape}</legend>
          <div className="segmented-control">
            {(["circle", "square", "diamond"] as const).map((option) => (
              <button key={option} type="button" aria-pressed={shape === option} onClick={() => setShape(option)}>
                {option === "circle" ? labels.circle : option === "square" ? labels.square : labels.diamond}
              </button>
            ))}
          </div>
        </fieldset>
        <label className="range-control">
          <span>{labels.speed}: {speed}s</span>
          <input type="range" min="1" max="8" value={speed} onChange={(event) => setSpeed(Number(event.target.value))} />
        </label>
        <fieldset>
          <legend>{labels.direction}</legend>
          <div className="segmented-control">
            <button type="button" aria-pressed={direction === "clockwise"} onClick={() => setDirection("clockwise")}>{labels.clockwise}</button>
            <button type="button" aria-pressed={direction === "counterclockwise"} onClick={() => setDirection("counterclockwise")}>{labels.counterclockwise}</button>
          </div>
        </fieldset>
        <label className="range-control">
          <span>{labels.intensity}: {intensity}</span>
          <input type="range" min="4" max="48" value={intensity} onChange={(event) => setIntensity(Number(event.target.value))} />
        </label>
        <div className="experiment-actions">
          <button className="experiment-primary" type="button" onClick={() => setPaused((current) => !current)}>
            {paused ? labels.play : labels.pause}
          </button>
          <button className="experiment-secondary" type="button" onClick={reset}>{labels.reset}</button>
        </div>
        {reducedMotion ? <p className="touch-state" role="status">{labels.reducedMotion}</p> : null}
      </div>
      <div className="shape-stage" style={motionStyle}>
        <span
          className={`moving-shape moving-shape-${shape}${paused || reducedMotion ? " is-paused" : ""}`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
