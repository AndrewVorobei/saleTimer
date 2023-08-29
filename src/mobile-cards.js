const mobile_cards = [
  { name: "card 1", price: 50, cost: 5 },
  { name: "card 2", price: 150, cost: 15 },
  { name: "card 3", price: 300, cost: 30 },
  { name: "card 4", price: 500, cost: 50 },
  { name: "card 5", price: 1000, cost: 100 },
  { name: "card 6", price: 1000, cost: 100 },
];

const mobile_card_container = document.querySelector(".mobile_slider");

const createMobileCard = (mobile_card, index) => {
  if (index === 0) {
    return `
            <div class="mobile_slider_item active">
                <div class="special_offer">
                One time offer!
                </div>
                <div class="cost_block">
                <span class="price">
                ${mobile_card.price}
                </span>
                <div class="cost_ellipse">CR</div>
                <span class="cost">/$${mobile_card.cost}</span>
                </div>
            </div>
        `;
  } else {
    return `
            <div class="mobile_slider_item">
                <div class="cost_block">
                <span class="price">
                ${mobile_card.price}
                </span>
                <div class="cost_ellipse">CR</div>
                <span class="cost">/$${mobile_card.cost}</span>
                </div>
            </div>
        `;
  }
};

const renderMobileCard = (mobile_cards) => {
  const cardHTML = mobile_cards
    .map((mobile_card, index) => createMobileCard(mobile_card, index))
    .join("");
  mobile_card_container.innerHTML = cardHTML;
};

renderMobileCard(mobile_cards);

const mobileCard = renderMobileCard;

// СЛАЙДЕР

let timerInterval;

const resetTimer = () => {
  clearInterval(timerInterval);
  startSlider();
};

const slides = document.querySelectorAll(".mobile_slider_item");

const showSlide = (index) => {
  const slides = document.querySelectorAll(".mobile_slider_item");

  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
};

slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    currentSlideIndex = (index + 1) % mobile_cards.length;
    resetTimer();
    showSlide(currentSlideIndex);
  });
});

let currentSlideIndex = 0;

const startSlider = () => {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % mobile_cards.length;
    showSlide(currentSlideIndex);
  }, 5000);
};

startSlider();

const slider = startSlider;

export { mobileCard, slider };
