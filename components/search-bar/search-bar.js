export const searchBarContainer = document.createElement("div");
searchBarContainer.classList.add("search-bar-container");

export const searchBar = document.createElement("form");
searchBar.classList.add("search-bar");

export const searchInput = document.createElement("input");
searchInput.classList.add("search-bar__input");
searchInput.name = "query";
searchInput.type = "text";
searchInput.placeholder = "Browse universe";

export const searchButton = document.createElement("button");
searchButton.classList.add("search-bar__button");

export const searchIcon = document.createElement("img");
searchIcon.classList.add("search-bar__icon");
searchIcon.src = "./assets/magnifying-glass.png";
