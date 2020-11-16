---
title: How to make full-size SVG background
date: "2020-11-16T19:23:03.284Z"
description: "This post shows how to make sure that your SVG image takes all available space. Sources provided!"
categories: [css]
sources:
  [
    https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio,
  ]
---

Have tried setting the SVG image as a background for some kind of HTML element? Did you come across a certain problem, appearing when you wanted it to cover all the available space? From my experience it does not work in every situation. Using typical `css` solution may not always work:

<!-- prettier-ignore-start -->
```css
.container {
  background-image: url("http://example.com/.svg");
  background-size: 100% 100%;
  ...
}
```
<!-- prettier-ignore-end -->

The answer is to add `preserveAspectRatio="none"` attribute to the SVG file.
