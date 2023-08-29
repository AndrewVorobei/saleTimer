const cards = [
  { name: "card 1", price: 50 },
  { name: "card 2", price: 150 },
  { name: "card 3", price: 300 },
  { name: "card 4", price: 500 },
  { name: "card 5", price: 1000 },
  { name: "card 6", price: 1000 },
];

const cardsContainer = document.querySelector(".card_block");

const createCard = (card, index) => {
  if (index === 0) {
    return `
        <div class="card_item">
            <div class="special_offer">One time offer!</div>
            <div class="card_cost">
            <h1 class="cost">${card.price}</h1>
            <div class="cost_ellipse">CR</div>
            </div>
            <button class="buy_btn">Buy now</button>
        </div>
    `;
  } else {
    return `
        <div class="card_item">
            <div class="card_cost">
            <h1 class="cost">${card.price}</h1>
            <div class="cost_ellipse">CR</div>
            </div>
            <button class="buy_btn">Buy now</button>
        </div>
    `;
  }
};

const renderCards = (cards) => {
  const cardHTML = cards.map((card, index) => createCard(card, index)).join("");
  cardsContainer.innerHTML = cardHTML;
};

renderCards(cards);

const card = renderCards;

export { card };
