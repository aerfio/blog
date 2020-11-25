import React, { FunctionComponent } from "react";
import TSParticles from "react-tsparticles";

export const Particles: FunctionComponent<{ isDarkMode: boolean }> = ({
  isDarkMode,
}) => (
  <TSParticles
    id="tsparticles"
    options={
      isDarkMode
        ? tsParcilesJsonWithColors(darkThemeColors, darkThemeLineColor)
        : tsParcilesJsonWithColors(lightThemeColors, lightThemeLineColor)
    }
    className="hidden xl:block"
  />
);

const darkThemeColors = ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"];
const darkThemeLineColor = "#DF3F4A";

const lightThemeColors = ["#480B19", "#221D11", "#000", "#F45D0D"];
const lightThemeLineColor = "#33b1f8";

const tsParcilesJsonWithColors = (
  particlesColors: string[],
  lineColor: string,
) => ({
  fpsLimit: 60,
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 700,
      },
    },
    color: {
      value: particlesColors,
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 30,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        opacity_min: 0.35,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: false,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.15,
        sync: false,
      },
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
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
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
