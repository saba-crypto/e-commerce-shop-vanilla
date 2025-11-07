import { cart } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import {deliveryOptions} from "../../data/deliveryOptions.js"
import { orders } from "../../data/orders.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"
let deliveryPrice = 0

export function renderPaymentSummary() {
  let itemsPriceCents = 0;
  let shippingCost = 0;
  products.forEach((product) => {
    cart.cartItems.forEach((cartItem) => {
      if (product.id === cartItem.productId) {
        itemsPriceCents += Number(product.priceCents * cartItem.quantity)
      }
    });
  });
  cart.cartItems.forEach((cartItem) => {
    deliveryOptions.forEach((option) => {
      if (cartItem.deliveryOptionId === option.id) {
        shippingCost += option.priceCents
      }
    });
  });
  const totalBeforeTax = itemsPriceCents + shippingCost
  const taxCents = totalBeforeTax * 0.1
  const totalCents = totalBeforeTax + taxCents
  let paymentHtml = `
    <h2 class="pay-check-title">Order summary</h2>
      <div class="total-cash-div">
        <div class="price-div cash-div">
          <p class="price-text">Items(${cart.calculateTotalCartQuantity()}):</p>
          <p class="price-text">$${formatCurrency(itemsPriceCents)}</p>
        </div>
        <div class="tax-div cash-div">
          <p class="price-text">shipping:</p>
          <p class="price-text">$${formatCurrency(shippingCost)}</p>
        </div>
        <div class="delivery-price-div cash-div">
          <p class="price-text">Total before tax:</p>
          <p class="price-text">$${formatCurrency(totalBeforeTax)}</p>
        </div>
        <div class="cash-div">
          <p class="price-text">Estimated tax(10%):</p>
          <p class="price-text">$${formatCurrency(taxCents)}</p>
        </div>
      </div>
      <div class="total-div">
        <div class="total">
          Order total: <span style="color: navy">$${formatCurrency(totalCents)}</span>
        </div>
      </div>
      <div class="pay-button-div">
        <button class="pay-button js-pay">Pay</button>
      </div>
  `
  document.querySelector('.js-payment-summary').innerHTML = paymentHtml;
  if (cart.cartItems.length === 0) {
    document.querySelector('.js-pay').classList.add('faded')
  }
  
  document.querySelectorAll('.js-radio-input').forEach((element) => {
    element.addEventListener('click', () => {
      const deliveryPriceCents = element.dataset.deliveryPriceCents
      deliveryPrice = Number(deliveryPriceCents)
      renderPaymentSummary()
    });
  });
  function generateRandomId(length = 10) {
    return Math.random().toString(36).substring(2, 2 + length);
  }
  document.querySelector('.js-pay').addEventListener('click' , () => {
    if (cart.cartItems.length >= 1) {
      orders.ordersData.push({
        id: generateRandomId(),
        items: cart.cartItems,
        date: dayjs(),
        totalCents: totalCents})
      orders.saveToStorage()
      localStorage.removeItem('cart')
      window.location.href = 'orders.html'
    }
  })
}

