import Swup from "swup";
import SwupA11yPlugin from "@swup/a11y-plugin";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupSlideTheme from "@swup/slide-theme";
console.log("test1");
document.addEventListener("DOMContentLoaded", () => {
  // this event runs for every page view after initial load
  setTimeout(function () {
    console.log("test2");
    new Swup({
      plugins: [
        new SwupA11yPlugin(),
        new SwupHeadPlugin(),
        new SwupSlideTheme(),
      ],
    });
  }, 300);
});
