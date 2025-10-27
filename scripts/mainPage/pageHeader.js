import { calculateTotalCartQuantity } from "../../data/cart.js"
export function renderHeader() {
  let html =
  `
  <div class="left-segment">
    <img class="menu-icon" src="/Images/Icons/menu.png" alt="" />
    <a class="home" href="#"><p class="home">Home</p></a>
  </div>

  <div class="middle-segment">
    <div class="search-bar-div">
      <img
        class="search-icon"
        src="/Images/Icons/white-search.png"
        alt=""
      />
      <input class="search-bar" type="text" placeholder="Search" />
    </div>
  </div>

  <div class="right-segment">
    <div class="log-in-div">
      <button class="log-in-button">Log In</button>
    </div>
    <div class="cart-icon-div">
      <a href="/HTML-CSS/Checkout.html"
        ><img
          class="cart-icon"
          src="/Images/Icons/Shopping-cart-icon.png"
          alt=""
      /></a>
      <p class="badge">${calculateTotalCartQuantity()}</p>
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
}