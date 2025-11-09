import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/header.js";
renderOrderSummary();
renderPaymentSummary();
renderCheckoutHeader();





//useless controllers 
document.querySelector('.log-in-button').addEventListener('click', () => {
  alert("this button will be fully functional when i learn backend, i keep learning and studying so be tuned :3")
})