export const cardContainer = document.createElement("ul");

export default function CreateCharacterCard(characterData) {
  const card = document.createElement("li");
  card.classList.add("card");

  card.innerHTML = `<div class="card__image-container">
  <img
  class="card__image"
  src="${characterData.image}"
  alt="Rick Sanchez"
  />
  <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
  <h2 class="card__title">${characterData.name}</h2>
  <dl class="card__info">
  <dt class="card__info-title">Status</dt>
  <dd class="card__info-description">${characterData.status}</dd>
  <dt class="card__info-title">Type</dt>
  <dd class="card__info-description">${characterData.type}</dd>
  <dt class="card__info-title">Occurrences</dt>
  <dd class="card__info-description">${characterData.episode.length}</dd>
  </dl>
  </div>`;
  return card;
}

export function renderElement(element) {
  cardContainer.classList.add("card-container");
  cardContainer.appendChild(element);
}
