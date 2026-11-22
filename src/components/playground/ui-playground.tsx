"use client";

import { useEffect, useRef, useState } from "react";

type UiPlaygroundProps = {
  labels: {
    buttons: string;
    primaryAction: string;
    secondaryAction: string;
    actionResult: string;
    toggles: string;
    toggleOne: string;
    toggleTwo: string;
    tabs: string;
    tabOne: string;
    tabTwo: string;
    tabThree: string;
    tabOneContent: string;
    tabTwoContent: string;
    tabThreeContent: string;
    tooltipLabel: string;
    tooltipText: string;
    dropdown: string;
    dropdownOpen: string;
    dropdownClose: string;
    optionOne: string;
    optionTwo: string;
    optionThree: string;
    cards: string;
    cardOne: string;
    cardTwo: string;
    cardSelected: string;
    loading: string;
    startLoading: string;
    stopLoading: string;
  };
};

export function UiPlayground({ labels }: UiPlaygroundProps) {
  const [actionResult, setActionResult] = useState("");
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(true);
  const [tab, setTab] = useState("one");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(labels.optionOne);
  const [selectedCard, setSelectedCard] = useState<"one" | "two" | null>(null);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => () => {
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
  }, []);

  function startLoading() {
    setLoading(true);
    timeoutRef.current = window.setTimeout(() => setLoading(false), 1800);
  }

  function openDropdown() {
    setDropdownOpen(true);
    window.requestAnimationFrame(() => {
      dropdownMenuRef.current?.querySelector<HTMLButtonElement>('[role="menuitem"]')?.focus();
    });
  }

  function closeDropdown() {
    setDropdownOpen(false);
    dropdownTriggerRef.current?.focus();
  }

  return (
    <div className="ui-playground-grid">
      <section className="ui-demo">
        <h2>{labels.buttons}</h2>
        <div className="ui-demo-actions">
          <button className="experiment-primary" type="button" onClick={() => setActionResult(labels.actionResult)}>{labels.primaryAction}</button>
          <button className="experiment-secondary" type="button" onClick={() => setActionResult("")}>{labels.secondaryAction}</button>
        </div>
        <p role="status" aria-live="polite">{actionResult}</p>
      </section>

      <section className="ui-demo">
        <h2>{labels.toggles}</h2>
        <button className="toggle-row" type="button" role="switch" aria-checked={toggleOne} onClick={() => setToggleOne((current) => !current)}>
          <span>{labels.toggleOne}</span><span className="toggle-track" aria-hidden="true"><span /></span>
        </button>
        <button className="toggle-row" type="button" role="switch" aria-checked={toggleTwo} onClick={() => setToggleTwo((current) => !current)}>
          <span>{labels.toggleTwo}</span><span className="toggle-track" aria-hidden="true"><span /></span>
        </button>
      </section>

      <section className="ui-demo ui-demo-wide">
        <h2>{labels.tabs}</h2>
        <div className="demo-tabs" role="tablist" aria-label={labels.tabs}>
          {(["one", "two", "three"] as const).map((option) => (
            <button
              key={option}
              id={`ui-tab-${option}`}
              type="button"
              role="tab"
              tabIndex={tab === option ? 0 : -1}
              aria-selected={tab === option}
              aria-controls="ui-tab-panel"
              onClick={() => setTab(option)}
              onKeyDown={(event) => {
                const options = ["one", "two", "three"] as const;
                const currentIndex = options.indexOf(option);
                let nextIndex = currentIndex;
                if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % options.length;
                if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + options.length) % options.length;
                if (event.key === "Home") nextIndex = 0;
                if (event.key === "End") nextIndex = options.length - 1;
                if (nextIndex !== currentIndex || event.key === "Home" || event.key === "End") {
                  event.preventDefault();
                  const next = options[nextIndex];
                  setTab(next);
                  document.getElementById(`ui-tab-${next}`)?.focus();
                }
              }}
            >
              {option === "one" ? labels.tabOne : option === "two" ? labels.tabTwo : labels.tabThree}
            </button>
          ))}
        </div>
        <p id="ui-tab-panel" role="tabpanel" aria-labelledby={`ui-tab-${tab}`}>
          {tab === "one" ? labels.tabOneContent : tab === "two" ? labels.tabTwoContent : labels.tabThreeContent}
        </p>
      </section>

      <section className="ui-demo">
        <h2>{labels.tooltipLabel}</h2>
        <button className="tooltip-trigger" type="button" aria-describedby="ui-tooltip">{labels.tooltipLabel}</button>
        <span id="ui-tooltip" className="demo-tooltip" role="tooltip">{labels.tooltipText}</span>
      </section>

      <section className="ui-demo">
        <h2>{labels.dropdown}</h2>
        <div
          className="demo-dropdown"
          onKeyDown={(event) => {
            if (event.key === "Escape") closeDropdown();
            if (event.key === "ArrowDown" && event.target === dropdownTriggerRef.current) {
              event.preventDefault();
              openDropdown();
            }
          }}
        >
          <button
            ref={dropdownTriggerRef}
            type="button"
            aria-haspopup="menu"
            aria-controls="demo-dropdown-menu"
            aria-expanded={dropdownOpen}
            onClick={() => dropdownOpen ? closeDropdown() : openDropdown()}
          >
            {dropdownValue}
          </button>
          {dropdownOpen ? (
            <div id="demo-dropdown-menu" ref={dropdownMenuRef} role="menu" aria-label={labels.dropdown}>
              {[labels.optionOne, labels.optionTwo, labels.optionThree].map((option, index, options) => (
                <button
                  key={option}
                  type="button"
                  role="menuitem"
                  onClick={() => { setDropdownValue(option); closeDropdown(); }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") closeDropdown();
                    if (event.key === "ArrowDown") {
                      event.preventDefault();
                      dropdownMenuRef.current?.querySelectorAll<HTMLButtonElement>('[role="menuitem"]')[Math.min(index + 1, options.length - 1)]?.focus();
                    }
                    if (event.key === "ArrowUp") {
                      event.preventDefault();
                      dropdownMenuRef.current?.querySelectorAll<HTMLButtonElement>('[role="menuitem"]')[Math.max(index - 1, 0)]?.focus();
                    }
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="ui-demo ui-demo-wide">
        <h2>{labels.cards}</h2>
        <div className="demo-card-grid">
          {(["one", "two"] as const).map((option) => (
            <button
              key={option}
              className="demo-card"
              type="button"
              aria-pressed={selectedCard === option}
              onClick={() => setSelectedCard(option)}
            >
              <span>{option === "one" ? labels.cardOne : labels.cardTwo}</span>
              {selectedCard === option ? <small>{labels.cardSelected}</small> : null}
            </button>
          ))}
        </div>
      </section>

      <section className="ui-demo ui-demo-wide">
        <h2>{labels.loading}</h2>
        <button className="experiment-primary" type="button" onClick={loading ? () => setLoading(false) : startLoading}>
          {loading ? labels.stopLoading : labels.startLoading}
        </button>
        {loading ? <span className="loading-indicator" role="status"><span aria-hidden="true" /></span> : null}
      </section>
    </div>
  );
}
