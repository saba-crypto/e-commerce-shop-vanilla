import { products } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import { cart } from "../../data/cart.js";
import { renderHeader } from "../shared/header.js";
let initialLimit = 10;

export function renderGamesGrid() {
  let gamesLimit = initialLimit;
  let html = "";
  products.forEach((product) => {
    if (product.type !== "popular" && gamesLimit > 0) {
      html += `
        <div class="game-card">
          <div class="game-image-div">
            <img
              class="game-image"
              src="${product.image}"
              alt=""
            />
          </div>
          <div class="game-stats">
            <div class="game-price-teg-div">
              <p class="game-price-teg">Price: $${formatCurrency(
                product.priceCents
              )}</p>
            </div>
            <div class="game-info-flex">
              <div class="game-info">
                <button data-product-id="${
                  product.id
                }" class="add-to-cart-button js-add-to-cart">Add to cart</button>
                <button data-product-id="${
                  product.id
                }" class="examine-button js-inspect">Inspect</button>
              </div>
              <div class="game-name-div">
                <div class="game-name2">${product.name}</div>
              </div>
            </div>
          </div>
        </div>
      `;
      gamesLimit--;
    }
  });
  const url = new URLSearchParams(window.location.search);
  if (url.get("search")) {
    document.querySelector(".js-games-grid").innerHTML += html;
  } else {
    document.querySelector(".js-games-grid").innerHTML = html;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, {});
  document.querySelectorAll(".game-card2").forEach((element) => {
    observer.observe(element);
  });
  document.querySelectorAll(".game-card").forEach((element) => {
    observer.observe(element);
  });
  let timeOutId;

  function displayCardInfoHTML(productId) {
    let matchingProduct;
    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });
    let html = `
      <div class="background-container"></div>
      <div class="inspect-container">
        <img class="close-button js-inspect-close" src="./Images/Icons/remove.png" />
        <img
          class="image card-image"
          src="${matchingProduct.image}"
        />
        <div class="body">
          <div class="inspect-game-name-div">
            <div class="game-name">${matchingProduct.name}</div>
          </div>
          <div class="dev-name-div game-info">
            <img class="icon" src="./Images/Icons/coding.png" alt="" />
            <div class="dev-name game-sub">Dev(s): ${matchingProduct.gameDev}</div>
          </div>
          <div class="rating-div game-info">
            <img class="icon" src="./Images/Icons/pixel_star.png" alt="" />
            <div class="rating game-sub">${matchingProduct.rating}</div>
          </div>
          <div class="release-date game-info">
            <img class="icon" src="./Images/Icons/calendar.png" alt="" />
            <div class="release-date game-sub">${matchingProduct.releaseDate}</div>
          </div>
          <button class="inspect-add-to-cart js-add-to-cart">Add To Cart</button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", html);
    document
      .querySelector(".inspect-add-to-cart")
      .addEventListener("click", () => {
        cart.addToCart(productId);
        renderHeader();
      });
    document
      .querySelector(".js-inspect-close")
      .addEventListener("click", () => {
        document.querySelector(".inspect-container").remove();
        document.querySelector(".background-container").remove();
      });
  }
  document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      cart.addToCart(productId);
      button.innerHTML = "Added!";
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        button.innerHTML = "Add to cart";
      }, 1000);
      renderHeader();
    });
  });
  document.querySelectorAll(".js-inspect").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      displayCardInfoHTML(productId);
    });
  });
}

SetUpMoreButtonFunction();
function SetUpMoreButtonFunction() {
  const moreButtonElement = document.querySelector(".more-button");
  moreButtonElement.addEventListener("click", () => {
    if (moreButtonElement.innerText === "More") {
      initialLimit += 10;
      if (initialLimit >= products.length) {
        moreButtonElement.innerHTML = "Show Less";
      }
    } else if (moreButtonElement.innerText === "Show Less") {
      initialLimit -= 10;
      if (initialLimit <= 10) {
        moreButtonElement.innerHTML = "More";
      }
    }
    renderGamesGrid();
  });
}
