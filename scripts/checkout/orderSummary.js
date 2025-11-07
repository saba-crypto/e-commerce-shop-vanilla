import { cart } from "../../data/cart.js";
import { products } from "../../data/products.js";
import {formatCurrency} from '../utils/money.js'
import { renderPaymentSummary } from "./paymentSummary.js";
import { renderCheckoutHeader } from "./header.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";
export function renderOrderSummary() {
  let html = ''
  let matchingProduct;
  cart.cartItems.forEach((cartItem) => {
    products.forEach((product) => {
      if (product.id === cartItem.productId) {
        matchingProduct = product
      }
    })
    html += 
    `
    <div class="game-card">
      <div class="game-image-div">
        <img
          class="game-image"
          draggable="false"
          src="${matchingProduct.image}"
          alt=""
        />
      </div>
      <div class="game-info-div">
        <div class="game-name-div">
          <h2 class="game-name">${matchingProduct.name}</h2>
        </div>
        <div class="game-price-quantity-div">
          <p class="price">Price: $${formatCurrency(matchingProduct.priceCents)}</p>
          <p class="quantity">
            Quantity:
            <span
              class="quantity-label js-quantity-label-id-${cartItem.productId}"
            >
              ${cartItem.quantity}</span
            ><input
              class="quantity-input js-quantity-input-id-${cartItem.productId}"
              type="number"
            /><button
              data-product-id="${cartItem.productId}"
              class="save-button js-save-button js-save-button-id-${cartItem.productId}"
            >
              Save
            </button>
          </p>
        </div>
        <div class="buttons-div">
          <button
            data-product-id="${cartItem.productId}"
            class="remove-button js-delete-button"
          >
            Remove
          </button>
          <button
            data-product-id="${cartItem.productId}"
            class="update-button js-update-button"
          >
            Update
          </button>
        </div>
      </div>
      <div class="delivery-options-div">
      <div class="delivery-option-title">Delivery Options:</div>
      ${deliveryOptionsHtml(cartItem.productId)}
      </div>
    </div>
    `
    
  });
  document.querySelector('.js-order-summary').innerHTML = html;
  function deliveryOptionsHtml(productId) {
    let html = '';
    deliveryOptions.forEach((deliveryOption) => {
      let matchingCartItem;
      cart.cartItems.forEach((cartItem) => {
        if (cartItem.productId === productId) {
          matchingCartItem = cartItem
        }
      });
      const isChecked = matchingCartItem.deliveryOptionId === deliveryOption.id ? "checked" : "";
      html += `
      <div class="delivery-option js-delivery-option js-delivery-option-id-${deliveryOption.id}" >
        <input
        ${isChecked}
          class="radio-input js-radio-input"
          type="radio"
          name="delivery-option-id-${productId}"
          data-delivery-id="${deliveryOption.id}"
          data-product-id="${productId}"
        />
        <p class="delivery-title">
          ${deliveryOption.deliveryName} <span class="date-sub">(${deliveryOption.deliveryDays === 30 ? '1 Month' : `${deliveryOption.deliveryDays} days`})</span>
        </p>
        <p class="delivery-sub">${deliveryOption.priceCents === 0.00 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)}`}</p>
      </div>`
      
      });
      return html
    }
  
  
  document.querySelectorAll('.js-radio-input').forEach((input) => {
    input.addEventListener('click', () => {
      const deliveryOptionId = input.dataset.deliveryId;
      const productId = input.dataset.productId
      cart.changeDeliveryOptionId(productId, deliveryOptionId);
      renderOrderSummary();
    })
  })
  document.querySelectorAll('.js-delete-button').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId
      cart.removeFromCart(productId)
      renderOrderSummary()
      renderPaymentSummary()
      renderCheckoutHeader()
    })  
  });
  document.querySelectorAll('.js-update-button').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId
      document.querySelector(`.js-quantity-input-id-${productId}`).classList.add('show')
      document.querySelector(`.js-quantity-label-id-${productId}`).classList.add('hide')
      document.querySelector(`.js-save-button-id-${productId}`).classList.add('show')
    })
  });
  document.querySelectorAll('.js-save-button').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId
      const inputElement = document.querySelector(`.js-quantity-input-id-${productId}`)
      cart.updateCartQuantity(productId, inputElement.value)
      inputElement.classList.remove('show')
      button.classList.remove('show')
      document.querySelector(`.js-quantity-label-id-${productId}`).classList.remove('hide')
      renderOrderSummary()
      renderPaymentSummary()
      renderCheckoutHeader()
    })
  })
  
} 


   
