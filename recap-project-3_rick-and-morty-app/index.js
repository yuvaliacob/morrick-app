import { prevButton, nextButton } from "./components/nav-button/nav-button.js";

import CreateCharacterCard from "./components/card/card.js";
import { renderElement } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
// const prevButton = document.querySelector('[data-js="button-prev"]');
// const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// Function to clear the container everytime data is fetched
function clearCardContainer() {
  cardContainer.innerHTML = " ";
  console.log("container cleared!");
}

// THIS WORKS!!!! DO NOT DELETE!!!!!!
// Fetching data
// async function fetchCharacters() {
//   clearCardContainer();
//   try {
//     const url = "https://rickandmortyapi.com/api/character";
//     const page = 1;

//     const response = await fetch(`${url}?page=${page}`);
//     const data = await response.json();

//     // logging stuff to check
//     console.log(data);
//     console.log(data.results);
//     console.log(data.results[0]);
//     console.log(data.results[0].image);

//     data.results.forEach((card) => {
//       const newCard = CreateCharacterCard(card);
//       renderElement(newCard);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }
// END OF WORKING CODE

// adding event listeners to buttons
prevButton.addEventListener("click", () => {
  console.log("GO BACK!!!");
});
nextButton.addEventListener("click", () => {
  console.log("NEXT!!!");
});

// Fetching data + pagination
async function fetchCharacters() {
  const url = "https://rickandmortyapi.com/api/character";
  const page = 1;

  clearCardContainer();
  try {
    const response = await fetch(`${url}?page=${page}`);
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

fetchCharacters();
