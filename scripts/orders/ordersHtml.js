import { orders } from "../../data/orders.js";
import { formatCurrency } from "../utils/money.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"
import { products } from "../../data/products.js";
import { cart } from "../../data/cart.js";
import { renderHeader } from "../shared/header.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";
export function renderOrders() {
  document.title = orders.ordersData.length === 0 ? document.title = 'Orders' : `Orders(${orders.ordersData.length})`
  let html = ''
  
  orders.ordersData.reverse().forEach((order) => {
    html += `
      <div class="order-container">
        <div class="order-header">
          <div>
            <p class="bold">Order Placed:</p>
            <p>${dayjs(order.date).format('MMMM D')}</p>
          </div>
          <div>
            <p class="bold">Total:</p>
            <p>$${formatCurrency(order.totalCents)}</p>
          </div>
          <div>
            <p class="bold">Order Id:</p>
            <p>${order.id}</p>
          </div>
        </div>
        <div class="orders-grid">
          ${generateOrderHtml(order)}
        </div>
      </div>
    `
  })
  
    document.querySelector('.js-orders-summary').innerHTML = html;

    //buy again button
    document.querySelectorAll('.js-buy-again').forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        cart.addToCart(productId)
        renderHeader();
      });
    });
    
}
function generateOrderHtml(order) {
    let matchingProduct;
    let ordersHtml = ''
    let arrivalDate;
    order.items.forEach((cartItem, index) => {
      products.forEach((product) => {
        if (product.id === cartItem.productId) {
          matchingProduct = product
        }
      })
      const today = Number(dayjs().format('D'));
      const orderDate = Number(dayjs(order.date).format('D'))
      let deliveryDate;
      deliveryOptions.forEach((option) => {
        if (option.id === cartItem.deliveryOptionId) {
          arrivalDate = dayjs(order.date).add(option.deliveryDays, 'days')
          deliveryDate = orderDate + option.deliveryDays
        }
      });
      let progBarPercentage = ((today - orderDate) / (deliveryDate - orderDate)) * 100;
      if (progBarPercentage < 5) {
        progBarPercentage = 5
      }
      ordersHtml += `
        <div class="order">
          <div class="product-image-div">
            <img
              class="product-image"
              src="${matchingProduct.image}"
              alt=""
            />
          </div>
          <div class="order-info">
            <div class="product-description">
              <div style="text-align: center;">${matchingProduct.name}</div>
              <div style="text-align: center;">Quantity: ${cartItem.quantity}</div>
            </div>
            <div class="arrival-text">Arriving on: ${dayjs(arrivalDate).format('MMMM D')}</div>
            <div class="progress-div">
              <div class="progress-status-text">
                <p>Prepared</p>
                <p>Sent</p>
                <p>Delivered</p>
              </div>
              <div class="progress-bar">
                <div style="width: ${progBarPercentage}%;" class="progress-status"></div>
              </div>
            </div>
          </div>
          <div class="buy-again-div">
            <button data-product-id="${cartItem.productId}" class="buy-again-button js-buy-again">
              <img
                class="buy-it-again-image"
                src="/Images/Icons/buy-again.png"
              />
              Buy It Again
            </button>
          </div>
        </div>
        ${order.items.length === index + 1 ? "" : `<hr color="var(--secondary-clr)" width="90%" />`}
        
      `
    })
    return ordersHtml;
    }
  
