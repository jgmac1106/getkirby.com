/* global Prism */
import { $, $$ } from "../utils/selector.js";
import "../components/code.js";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

const cheatsheet = $(".cheatsheet");

const buttons = () => {

  const menuScrollArea = $(".cheatsheet-panel-scrollarea");

  $$(".cheatsheet-panel-header button").forEach((button) => {

    button.addEventListener("click", () => {
      const show = button.getAttribute("data-show");
      cheatsheet.setAttribute("data-show", show);

      if (show === "menu") {
        // when mobile menu is shown, disable scrolling of
        // the page and only allow inside of designated
        // scrolling area. Otherwise, the page can easily
        // break on iOS, because Mobile Safari (tested with v12.2)
        // tends to scrolling the whole viewport, even if
        // only the scroll area was flicked.
        disableBodyScroll(menuScrollArea);
      } else {
        enableBodyScroll(menuScrollArea);
      }

    });

  });
};

const load = (link) => {

  // start loading
  cheatsheet.classList.add("is-loading");

  fetch(link.href + "?plain=true").
    then((response) => {
      return response.text();
    }).
    then((html) => {
      $(".cheatsheet-article").innerHTML = html;
      $(".cheatsheet-entries a[aria-current]").removeAttribute("aria-current");

      // change the currently active link
      link.setAttribute("aria-current", "page");

      // stop loading
      cheatsheet.classList.remove("is-loading");

      // stop showing the menu or overview
      cheatsheet.removeAttribute("data-show");

      // get the title
      const title = link.getAttribute("data-title");

      document.title = title + " | Kirby";

      // highlight all code blocks
      Prism.highlightAll();

      // link header buttons
      buttons();
    });

};

window.addEventListener("popstate", (e) => {
  if (e.state && e.state.slug) {
    const link = $("a[data-slug='" + e.state.slug + "']");

    if (link) {
      load(link);
    }
  }
});

$$(".cheatsheet-entries a").forEach((link) => {

  link.addEventListener("click", (e) => {
    e.preventDefault();
    load(link);

    // change the browser history
    history.pushState({
      link: link.href,
      slug: link.getAttribute("data-slug")
    }, "", link.href);

  }, true);

});

buttons();

const currentSection = $(".cheatsheet-sections a[aria-current]");
const currentEntry   = $(".cheatsheet-entries a[aria-current]");

if (currentSection && currentSection.scrollIntoView) {
  currentSection.scrollIntoView();
}

if (currentEntry && currentEntry.scrollIntoView) {
  currentEntry.scrollIntoView();
}
