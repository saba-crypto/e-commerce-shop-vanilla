import { renderHeader } from "./shared/header.js";
import { renderOrders } from "./orders/ordersHtml.js";
import { renderSidebar } from "./shared/sidebar.js";
let url = new URLSearchParams(window.location.search)
if (url.get('search')) {
  document.querySelector('.js-second-section').remove()
  document.querySelector('.js-more-games-title').innerHTML = 'Search Results:'
  document.querySelector('.more-button').remove()
  const searchValue = url.get('search')
  filterProducts(searchValue)
}
renderHeader();
renderOrders();
renderSidebar();







//useless controllers 
document.querySelector('.log-in-button').addEventListener('click', () => {
  alert("this button will be fully functional when i learn backend, i keep learning and studying so be tuned :3")
})
