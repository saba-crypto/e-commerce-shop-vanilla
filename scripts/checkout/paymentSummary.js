import { cart } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
let deliveryPrice = 0

export function renderPaymentSummary() {
  let totalBeforeTax = 0;
  products.forEach((product) => {
    cart.cartItems.forEach((cartItem) => {
      if (product.id === cartItem.productId) {
        totalBeforeTax += Number(product.priceCents * cartItem.quantity)
      }
    });
  });
  const tax = totalBeforeTax * 0.1;
  const total = totalBeforeTax + tax + deliveryPrice;

  let paymentHtml = `
    <h2 class="pay-check-title">Order summary</h2>
      <div class="total-cash-div">
        <div class="price-div cash-div">
          <p class="price-text">Items(${cart.calculateTotalCartQuantity()}):</p>
          <p class="price-text">$${formatCurrency(totalBeforeTax)}</p>
        </div>
        <div class="tax-div cash-div">
          <p class="price-text">shipping:</p>
          <p class="price-text">$UNKNOWN</p>
        </div>
        <div class="delivery-price-div cash-div">
          <p class="price-text">Total before tax:</p>
          <p class="price-text">$15.98</p>
        </div>
        <div class="cash-div">
          <p class="price-text">Estimated tax(10%):</p>
          <p class="price-text">$1.60</p>
        </div>
      </div>
      <div class="total-div">
        <div class="total">
          Order total: <span style="color: navy">$17.58</span>
        </div>
      </div>
      <div class="pay-button-div">
        <button class="pay-button js-pay">Pay</button>
      </div>
  `
  document.querySelector('.js-payment-summary').innerHTML = paymentHtml

  document.querySelectorAll('.js-radio-input').forEach((element) => {
    element.addEventListener('click', () => {
      const deliveryPriceCents = element.dataset.deliveryPriceCents
      deliveryPrice = Number(deliveryPriceCents)
      renderPaymentSummary()
    });
  });
  document.querySelector('.js-pay').addEventListener('click' , () => {
    window.location.href = 'orders.html'
  })
}
