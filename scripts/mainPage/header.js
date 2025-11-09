import { cart } from "../../data/cart.js"
export function renderHeader() {
  let html =
  `
  <div class="left-segment">
    <img class="menu-icon" src="/Images/Icons/menu.png" alt="" />
    <p class="home js-home-link">Home</p>
  </div>

  <div class="middle-segment">
    <div class="search-bar-div">
      <div class="search-button js-search-button">
        <img
          class="search-icon"
          src="/Images/Icons/white-search.png"
          alt=""
        />
      </div>
      <input name="search-bar-input" class="search-bar js-search-bar" type="text" placeholder="Search" />
    </div>
  </div>

  <div class="right-segment">
    <div class="log-in-div">
      <button class="log-in-button">Log In</button>
    </div>
    <div class="cart-icon-div js-cart-icon"> 
        <img
          class="cart-icon"
          src="/Images/Icons/Shopping-cart-icon.png"
          alt=""
        />
      ${cart.cartItems.length > 0 ? `<p class="badge">${cart.calculateTotalCartQuantity()}</p>` : ""}
      <p class="tooltip">Checkout</p>
    </div>
    <div class="profile-picture-div">
      <img class="profile-picture" src="/images/IMG_2176.jpg" alt="" />
      <div class="tooltip">
        <p class="first-name">
          <img
            class="identity-icon"
            src="/Images/Icons/user.png"
            alt=""
          />First name: Saba
        </p>
        <p class="last-name">
          <img
            class="identity-icon"
            src="/Images/Icons/user.png"
            alt=""
          />Last name: Gochishvili
        </p>
        <p class="number">
          <img
            class="identity-icon"
            src="/Images/Icons/telephone.png"
            alt=""
          />
          Phone number: 2910291-1921
        </p>
        <p class="address">
          <img
            class="identity-icon"
            src="/Images/Icons/pin.png"
            alt=""
          />Address: white house
        </p>
      </div>
    </div>
  </div>`
  document.querySelector('.main-header').innerHTML = html
  document.querySelector('.js-cart-icon').addEventListener('click', () => {
    window.location.href = 'checkout.html'
  })
  document.querySelector('.js-home-link').addEventListener('click', () => {
    window.location.href = 'index.html'
  })
  document.querySelector('.js-search-button').addEventListener('click', () => {
    const searchValue = document.querySelector('.js-search-bar').value
    document.location.href = `index.html?search=${searchValue}`
  })
  document.querySelector('.js-search-bar').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const searchValue = document.querySelector('.js-search-bar').value
      document.location.href = `index.html?search=${searchValue}`
    }
  })
}