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
}
renderHeader()
renderPopularGamesGrid()
renderGamesGrid()


