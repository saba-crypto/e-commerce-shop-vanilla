import {renderPopularGamesGrid} from './mainPage/popularGames.js';
import {renderGamesGrid} from './mainPage/games.js';
import { renderHeader } from './mainPage/header.js';
import { filterProducts } from '../data/products.js';
let url = new URLSearchParams(window.location.search)
if (url.get('search')) {
  document.querySelector('.js-second-section').remove()
  document.querySelector('.js-more-games-title').innerHTML = 'Search Results:'
  document.querySelector('.more-button').remove()
  const searchValue = url.get('search')
  filterProducts(searchValue)
  document.querySelector('.js-more-games-title').scrollIntoView({block: 'start'})
}
renderHeader()
renderPopularGamesGrid()
renderGamesGrid()




//useless controllers 
document.querySelectorAll('.subscription-card .buy-now-button').forEach((button) => {
  button.addEventListener('click', () => {
    alert('i want to learn databases and overall backend to make this button interactive, so no premium subscription for ya :3')
  });
});
document.querySelector('.log-in-button').addEventListener('click', () => {
  alert("this button will be fully functional when i learn backend, i keep learning and studying so be tuned :3")
})
document.querySelector('.sign-up-button').addEventListener('click', () => {
  alert("this button will be fully functional when i learn backend, i keep learning and studying so be tuned :3")
})
document.querySelectorAll('.widget').forEach((link) => {
  link.addEventListener('click', () => {
    alert("ima be honest... \ni'm kinda lazy to make this link interactive :/ \nBUT make sure to check out my youtube, github and facebook, links below :) ")
  })
})



