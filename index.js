import { prevButton, nextButton } from "./components/nav-button/nav-button.js";

import {
  pagination,
  maxPage,
  page,
} from "./components/nav-pagination/nav-pagination.js";

import CreateCharacterCard from "./components/card/card.js";
import { renderElement } from "./components/card/card.js";

import {
  searchBarContainer,
  searchBar,
  searchButton,
} from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
// const searchBarContainer = document.querySelector(
//   '[data-js="search-bar-container"]'
// );
// const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');

// States
let currentPage = page;
// let nameInput = searchQuery;

let searchQuery = "";

// Search Bar

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

fetchCharacters();

pagination.textContent = currentPage + ` | ${maxPage}`;

// Function to clear the container everytime data is fetched
function clearCardContainer() {
  cardContainer.innerHTML = " ";
  console.log("container cleared!");
}

// adding event listeners to prev button
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

// adding event listener to next button
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

// Fetching data + pagination
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
