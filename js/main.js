import { DropdownObject, SplashObject } from "./objects.js";
import { Observer } from "./objects/observer.js";
document.addEventListener("DOMContentLoaded", (e) => {
  const { toggleDropdown } = DropdownObject;

  // elements init
  const menuButtonComponent = document.querySelector("#menu-button");
  const dropdownMenuLink = document.querySelectorAll(".dropdown-menu-item a");
  const sponsorsContainer = document.querySelector("#sponsors");
  const ticketsContainer = document.querySelector("#tickets");
  const buyTicketsButton = document.querySelector("#buy-tickets-button");
  const dropdown = document.querySelector(".dropdown");
  // methods
  const collapseDropdownMenu = () => {
    if (!dropdown.classList.contains("hide")) {
      dropdown.classList.add("hide");
    }
  };
  // listeners
  document.addEventListener("click", (e) => {
    if (
      !dropdown.contains(e.target) &&
      !menuButtonComponent.contains(e.target)
    ) {
      collapseDropdownMenu();
    }
  });
  dropdownMenuLink.forEach((e) => {
    e.addEventListener("click", () => {
      toggleDropdown();
    });
  });
  menuButtonComponent.addEventListener("click", () => {
    toggleDropdown();
  });

  const { observe: observeTickets } = new Observer(
    ticketsContainer,
    buyTicketsButton
  );
  const { observe: observeSponsors } = new Observer(
    sponsorsContainer,
    buyTicketsButton
  );
  observeTickets();
  observeSponsors();
});
