export function createCharacterCard() {
  const cardContainer = document.querySelector('[data-js="card-container"]');
  cardContainer.classList.add("card-container");
  const card = document.createElement("li");
  card.classList.add("card");

  card.innerHTML = `<li class="card">
          <div class="card__image-container">
            <img
              class="card__image"
              src="${IMG - SRC}"
              alt="Rick Sanchez"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${CHARACTERNAME}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${STATUS}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${TYPE}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${OCCURENCES}</dd>
            </dl>
          </div>
        </li>`;

  cardContainer.append(card);
}
