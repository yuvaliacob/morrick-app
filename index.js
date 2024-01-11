/*
IMPORTS
*/
import { header, headerImage } from "./components/header/header.js";

import {
  rmBottomImageContainer,
  rmBottomImage,
} from "./components/rm-page-bottom/rm-page-bottom.js";

import { prevButton, nextButton } from "./components/nav-button/nav-button.js";

import {
  pagination,
  maxPage,
  page,
} from "./components/nav-pagination/nav-pagination.js";

import CreateCharacterCard from "./components/card/card.js";
import { cardContainer, renderElement } from "./components/card/card.js";

import {
  searchBarContainer,
  searchBar,
  searchButton,
  searchInput,
  searchIcon,
} from "./components/search-bar/search-bar.js";

/*
STATES
*/

let currentPage = page;
let searchQuery = "";

const body = document.querySelector("body");
const main = document.querySelector("main");
const nav = document.createElement("nav");
nav.classList.add("navigation");

// CORE

body.append(header, nav);
header.append(headerImage, searchBarContainer);

searchBarContainer.append(searchBar);

searchBar.append(searchInput, searchButton, searchIcon);

searchBarContainer.append(searchBar);
searchBar.append(searchInput, searchButton);
searchButton.append(searchIcon);

main.append(cardContainer, rmBottomImageContainer);
rmBottomImageContainer.append(rmBottomImage);

nav.append(prevButton, pagination, nextButton);

fetchCharacters();

pagination.textContent = currentPage + ` | ${maxPage}`;

// FUNCTIONS

/* 
FUNCTION TO CLEAR CARD CONTAINER
*/

function clearCardContainer() {
  cardContainer.innerHTML = " ";
  console.log("container cleared!");
}

/* 
FETCHING DATA
*/
async function fetchCharacters() {
  const url = "https://rickandmortyapi.com/api/character?page=";

  clearCardContainer();
  try {
    const response = await fetch(`${url}${currentPage}`);
    const data = await response.json();

    // logging stuff to check
    console.log(data);
    console.log(data.results);
    console.log(data.results[0]);
    console.log(data.results[0].image);

    data.results.forEach((card) => {
      const newCard = CreateCharacterCard(card);
      renderElement(newCard);
    });
  } catch (error) {
    console.error(error);
  }
}

/*
SEARCH BAR
*/

searchBar.addEventListener("submit", async (event) => {
  console.log("What are you looking for?");

  event.preventDefault();

  const formData = new FormData(event.target);
  console.log("formData: ", formData);
  const data = Object.fromEntries(formData);
  console.log("Data: ", data);

  const formElements = event.target.elements;

  console.log("You looked for: ", formElements.query.value);

  searchQuery = formElements.query.value;
  const url = "https://rickandmortyapi.com/api/character?name=";

  clearCardContainer();
  try {
    const response = await fetch(`${url}${searchQuery}`);
    const data = await response.json();

    data.results.forEach((card) => {
      const newCard = CreateCharacterCard(card);
      renderElement(newCard);
    });
  } catch (error) {
    console.error(error);
  }
});

/* 
ADDING EVENT LISTENER TO PREV BUTTON
*/

prevButton.addEventListener("click", () => {
  console.log("GO BACK!!!");
  if (currentPage !== page) {
    currentPage -= 1;
  } else {
    currentPage = page;
  }
  pagination.textContent = currentPage + ` | ${maxPage}`;

  fetchCharacters(currentPage);
  console.log("We are on page: ", currentPage);
});

/*
ADDING EVENT LISTENER TO NEXT BUTTON
*/

nextButton.addEventListener("click", () => {
  console.log("NEXT!!!");
  if (currentPage < maxPage) {
    currentPage += 1;
  } else {
    currentPage = maxPage;
  }
  pagination.textContent = currentPage + ` | ${maxPage}`;

  fetchCharacters(currentPage);
  console.log("We are on page: ", currentPage);
});

// Flickering while scrolling
// This piece of code came from Google
//
window.addEventListener("scroll", function () {
  var cards = document.querySelectorAll(".card");
  for (var i = 0; i < cards.length; i++) {
    if (isElementInViewport(cards[i])) {
      cards[i].classList.add("animate");
    } else {
      cards[i].classList.remove("animate");
    }
  }
});
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
