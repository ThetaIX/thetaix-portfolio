"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

type GradientStudioProps = {
  labels: {
    mode: string;
    linear: string;
    radial: string;
    colorOne: string;
    colorTwo: string;
    angle: string;
    preview: string;
    cssLabel: string;
    copy: string;
    copied: string;
    copyFailed: string;
    reset: string;
  };
};

const defaults = { first: "#d7ff3f", second: "#ff765e", angle: 135, mode: "linear" as const };

export function GradientStudio({ labels }: GradientStudioProps) {
  const [first, setFirst] = useState(defaults.first);
  const [second, setSecond] = useState(defaults.second);
  const [angle, setAngle] = useState(defaults.angle);
  const [mode, setMode] = useState<"linear" | "radial">(defaults.mode);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const cssValue =
    mode === "linear"
      ? `linear-gradient(${angle}deg, ${first}, ${second})`
      : `radial-gradient(circle, ${first}, ${second})`;
  const cssText = `background: ${cssValue};`;

  async function copyCss() {
    try {
      await navigator.clipboard.writeText(cssText);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  function reset() {
    setFirst(defaults.first);
    setSecond(defaults.second);
    setAngle(defaults.angle);
    setMode(defaults.mode);
    setCopyState("idle");
  }

  const previewStyle = { background: cssValue } satisfies CSSProperties;

  return (
    <div className="experiment-layout gradient-layout">
      <div className="experiment-controls" aria-label={labels.mode}>
        <fieldset>
          <legend>{labels.mode}</legend>
          <div className="segmented-control">
            <button type="button" aria-pressed={mode === "linear"} onClick={() => setMode("linear")}>
              {labels.linear}
            </button>
            <button type="button" aria-pressed={mode === "radial"} onClick={() => setMode("radial")}>
              {labels.radial}
            </button>
          </div>
        </fieldset>
        <label className="color-control">
          <span>{labels.colorOne}</span>
          <input type="color" value={first} onChange={(event) => setFirst(event.target.value)} />
        </label>
        <label className="color-control">
          <span>{labels.colorTwo}</span>
          <input type="color" value={second} onChange={(event) => setSecond(event.target.value)} />
        </label>
        {mode === "linear" ? (
          <label className="range-control">
            <span>{labels.angle}: {angle}°</span>
            <input type="range" min="0" max="360" value={angle} onChange={(event) => setAngle(Number(event.target.value))} />
          </label>
        ) : null}
        <div className="experiment-actions">
          <button className="experiment-primary" type="button" onClick={copyCss}>{labels.copy}</button>
          <button className="experiment-secondary" type="button" onClick={reset}>{labels.reset}</button>
        </div>
        <p className="copy-feedback" role="status" aria-live="polite">
          {copyState === "copied" ? labels.copied : copyState === "failed" ? labels.copyFailed : ""}
        </p>
      </div>
      <div className="experiment-preview">
        <p className="preview-label">{labels.preview}</p>
        <div className="gradient-preview" style={previewStyle} />
        <div className="generated-css">
          <span>{labels.cssLabel}</span>
          <code>{cssText}</code>
        </div>
      </div>
    </div>
  );
}
