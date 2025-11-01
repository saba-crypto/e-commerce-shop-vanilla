import { products } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import {cart} from '../../data/cart.js'
import { renderHeader } from "./header.js";
import { renderPopularGamesGrid } from "./popularGames.js";
let initialLimit = 10

export function renderGamesGrid() {
  let gamesLimit = initialLimit
  let html = ''
  products.forEach((product) => {
    if (product.type !== 'popular' && gamesLimit > 0) {
      html += `
        <div class="game-card2">
          <div class="game-image-div">
            <img
              class="game-image"
              src="${product.image}"
              alt=""
            />
          </div>
          <div class="game-stats">
            <div class="game-price-teg-div">
              <p class="game-price-teg">Price: $${formatCurrency(product.priceCents)}</p>
            </div>
            <div class="game-info-flex">
              <div class="game-info">
                <button data-product-id="${product.id}" class="add-to-cart-button js-add-to-cart">Add to cart</button>
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
  const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate')
    }
  })
  }, {});
  document.querySelectorAll('.game-card2').forEach((element) => {
    observer.observe(element)
  });
  document.querySelectorAll('.game-card').forEach((element) => {
    observer.observe(element)
  })
  let timeOutId;
  document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId
      cart.addToCart(productId)
      button.innerHTML = 'Added!'
      clearTimeout(timeOutId)
      timeOutId = setTimeout(() => {
        button.innerHTML = 'Add to cart'
      }, 1000)
      renderHeader()
    })
  })
};
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
document.querySelector('.js-buy-now-button').addEventListener('click' , () => {
  document.querySelector('.js-popular-games-title').scrollIntoView({block: 'start'})
})

