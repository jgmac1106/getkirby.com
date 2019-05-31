import { $ } from "../utils/selector";
import ready from "../utils/ready";

class Menu {

  constructor(el) {
    this.el     = el;
    this.button = $("button[aria-controls]");
    this.menu   = $("#menu");
    this.isOpen = false;
    this.handleGlobalClickBound = this.handleGlobalClick.bind(this);

    this.init();
  }

  init() {
    this.button.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggle();
    });
  }

  toggle(force) {

    let newState = !this.isOpen;

    if (typeof force !== "undefined") {
      if (force === this.isOpen) {
        return;
      }
      newState = force;
    }

    this.button.setAttribute("aria-expanded", newState ? "true" : "false");

    setTimeout(() => {
      if (newState) {
        window.addEventListener("click", this.handleGlobalClickBound);
      } else {
        window.removeEventListener("click", this.handleGlobalClickBound);
      }
    }, 0);

    this.isOpen = newState;
  }

  handleGlobalClick(e) {
    if (!this.menu.contains(e.target)) {
      e.preventDefault();
      this.toggle(false);
    }
  }

}

ready(() => {

  const menu = $(".menu");

  if (menu) {
    new Menu(menu);
  }

});
