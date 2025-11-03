import { cart } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
let deliveryPrice = 0
/*
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
    <div class="pay-check-title-div">
      <div class="pay-check-title">Select Delivery Option</div>
    </div>
    <div class="delivery-info">
      <div class="radio-input-div">
        <input data-delivery-price-cents="0" class="radio-input js-radio-input" type="radio" name="delivery" ${deliveryPrice === 0 ? 'checked' : ""} />
        <input data-delivery-price-cents="399" class="radio-input js-radio-input"" type="radio" name="delivery" ${deliveryPrice === 399 ? 'checked' : ""} />
        <input data-delivery-price-cents="599" class="radio-input js-radio-input"" type="radio" name="delivery" ${deliveryPrice === 599 ? 'checked' : ""} />
      </div>
      <div class="delivery-options">
        <div class="delivery-option">
          <div class="delivery-text">
            <span class="delivery-title">Standard (1 month)</span>
            <span class="delivery-sub">FREE</span>
          </div>
        </div>
        <div class="delivery-option">
          <div class="delivery-text">
            <span class="delivery-title">Express(10days) </span>
            <span class="delivery-sub">$4.00</span>
          </div>
        </div>
        <div class="delivery-option">
          <div class="delivery-text">
            <span class="delivery-title">Super Express(2-3 days) </span>
            <span class="delivery-sub">$6.00</span>
          </div>
        </div>
      </div>
    </div>
    <div class="total-cash-div">
      <div class="price-div cash-div">
        <p class="price-text">Price:</p>
        <p class="price-text">$${formatCurrency(totalBeforeTax)}</p>
      </div>
      <div class="tax-div cash-div">
        <p class="price-text">Tax(10%):</p>
        <p class="price-text">$${formatCurrency(tax)}</p>
      </div>
      <div class="delivery-price-div cash-div">
        <p class="price-text">Delivery:</p>
        <p class="price-text">$${formatCurrency(deliveryPrice)}</p>
      </div>
    </div>
    <div class="pay-button-div">
      <button class="pay-button js-pay">Pay($${formatCurrency(total)})</button>
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
*/