import { products } from "../../data/products.js";
let initialLimit = 10

export function renderGamesGrid() {
  let gamesLimit = initialLimit
  let html = ''
  products.forEach((product) => {
    if (product.type !== 'popular' && gamesLimit > 0) {
      html += `
        <div class="game-card2 game-card-animation">
          <div class="game-image-div">
            <img
              class="game-image"
              src="${product.image}"
              alt=""
            />
          </div>
          <div class="game-stats">
            <div class="game-price-teg-div">
              <p class="game-price-teg">Price: $${product.priceCents}</p>
            </div>
            <div class="game-info-flex">
              <div class="game-info">
                <button class="add-to-cart-button">Add to cart</button>
                <button class="examine-button">Inspect</button>
              </div>
              <div class="game-name-div">
                <div class="game-name2">${product.name}</div>
              </div>
            </div>
          </div>
        </div>
      `
      gamesLimit--
    }
  });
  document.querySelector('.js-games-grid').innerHTML = html;
  
}
SetUpMoreButtonFunction()
function SetUpMoreButtonFunction() {
  const moreButtonElement  = document.querySelector('.more-button')
  moreButtonElement.addEventListener('click', () => {
    if (moreButtonElement.innerText === 'More') {
      initialLimit += 10
      if (initialLimit >= products.length) {
        moreButtonElement.innerHTML = 'Show Less'
      }
    } 
    else if (moreButtonElement.innerText === 'Show Less') {
      initialLimit -= 10
      if (initialLimit <= 10) {
        moreButtonElement.innerHTML = 'More'
      }
    }
    renderGamesGrid()
    moreButtonElement.scrollIntoView({block: 'end'})
  })
}