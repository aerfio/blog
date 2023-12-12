import React, { memo, useEffect, useState } from "react";
import TSParticles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Particles = memo<{ isDarkMode: boolean }>(({ isDarkMode }) => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async engine => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);

      await loadSlim(engine);
    })
      .catch(e => {
        console.error(e);
      })
      .then(() => {
        setInit(true);
      });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      console.log(container);
    }
    return undefined;
  };

  return (
    init && (
      <TSParticles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={isDarkMode ? dark : light}
        className="hidden xl:block"
      />
    )
  );
});

// no named export, we'll lazy load this component
export default Particles;

Particles.displayName = "Particles";

const tsParcilesJsonWithColors = (
  particlesColors: string[],
  lineColor: string,
): ISourceOptions => ({
  fpsLimit: 60,
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
      },
    },
    color: {
      value: particlesColors,
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 4,
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: lineColor,
      opacity: 0.55,
      width: 2,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,

      attract: {
        enable: false,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

const darkThemeColors = ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"];
const darkThemeLineColor = "#DF3F4A";

const lightThemeColors = ["#480B19", "#221D11", "#000", "#F45D0D"];
const lightThemeLineColor = "#33b1f8";

const dark: ISourceOptions = tsParcilesJsonWithColors(
  darkThemeColors,
  darkThemeLineColor,
);
const light: ISourceOptions = tsParcilesJsonWithColors(
  lightThemeColors,
  lightThemeLineColor,
);
