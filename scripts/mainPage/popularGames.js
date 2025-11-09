import {products} from '../../data/products.js';
import {formatCurrency} from '../utils/money.js'
export function renderPopularGamesGrid() {
  let html = ''
  products.forEach((product) => {
    if (product.type === 'popular') {
      html += `
        <div class="game-card">
          <div class="game-image-div">
            <img
              class="game-image"
              src="${product.image}"
              alt=""
            />
          </div>
          <div class="game-price-teg-div">
            <p class="game-price-teg">Price: $${formatCurrency(product.priceCents)}</p>
          </div>
          <div class="game-info-flex">
            <div class="game-info">
              <button data-product-id="${product.id}" class="add-to-cart-button js-add-to-cart">Add to cart</button>
              <button class="examine-button">Inspect</button>
            </div>
            <div class="game-name-div">
              <div class="game-name">${product.name}</div>
            </div>
          </div>
        </div>
      `
    }
  });
  const popularGamesGrid = document.querySelector('.js-popular-games-grid')
  const GamesGrid = document.querySelector('.js-games-grid')
  if (popularGamesGrid) {
    popularGamesGrid.innerHTML = html
  } else {
    GamesGrid.innerHTML += html
  }
}