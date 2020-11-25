import React from "react";
import Helmet from "react-helmet";

export const ManifestThemeColor: React.FC = () => (
  <Helmet
    meta={[
      {
        name: "theme-color",
        content:
          getComputedStyle(document.body)
            .getPropertyValue("--secondary")
            .trim() || "#12181b", // taken from theme.css
      },
    ]}
  />
);
