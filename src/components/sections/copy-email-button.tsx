"use client";

import { useEffect, useRef, useState } from "react";

type CopyEmailButtonProps = {
  email: string;
  label: string;
  copiedLabel: string;
  failedLabel: string;
};

export function CopyEmailButton({
  email,
  label,
  copiedLabel,
  failedLabel,
}: CopyEmailButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setStatus("idle"), 1800);
    } catch {
      setStatus("failed");
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setStatus("idle"), 1800);
    }
  }

  return (
    <button className="copy-email-button" type="button" onClick={copyEmail}>
      <span>
        {status === "copied" ? copiedLabel : status === "failed" ? failedLabel : label}
      </span>
      <span aria-hidden="true">{status === "copied" ? "✓" : "↗"}</span>
    </button>
  );
}
