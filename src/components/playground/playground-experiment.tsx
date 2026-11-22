import { getTranslations } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

import { CursorLab } from "./cursor-lab";
import { GradientStudio } from "./gradient-studio";
import { ShapeMotion } from "./shape-motion";
import { UiPlayground } from "./ui-playground";

export type PlaygroundSlug = "gradient-studio" | "cursor-lab" | "shape-motion" | "ui-playground";

export async function PlaygroundExperiment({
  locale,
  slug,
}: {
  locale: Locale;
  slug: PlaygroundSlug;
}) {
  const t = await getTranslations({ locale, namespace: "playground" });

  return (
    <article className="playground-page">
      <header className="case-hero playground-hero">
        <Link className="case-back" href="/playground">
          <span aria-hidden="true">←</span> {t("back")}
        </Link>
        <p className="case-number">{t("label")}</p>
        <h1>{t(`${slug}.title`)}</h1>
        <p className="experiment-description">{t(`${slug}.description`)}</p>
      </header>

      {slug === "gradient-studio" ? (
        <GradientStudio
          labels={{
            mode: t("gradient-studio.controls.mode"),
            linear: t("gradient-studio.controls.linear"),
            radial: t("gradient-studio.controls.radial"),
            colorOne: t("gradient-studio.controls.colorOne"),
            colorTwo: t("gradient-studio.controls.colorTwo"),
            angle: t("gradient-studio.controls.angle"),
            preview: t("gradient-studio.controls.preview"),
            cssLabel: t("gradient-studio.controls.cssLabel"),
            copy: t("gradient-studio.controls.copy"),
            copied: t("gradient-studio.controls.copied"),
            copyFailed: t("gradient-studio.controls.copyFailed"),
            reset: t("gradient-studio.controls.reset"),
          }}
        />
      ) : null}
      {slug === "cursor-lab" ? (
        <CursorLab
          labels={{
            enable: t("cursor-lab.controls.enable"),
            disable: t("cursor-lab.controls.disable"),
            reset: t("cursor-lab.controls.reset"),
            variants: t("cursor-lab.controls.variants"),
            dot: t("cursor-lab.controls.dot"),
            ring: t("cursor-lab.controls.ring"),
            cross: t("cursor-lab.controls.cross"),
            hoverZones: t("cursor-lab.controls.hoverZones"),
            zoneOne: t("cursor-lab.controls.zoneOne"),
            zoneTwo: t("cursor-lab.controls.zoneTwo"),
            zoneThree: t("cursor-lab.controls.zoneThree"),
            touchState: t("cursor-lab.controls.touchState"),
          }}
        />
      ) : null}
      {slug === "shape-motion" ? (
        <ShapeMotion
          labels={{
            shape: t("shape-motion.controls.shape"),
            circle: t("shape-motion.controls.circle"),
            square: t("shape-motion.controls.square"),
            diamond: t("shape-motion.controls.diamond"),
            speed: t("shape-motion.controls.speed"),
            slow: t("shape-motion.controls.slow"),
            fast: t("shape-motion.controls.fast"),
            direction: t("shape-motion.controls.direction"),
            clockwise: t("shape-motion.controls.clockwise"),
            counterclockwise: t("shape-motion.controls.counterclockwise"),
            intensity: t("shape-motion.controls.intensity"),
            pause: t("shape-motion.controls.pause"),
            play: t("shape-motion.controls.play"),
            reset: t("shape-motion.controls.reset"),
            reducedMotion: t("shape-motion.controls.reducedMotion"),
          }}
        />
      ) : null}
      {slug === "ui-playground" ? (
        <UiPlayground
          labels={{
            buttons: t("ui-playground.controls.buttons"),
            primaryAction: t("ui-playground.controls.primaryAction"),
            secondaryAction: t("ui-playground.controls.secondaryAction"),
            actionResult: t("ui-playground.controls.actionResult"),
            toggles: t("ui-playground.controls.toggles"),
            toggleOne: t("ui-playground.controls.toggleOne"),
            toggleTwo: t("ui-playground.controls.toggleTwo"),
            tabs: t("ui-playground.controls.tabs"),
            tabOne: t("ui-playground.controls.tabOne"),
            tabTwo: t("ui-playground.controls.tabTwo"),
            tabThree: t("ui-playground.controls.tabThree"),
            tabOneContent: t("ui-playground.controls.tabOneContent"),
            tabTwoContent: t("ui-playground.controls.tabTwoContent"),
            tabThreeContent: t("ui-playground.controls.tabThreeContent"),
            tooltipLabel: t("ui-playground.controls.tooltipLabel"),
            tooltipText: t("ui-playground.controls.tooltipText"),
            dropdown: t("ui-playground.controls.dropdown"),
            dropdownOpen: t("ui-playground.controls.dropdownOpen"),
            dropdownClose: t("ui-playground.controls.dropdownClose"),
            optionOne: t("ui-playground.controls.optionOne"),
            optionTwo: t("ui-playground.controls.optionTwo"),
            optionThree: t("ui-playground.controls.optionThree"),
            cards: t("ui-playground.controls.cards"),
            cardOne: t("ui-playground.controls.cardOne"),
            cardTwo: t("ui-playground.controls.cardTwo"),
            cardSelected: t("ui-playground.controls.cardSelected"),
            loading: t("ui-playground.controls.loading"),
            startLoading: t("ui-playground.controls.startLoading"),
            stopLoading: t("ui-playground.controls.stopLoading"),
          }}
        />
      ) : null}
    </article>
  );
}
